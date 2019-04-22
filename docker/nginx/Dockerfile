FROM nginx:1.15.12-alpine

RUN rm -f /etc/nginx/conf.d/*
ADD ./docker/nginx/nginx.conf /etc/nginx/conf.d/app.conf
