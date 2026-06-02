FROM php:8.2-alpine

RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /app
COPY . .

CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
