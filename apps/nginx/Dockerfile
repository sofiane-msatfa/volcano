FROM nginx:alpine

RUN rm /etc/nginx/conf.d/*

COPY default.conf /etc/nginx/conf.d/default.conf
COPY certs/* /etc/nginx/certs/

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]