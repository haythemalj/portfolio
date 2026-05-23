@echo off
cd /d "C:\laragon\www\Portfolio"
"C:\laragon\bin\php\php-8.3.22-Win32-vs16-x64\php.exe" artisan cache:clear
"C:\laragon\bin\php\php-8.3.22-Win32-vs16-x64\php.exe" artisan config:clear
"C:\laragon\bin\php\php-8.3.22-Win32-vs16-x64\php.exe" artisan view:clear
echo Cache cleared!
pause
