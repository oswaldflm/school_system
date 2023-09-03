#!/bin/sh
container_name=school_system
database_name=postgresdb_school
echo "=========================="
echo "Building Containers"
echo "=========================="
docker-compose build --no-cache
docker-compose up -d redis
docker-compose up -d $database_name
echo "=========================="
echo "RESTORING Database"
echo "=========================="

# until docker-compose run --rm postgresdb bash -c "pg_isready -h postgresdb -p 5432"; do
#   echo "Wait until work"
#   sleep 2;
# done

# docker-compose exec -T postgresdb psql -U rails -d $database_name < ./test_dev_2022

docker-compose run --rm $container_name bundle exec rails db:migrate

docker-compose run --rm $container_name bundle exec rails db:seed
docker-compose up -d