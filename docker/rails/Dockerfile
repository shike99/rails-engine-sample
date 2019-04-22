FROM ruby:2.6.3

ENV LANG C.UTF-8

RUN apt-get update && \
    apt-get install -y build-essential libpq-dev postgresql-client git vim && \
    rm -rf /var/lib/apt/lists/*

ENV APP_HOME /var/www
RUN mkdir -p $APP_HOME && mkdir -p $APP_HOME/tmp/sockets
WORKDIR $APP_HOME

ADD ./backend/Gemfile* $APP_HOME/
RUN bundle install

ADD ./backend $APP_HOME/
