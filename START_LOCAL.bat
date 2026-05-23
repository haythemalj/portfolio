@echo off
REM Portfolio Local Testing Script
REM This script starts the portfolio locally for testing

echo.
echo ========================================
echo  PORTFOLIO LOCAL TEST STARTUP
echo ========================================
echo.

cd /d "C:\laragon\www\Portfolio"

echo Checking Laravel setup...
if not exist vendor (
    echo Installing Composer dependencies...
    composer install
)

echo.
echo Starting Laravel development server...
echo.
echo Access your portfolio at: http://localhost:8000
echo.
echo Press CTRL+C to stop the server
echo.

php artisan serve

pause
