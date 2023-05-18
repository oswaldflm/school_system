#!/bin/sh
ARG rails_container=school
echo "=========================="
echo "budle install"
echo "=========================="
docker-compose run --rm ${rails_container} bundle install

echo "=========================="
echo "rails db:migrate"
echo "=========================="
docker-compose run --rm ${rails_container} bundle exec rails db:migrate

echo "=========================="
echo "Runing containers"
echo "=========================="
docker compose up -d