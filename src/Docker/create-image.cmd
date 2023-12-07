docker build --no-cache -f SQL\Dockerfile.PostgreSql -t tablchast_4/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t tablchast_4/app ../..
