from collections import OrderedDict
import requests
from unittest.mock import Mock

from dagster import resource, InitResourceContext


# this is needed so that get requests work for all websites
headers = OrderedDict([
    ("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0) Gecko/20100101 Firefox/77.0"),
    ("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"),
    ("Accept-Language", "en-US,en;q=0.5"),
    ("Referer", "https://www.google.com/"),
    ("DNT", "1"),
    ("Connection", "keep-alive"),
    ("Upgrade-Insecure-Requests", "1")
])


@resource(required_resource_keys={"thread_local"})
def http_client(init_context: InitResourceContext) -> requests.Session:
    thread_local = init_context.resources.thread_local
    # each thread needs its own Session; thread_local manages the thread storage for us
    if not hasattr(thread_local, "session"):
        session = requests.Session()
        session.headers = headers
        thread_local.session = session
    return thread_local.session


@resource(required_resource_keys={"thread_local"})
def mock_http_client(_init_context) -> requests.Session:
    return Mock(spec=requests.Session)
