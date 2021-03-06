import uuid

from sqlalchemy import Column, DateTime, Enum, ForeignKey, Integer, JSON, String, Table
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

from etl.common import AfAccuracy, AfBias, AsBias, MbfcAccuracy, MbfcBias

Base = declarative_base()


class Source(Base):
    __tablename__ = "sources"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True)
    name = Column(String, nullable=False)
    short_name = Column(String)
    long_name = Column(String)
    rss_url = Column(String, nullable=False, unique=True)
    html_parser_config = Column(JSON, nullable=False)
    allsides_bias = Column(Enum(AsBias))
    mbfc_bias = Column(Enum(MbfcBias))
    mbfc_accuracy = Column(Enum(MbfcAccuracy))
    af_bias = Column(Enum(AfBias))
    af_accuracy = Column(Enum(AfAccuracy))


class Article(Base):
    __tablename__ = "articles"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True)
    url = Column(String, nullable=False, unique=True)
    source_id = Column(UUID(as_uuid=True), ForeignKey("sources.id"), nullable=False)
    summary = Column(String)
    title = Column(String)
    parsed_content = Column(String)
    published_at = Column(DateTime, nullable=False, index=True)
    authors = Column(String)

    # many to one
    source = relationship("Source", foreign_keys=[source_id])


class Count(Base):
    __tablename__ = "counts"
    article_id = Column(UUID(as_uuid=True), ForeignKey("articles.id"), primary_key=True, index=True, nullable=False)
    term = Column(String, index=True, nullable=False)
    count = Column(Integer, nullable=False)
