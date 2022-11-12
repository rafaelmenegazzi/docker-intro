# GO Hello-world

Running locally
```bash
docker run --rm rafaelmenegazzi/hello-go:latest
```

Image available at https://hub.docker.com/repository/docker/rafaelmenegazzi/hello-go

Developing locally using Golang
```bash
cd go
docker run --rm -it -v $(pwd)/hello:/go/src/hello golang:latest
cd src/hello
go run .
```

To build image
```bash
cd go
docker build -t <tag> .
```

To publish image
```bash
cd go
docker push <tag>
```

# NodeJS with Ngix + MySQL

Running locally
```bash
cd nodejs
docker-compose up -d
curl http://localhost:8080/
```

Creating new tables in mysql
```bash
docker-compose up -d
docker exec -it db bash
mysql -u root -p
root
show databases;
use nodedb
create table <table_name>(<table_params>);
desc <table_name>;
```

Dumping your MySQL schema to a file
```
docker-compose up -d
docker exec -it db bash
mysqldump -u root -p --no-data nodedb > /var/lib/mysql/schema.sql
```

Copy `schema.sql` from `nodejs/mysql/db` to `nodejs/mysql`
Rebuild
```bash
docker-compose build
```