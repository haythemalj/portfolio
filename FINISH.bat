@echo off
REM Final Portfolio Update Script
cd /d "C:\laragon\www\Portfolio"

echo ========================================
echo   FINISHING YOUR PORTFOLIO
echo ========================================

SET PHP="C:\laragon\bin\php\php-8.3.22-Win32-vs16-x64\php.exe"

echo Clearing cache...
%PHP% artisan cache:clear
%PHP% artisan config:clear
%PHP% artisan view:clear

echo Adding all 9 projects...
%PHP% artisan db:seed --class=UpdateProjectsSeeder

echo Creating image directories...
if not exist "public\images\projects" mkdir "public\images\projects"

echo.
echo ========================================
echo DONE! Your portfolio is ready!
echo ========================================
echo.
echo FINAL STEPS:
echo 1. Open Laragon
echo 2. Click "Stop All"
echo 3. Click "Start All" 
echo 4. Visit: http://localhost/Portfolio/public
echo 5. Press Ctrl+F5 to refresh
echo.
pause
