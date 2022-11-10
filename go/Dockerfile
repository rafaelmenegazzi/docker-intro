FROM golang:latest as goBuilder

COPY /hello /go/src/hello

WORKDIR /go/src/hello

RUN go mod init hello
RUN go build hello.go

FROM scratch

COPY --from=goBuilder /go/src/hello/hello .

CMD ["/hello"]