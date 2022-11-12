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
