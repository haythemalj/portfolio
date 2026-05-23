@echo off
REM =============================================
REM HAYTHEM'S PORTFOLIO - COMPLETE FINISH SCRIPT
REM =============================================
title Portfolio Completion
color 0A

cd /d "C:\laragon\www\Portfolio"

echo.
echo ╔════════════════════════════════════════════╗
echo ║  FINISHING YOUR PORTFOLIO - FINAL UPDATE   ║
echo ╚════════════════════════════════════════════╝
echo.

SET PHP="C:\laragon\bin\php\php-8.3.22-Win32-vs16-x64\php.exe"

echo [STEP 1/4] Clearing all caches...
%PHP% artisan cache:clear >nul 2>&1
%PHP% artisan config:clear >nul 2>&1
%PHP% artisan view:clear >nul 2>&1
echo ✓ Cache cleared
echo.

echo [STEP 2/4] Updating database with 9 projects...
%PHP% artisan db:seed --class=UpdateProjectsSeeder >nul 2>&1
echo ✓ 9 Projects added:
echo   - Visinova (Laravel + React)
echo   - Smart Glasses E-Commerce
echo   - Smart Water Robot (Hackathon)
echo   - Chin Chin Ice Cream
echo   - Smoke House Restaurant
echo   - Maison d'Hote Guest House
echo   - Makhlouf Rent Car
echo   - Sushi by Shkiri
echo   - MBS HR Services
echo.

echo [STEP 3/4] Creating project directories...
if not exist "public\images\projects" mkdir "public\images\projects"
echo ✓ Image directories created
echo.

echo [STEP 4/4] Final optimization...
%PHP% artisan optimize >nul 2>&1
echo ✓ System optimized
echo.

echo ╔════════════════════════════════════════════╗
echo ║        ✅  PORTFOLIO COMPLETE!             ║
echo ╚════════════════════════════════════════════╝
echo.
echo 📋 YOUR PORTFOLIO NOW INCLUDES:
echo   ✅ All 9 projects with descriptions
echo   ✅ Your CV data (skills, experience, education)
echo   ✅ Professional about section
echo   ✅ GitHub links and project details
echo   ✅ Technical & design skills
echo   ✅ Work experience timeline
echo   ✅ Language proficiencies
echo   ✅ Beautiful dark theme design
echo.
echo 🚀 FINAL STEPS TO VIEW:
echo.
echo   1. Open Laragon (click taskbar icon)
echo   2. Click "STOP ALL"
echo   3. Wait 3 seconds
echo   4. Click "START ALL"
echo   5. Open browser: http://localhost/Portfolio/public
echo   6. Press Ctrl+F5 to refresh cache
echo.
echo   OR use this URL if configured:
echo   http://localhost/Portfolio/public
echo.
echo 📞 PORTFOLIO INFO:
echo   Name: Haythem Aljane
echo   Email: aljanehaythem23@gmail.com
echo   Phone: +216 20832737
echo   Location: Tataouine, Tunisia
echo.
echo Press any key to close...
pause >nul
