#!/bin/sh
set -e

PORT=${PORT:-8000}

# Send container errors to Render's log stream instead of the ephemeral
# application log file.
export LOG_CHANNEL=stderr
export APP_DEBUG=true

# Keep the free Render demo usable even if the old placeholder MySQL
# variables are still present in the service environment.
if [ "${DB_HOST:-}" = "your-database-host" ]; then
    export DB_CONNECTION=sqlite
    export DB_DATABASE=/app/database/database.sqlite
fi

if [ "${DB_CONNECTION:-mysql}" = "sqlite" ]; then
    DB_PATH=${DB_DATABASE:-/app/database/database.sqlite}
    mkdir -p "$(dirname "$DB_PATH")"
    touch "$DB_PATH"
fi

php artisan migrate --force
php artisan db:seed --class=Database\\Seeders\\DatabaseSeeder --force
php artisan config:cache

php -S 0.0.0.0:$PORT -t public
