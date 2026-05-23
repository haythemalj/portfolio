@echo off
cd /d "C:\laragon\www\Portfolio"
echo Clearing cache...
"C:\laragon\bin\php\php-8.3.22-Win32-vs16-x64\php.exe" artisan cache:clear
"C:\laragon\bin\php\php-8.3.22-Win32-vs16-x64\php.exe" artisan config:clear
"C:\laragon\bin\php\php-8.3.22-Win32-vs16-x64\php.exe" artisan view:clear

echo.
echo Updating projects in database...
"C:\laragon\bin\php\php-8.3.22-Win32-vs16-x64\php.exe" artisan db:seed --class=UpdateProjectsSeeder

echo.
echo Done! Projects have been updated.
echo Go to http://localhost/Portfolio/public and refresh the page to see changes.
pause
