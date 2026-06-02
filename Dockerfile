FROM php:8.2-alpine

RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /app
COPY . .
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
