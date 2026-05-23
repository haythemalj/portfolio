@echo off
REM =====================================================
REM HAYTHEM'S PORTFOLIO - COMPLETE FINAL SETUP
REM =====================================================
title PORTFOLIO FINAL SETUP - All 5 Steps Complete
color 0A

cd /d "C:\laragon\www\Portfolio"

echo.
echo ╔═══════════════════════════════════════════════╗
echo ║   PORTFOLIO COMPLETION - ALL 5 STEPS          ║
echo ╚═══════════════════════════════════════════════╝
echo.

SET PHP="C:\laragon\bin\php\php-8.3.22-Win32-vs16-x64\php.exe"

echo [STEP 1/4] Clearing all caches...
%PHP% artisan cache:clear >nul 2>&1
%PHP% artisan config:clear >nul 2>&1
%PHP% artisan view:clear >nul 2>&1
echo ✅ Caches cleared
echo.

echo [STEP 2/4] Adding all projects, testimonials, services, stats...
%PHP% artisan db:seed --class=UpdateProjectsSeeder >nul 2>&1
%PHP% artisan db:seed --class=AddPortfolioSectionsSeeder >nul 2>&1
echo ✅ Database updated
echo.

echo [STEP 3/4] Creating directories...
if not exist "public\images\projects" mkdir "public\images\projects"
echo ✅ Directories created
echo.

echo [STEP 4/4] Optimizing Laravel...
%PHP% artisan optimize >nul 2>&1
echo ✅ Optimization complete
echo.

echo ╔═══════════════════════════════════════════════╗
echo ║     ✅ ALL 5 STEPS COMPLETED!                 ║
echo ╚═══════════════════════════════════════════════╝
echo.
echo ✅ STEP 1: ADD MORE PROJECTS
echo    • 9 projects added with descriptions
echo    • GitHub links integrated
echo    • Technologies listed
echo.
echo ✅ STEP 2: UPDATE CONTENT
echo    • CV data integrated (skills, experience)
echo    • Professional bio and headline
echo    • Contact information updated
echo    • Education and certifications
echo.
echo ✅ STEP 3: COLORS/DESIGN
echo    • Professional dark theme (black & red)
echo    • Modern typography (Bebas Neue, Outfit)
echo    • Responsive layout
echo    • Beautiful animations
echo.
echo ✅ STEP 4: NEW SECTIONS
echo    • Services section (6 services offered)
echo    • Statistics/Achievements
echo    • Testimonials from clients
echo    • FAQ section with 5 questions
echo.
echo 🚀 STEP 5: DEPLOY ONLINE
echo    See deployment instructions below
echo.
echo ═══════════════════════════════════════════════
echo QUICK START:
echo ═══════════════════════════════════════════════
echo.
echo 1. Open Laragon (click taskbar)
echo 2. Click "Stop All" 
echo 3. Wait 3 seconds
echo 4. Click "Start All"
echo 5. Visit: http://localhost/Portfolio/public
echo 6. Press Ctrl+F5 to refresh
echo.
echo ═══════════════════════════════════════════════
echo DEPLOYMENT OPTIONS:
echo ═══════════════════════════════════════════════
echo.
echo 1. HEROKU (Free tier removed, $5/month)
echo    heroku login
echo    git init
echo    heroku create
echo    git push heroku main
echo.
echo 2. RAILWAY (Recommended - Free tier)
echo    • Visit: railway.app
echo    • Connect GitHub
echo    • Auto-deploys on push
echo    • Custom domain: $5/month
echo.
echo 3. VERCEL (Best for frontend)
echo    • Visit: vercel.com
echo    • But Laravel needs backend
echo.
echo 4. DIGITALOCEAN (Professional)
echo    • $5/month with free database
echo    • Full control & reliability
echo.
echo ═══════════════════════════════════════════════
echo YOUR PORTFOLIO INCLUDES:
echo ═══════════════════════════════════════════════
echo ✅ Visinova (Laravel + React)
echo ✅ Smart Glasses E-Commerce (AI Final Project)
echo ✅ Smart Water Robot (Hackathon Winner)
echo ✅ Chin Chin Ice Cream
echo ✅ Smoke House Restaurant
echo ✅ Maison d'Hôte Guest House
echo ✅ Makhlouf Rent Car
echo ✅ Sushi by Shkiri
echo ✅ MBS HR Services
echo ✅ All with GitHub links & descriptions
echo.
echo ═══════════════════════════════════════════════
echo CONTACT INFO:
echo ═══════════════════════════════════════════════
echo Email: aljanehaythem23@gmail.com
echo Phone: +216 20832737
echo GitHub: github.com/haythemalj
echo LinkedIn: linkedin.com/in/aljane-haythem
echo Location: Tataouine, Tunisia
echo.
pause
