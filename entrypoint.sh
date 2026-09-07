#!/bin/sh
set -e

PORT=${PORT:-8000}

if [ "${DB_CONNECTION:-mysql}" = "sqlite" ]; then
    DB_PATH=${DB_DATABASE:-/app/database/database.sqlite}
    mkdir -p "$(dirname "$DB_PATH")"
    touch "$DB_PATH"
fi

php artisan migrate --force
php artisan db:seed --class=Database\\Seeders\\DatabaseSeeder --force
php artisan config:cache

php -S 0.0.0.0:$PORT -t public
