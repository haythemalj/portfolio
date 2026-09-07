FROM php:8.2-alpine

RUN apk add --no-cache sqlite-dev
RUN docker-php-ext-install pdo pdo_mysql pdo_sqlite

WORKDIR /app
COPY . .
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
