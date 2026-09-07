#!/bin/sh
set -e

PORT=${PORT:-8000}

# Send container errors to Render's log stream instead of the ephemeral
# application log file.
export LOG_CHANNEL=stderr
if [ -n "${RENDER_EXTERNAL_URL:-}" ]; then
    export APP_URL="$RENDER_EXTERNAL_URL"
fi

# The free demo can start even when an invalid placeholder APP_KEY was saved
# in Render. A configured valid key is preserved across restarts.
if ! php -r '$key = getenv("APP_KEY"); if (strncmp($key, "base64:", 7) === 0) { $key = base64_decode(substr($key, 7), true); } exit(in_array(strlen((string) $key), [16, 32], true) ? 0 : 1);'; then
    export APP_KEY="base64:$(php -r 'echo base64_encode(random_bytes(32));')"
fi

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
