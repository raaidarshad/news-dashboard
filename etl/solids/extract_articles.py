import concurrent.futures
import datetime
import requests
from uuid import UUID

from dagster import String, solid
from sqlalchemy.orm import Session

from etl.common import Context
from etl.db.models import Article as DbArticle, Source as DbSource
from etl.models import Article, Feed, FeedEntry, Source
from etl.resources.html_parser import BaseParser


@solid(required_resource_keys={"database_client"})
def get_all_sources(context: Context) -> list[Source]:
    db_client: Session = context.resources.database_client
    sources = db_client.query(DbSource).all()
    context.log.info(f"Got {len(sources)} sources")
    return [Source(**s.__dict__) for s in sources]


@solid
def create_source_map(_context: Context, sources: list[Source]) -> dict[UUID, Source]:
    return {s.id: s for s in sources}


@solid(required_resource_keys={"rss_parser"}, config_schema={"time_threshold": String})
def get_latest_feeds(context: Context, sources: list[Source]) -> list[Feed]:

    time_threshold_str = context.solid_config["time_threshold"]
    time_threshold = datetime.datetime.strptime(time_threshold_str, "%Y-%m-%d %H:%M:%S.%f%z")
    last_modified_header = time_threshold.strftime("%a, %d %m %Y %H:%M:%S GMT")

    def _parse_raw_to_feed(raw_feed, entries: list[FeedEntry], source_id: UUID) -> Feed:
        try:
            updated = raw_feed.updated
        except AttributeError:
            context.log.debug(f"Raw feed for source with id {source_id} doesn't have 'updated' field")
            updated = str(datetime.datetime.now(datetime.timezone.utc))
        return Feed(entries=entries, source_id=source_id, updated_at=_format_time(updated), **raw_feed)

    def _format_time(raw_time: str) -> datetime.datetime:
        for fmt in ("%a, %d %b %Y %H:%M:%S %z",
                    "%a, %d %b %Y %H:%M:%S %Z",
                    "%Y-%m-%dT%H:%M:%SZ",
                    "%Y-%m-%dT%H:%M:%S%z",
                    "%Y-%m-%d %H:%M:%S.%f%z"):
            try:
                dt = datetime.datetime.strptime(raw_time, fmt)
                if not dt.tzinfo:
                    dt = dt.astimezone(datetime.timezone.utc)
                return dt
            except ValueError:
                pass
        raise ValueError(f"no valid date format found for {raw_time}")

    def _get_latest_feed(source: Source) -> Feed:
        # TODO wrap in try/except to handle when retrieval/parsing unsuccessful
        raw = context.resources.rss_parser.parse(source.rss_url, modified=last_modified_header)

        if raw.status == 200:
            entries = [FeedEntry(source_id=source.id, published_at=_format_time(e.published), **e) for e in raw.entries]
            return _parse_raw_to_feed(raw_feed=raw.feed, entries=entries, source_id=source.id)

    filtered_feeds = list(filter(None, [_get_latest_feed(source) for source in sources]))
    context.log.info(f"Filtered down to {len(filtered_feeds)} feeds updated since {time_threshold}")
    return filtered_feeds


@solid(config_schema={"time_threshold": String})
def filter_to_new_entries(context: Context, feeds: list[Feed]) -> list[FeedEntry]:

    def time_filter(entry: FeedEntry, later_than: datetime.datetime) -> bool:
        return entry.published_at > later_than

    time_threshold_str = context.solid_config["time_threshold"]
    time_threshold = datetime.datetime.strptime(time_threshold_str, "%Y-%m-%d %H:%M:%S.%f%z")

    entries = []
    for feed in feeds:
        entries.extend([entry for entry in feed.entries if time_filter(entry, time_threshold)])
    context.log.info(f"Filtered down to {len(entries)} entries that were published since {time_threshold}")
    return entries


@solid(required_resource_keys={"http_client", "html_parser"})
def extract_articles(context: Context, entries: list[FeedEntry], source_map: dict[UUID, Source]) -> list[Article]:

    def _get_response_for_entry(feed_entry: FeedEntry) -> requests.Response:
        # TODO wrap in try/except, handle error cases
        # TODO need to do whole concurrent futures thing, rethink resources for this one? idk
        http_session: requests.Session = context.resources.http_client
        return http_session.get(feed_entry.url)

    def _get_article_from_response(
            response: requests.Response,
            feed_entry: FeedEntry) -> Article:
        parser: BaseParser = context.resources.html_parser
        # TODO make try/except better here
        source = source_map[feed_entry.source_id]
        try:
            text = parser.extract(content=response.content, parse_config=source.html_parser_config)
        except:
            context.log.info(f"Entry with URL {feed_entry.url} was not parsed successfully")
            text = feed_entry.summary
        return Article(parsed_content=text, **feed_entry.dict())

    def _extract_article(feed_entry: FeedEntry) -> Article:
        return _get_article_from_response(response=_get_response_for_entry(feed_entry), feed_entry=feed_entry)

    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        articles = executor.map(_extract_article, entries)
        return list(articles)


@solid(required_resource_keys={"database_client"})
def load_articles(context: Context, articles: list[Article]):
    # take the collected articles and put them in the db
    db_client: Session = context.resources.database_client
    db_articles = [DbArticle(**article.dict()) for article in articles]
    db_client.add_all(db_articles)
    db_client.commit()
