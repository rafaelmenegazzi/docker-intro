FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD ["nginx", "-g", "daemon off;"]