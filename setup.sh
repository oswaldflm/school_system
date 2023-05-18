#!/bin/sh

echo "=========================="
echo "Building Containers"
echo "=========================="
docker-compose build
echo "=========================="
echo "Building Containers Redis and Postgres"
echo "=========================="
docker-compose up -d redis
docker-compose up -d postgresdb
# echo "=========================="
# echo "RESTORING Database"
# echo "=========================="

# until docker-compose run --rm postgresdb bash -c "pg_isready -h postgresdb -p 5432"; do
#   echo "Wait until work"
#   sleep 2;
# done

# docker-compose exec -T postgresdb psql -U rails -d database_name_dev < ./dabase_name_dev_2022

echo "=========================="
echo "Execute container Raisl db:migrate"
echo "=========================="
docker-compose run --rm school bundle exec rails db:migrate

echo "=========================="
echo "Execute container rails"
echo "=========================="
docker-compose up -d
