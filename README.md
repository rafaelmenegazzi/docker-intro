# GO

Locally develop using Golang
```
cd go
docker run --rm -it -v $(pwd)/src:/go/src golang:latest
```

To build image
```
cd go
docker build -t rafaelmenegazzi/hello-go:latest . -f Dockerfile.prod 
```

Image available at:
```
https://hub.docker.com/repository/docker/rafaelmenegazzi/hello-go
```



