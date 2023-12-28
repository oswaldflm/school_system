FROM ruby:3.2.0

RUN apt-get update -qq \
  && apt-get install -y curl build-essential libpq-dev \
  nodejs postgresql-client &&\
  curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y nodejs yarn && \
  apt-get install imagemagick

WORKDIR /school_system

COPY /Gemfile* ./

RUN gem install bundler -v 2.4.12

RUN bundle check || bundle install

RUN bundle install

RUN bundle config set --local path 'vendor/cache'

COPY /package.json ./
COPY /yarn.lock ./

RUN yarn install --check-files

COPY / ./

# Want to add entry points
# COPY docker-entrypoint.sh sidekiq-entrypoint.sh /usr/bin

EXPOSE 3000