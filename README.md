# Portfolio Website - Haythem Aljane

**Live site:** https://haythemdev.site

A professional portfolio website built with **HTML, CSS, JavaScript, PHP, MySQL, and Laravel 8**.

## 🚀 Features

✅ Responsive Design  
✅ Dark Professional Theme (Red & Black)  
✅ 10+ Projects Showcase  
✅ Complete CV Integration  
✅ Service Offerings  
✅ Client Testimonials  
✅ Statistics & Achievements  
✅ FAQ Section  
✅ Smooth Animations  
✅ Project Filtering  
✅ GitHub Integration  
✅ Contact Section  
✅ Mobile Optimized  
✅ SEO Friendly  

## 📋 Setup Instructions

### Local development

```bash
composer install
cp .env.example .env
php artisan key:generate
# SQLite is the simplest local database:
#   set DB_CONNECTION=sqlite and DB_DATABASE=<absolute path>/database/database.sqlite in .env
touch database/database.sqlite
php artisan migrate --seed
php artisan serve        # http://localhost:8000
```

Admin panel: `http://localhost:8000/login`. The admin account is created by the seeder from
`ADMIN_EMAIL` / `ADMIN_PASSWORD` in `.env` (if `ADMIN_PASSWORD` is unset, a random password is
printed once in the seed output). Never commit real credentials.

### Production

Deployment on Render with a custom domain is documented in [HOSTING.md](HOSTING.md).
A template of the required environment variables is in `.env.production.example`.

## 🗂 Project demos

Interactive demos for projects without a public live site live in `public/demos/*` and are
linked from each project card. They run entirely in the browser (no backend, no payments).
