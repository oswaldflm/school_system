#!/bin/sh
rails_container=school
echo "=========================="
echo "bundle install and build"
echo "=========================="
docker-compose run --rm $rails_container bundler install
docker-compose build
echo "=========================="
echo "rails db:migrate"
echo "=========================="
docker-compose run --rm $rails_container bundle exec rails db:migrate

echo "=========================="
echo "Runing containers"
echo "=========================="
docker compose up -d