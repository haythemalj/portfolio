@php
  $siteUrl = rtrim(config('app.url'), '/');
  $lang = $lang ?? 'en';
  $ogImage = $ogImage ?? '/images/og-cover.jpg';
  if (\Illuminate\Support\Str::endsWith($ogImage, '.svg')) { $ogImage = '/images/og-cover.jpg'; }
  $rtl = $lang === 'ar';
  $home = $lang === 'en' ? '/' : '/'.$lang;
  $ui = [
    'en' => ['menu' => 'Main menu', 'services' => 'Services', 'projects' => 'Projects', 'contact' => 'Contact', 'home' => 'Home', 'cases' => 'Case studies', 'tagline' => 'Remote web UI/UX designer · clients worldwide'],
    'tr' => ['menu' => 'Ana menü', 'services' => 'Hizmetler', 'projects' => 'Projeler', 'contact' => 'İletişim', 'home' => 'Ana sayfa', 'cases' => 'Vaka çalışmaları (EN)', 'tagline' => 'Uzaktan web UI/UX tasarım ve e-ticaret geliştirme'],
    'fr' => ['menu' => 'Menu principal', 'services' => 'Services', 'projects' => 'Projets', 'contact' => 'Contact', 'home' => 'Accueil', 'cases' => 'Études de cas (EN)', 'tagline' => 'Design UI/UX web et développement e-commerce à distance'],
    'ar' => ['menu' => 'القائمة الرئيسية', 'services' => 'الخدمات', 'projects' => 'المشاريع', 'contact' => 'تواصل', 'home' => 'الرئيسية', 'cases' => 'دراسات الحالة (EN)', 'tagline' => 'تصميم واجهات المستخدم وتطوير المتاجر الإلكترونية عن بُعد'],
  ][$lang] ?? null;
@endphp
<!DOCTYPE html>
<html lang="{{ $lang }}" dir="{{ $rtl ? 'rtl' : 'ltr' }}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{ $title }}</title>
<meta name="description" content="{{ $description }}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="author" content="Haythem Aljane">
<link rel="canonical" href="{{ $canonical }}">
@foreach(($alternates ?? []) as $hreflang => $href)
<link rel="alternate" hreflang="{{ $hreflang }}" href="{{ $href }}">
@endforeach
<link rel="icon" href="{{ $siteUrl }}/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="32x32" href="{{ $siteUrl }}/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="{{ $siteUrl }}/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="{{ $siteUrl }}/apple-touch-icon.png">
<link rel="manifest" href="{{ $siteUrl }}/site.webmanifest">
<meta name="theme-color" content="#080808">
<meta property="og:type" content="{{ $ogType ?? 'website' }}">
<meta property="og:locale" content="{{ $ogLocale ?? 'en_US' }}">
<meta property="og:site_name" content="Haythem Aljane">
<meta property="og:title" content="{{ $title }}">
<meta property="og:description" content="{{ $description }}">
<meta property="og:url" content="{{ $canonical }}">
<meta property="og:image" content="{{ $siteUrl.$ogImage }}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ $title }}">
<meta name="twitter:description" content="{{ $description }}">
<meta name="twitter:image" content="{{ $siteUrl.$ogImage }}">
@if(!empty($schema))
<script type="application/ld+json">{!! json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG) !!}</script>
@endif
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700{{ $rtl ? '&family=Cairo:wght@400;600;700;800' : '' }}&display=swap" rel="stylesheet">
<style>
:root{--red:#e50000;--red-dark:#b30000;--black:#080808;--card:#141414;--border:rgba(229,0,0,.2);--text:#d8d8d8;--muted:#8a8a8a;--white:#fff}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Outfit',sans-serif;background:radial-gradient(circle at top,rgba(229,0,0,.08),transparent 30%),var(--black);color:var(--text);line-height:1.65;font-size:17px}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
.wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.top{position:sticky;top:0;z-index:50;background:rgba(8,8,8,.88);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
.top .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;height:64px}
.brand{font-family:'Bebas Neue',sans-serif;font-size:1.7rem;letter-spacing:1px;color:var(--white)}
.brand span{color:var(--red)}
.top nav{display:flex;align-items:center;gap:20px;font-size:.88rem}
.top nav a{color:var(--muted);transition:color .2s}
.top nav a:hover,.top nav a[aria-current="page"]{color:var(--white)}
.lang{border:1px solid var(--border);border-radius:999px;padding:4px 10px;color:var(--white)!important;font-weight:600;font-size:.78rem;letter-spacing:.06em}
.kicker{display:inline-block;color:var(--red);font-weight:600;letter-spacing:.18em;text-transform:uppercase;font-size:.78rem;margin-bottom:14px}
h1,h2{font-family:'Bebas Neue',sans-serif;color:var(--white);letter-spacing:1px;line-height:1}
h1{font-size:clamp(2.6rem,7vw,4.6rem)}
h2{font-size:clamp(1.9rem,4.4vw,2.6rem);margin-bottom:16px}
h2 span,h1 span{color:var(--red)}
h3{color:var(--white);font-size:1.15rem;font-weight:600;margin-bottom:6px}
p{margin-bottom:14px}
.lead{font-size:1.15rem;color:#eee;max-width:720px}
.hero{padding:72px 0 40px}
section{padding:44px 0}
.btn{display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:999px;font-weight:600;font-size:.95rem;transition:transform .2s,background .2s}
.btn-primary{background:var(--red);color:#fff}
.btn-primary:hover{background:var(--red-dark);transform:translateY(-2px)}
.btn-ghost{border:1px solid var(--border);color:#fff}
.btn-ghost:hover{border-color:var(--red)}
.btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
.grid{display:grid;gap:20px;grid-template-columns:repeat(auto-fill,minmax(250px,1fr))}
.card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:22px;transition:border-color .2s,transform .2s}
a.card:hover{border-color:var(--red);transform:translateY(-4px)}
.card .thumb{aspect-ratio:16/10;border-radius:10px;overflow:hidden;margin:-6px -6px 16px;background:#0e0e0e}
.card .thumb img{width:100%;height:100%;object-fit:cover}
.card p{color:var(--muted);font-size:.95rem;margin:0}
.more{display:inline-block;margin-top:12px;color:var(--red);font-weight:600;font-size:.9rem}
.tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.tags span{font-size:.78rem;border:1px solid var(--border);border-radius:999px;padding:3px 10px;color:#ccc}
ul.list{list-style:none;display:grid;gap:10px}
ul.list li{padding-left:26px;position:relative}
ul.list li::before{content:"";position:absolute;left:4px;top:.62em;width:9px;height:9px;border-radius:50%;background:var(--red)}
.crumbs{font-size:.82rem;color:var(--muted);margin-bottom:22px}
.crumbs a:hover{color:#fff}
.facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:28px 0}
.facts div{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px 16px}
.facts b{display:block;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--red);margin-bottom:4px}
.shot{border-radius:18px;overflow:hidden;border:1px solid var(--border);background:#0e0e0e}
.note{font-size:.88rem;color:var(--muted);border-left:3px solid var(--red);padding-left:12px}
.cta{background:linear-gradient(135deg,rgba(229,0,0,.16),rgba(229,0,0,.03));border:1px solid var(--border);border-radius:20px;padding:34px;margin:30px 0 60px}
.form{display:grid;gap:12px;max-width:620px}
.form input,.form textarea{width:100%;background:#0f0f0f;border:1px solid var(--border);border-radius:10px;padding:12px 14px;color:#fff;font:inherit;font-size:.95rem}
.form input:focus,.form textarea:focus{outline:2px solid var(--red);border-color:transparent}
.form .row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
footer{border-top:1px solid var(--border);padding:26px 0;font-size:.82rem;color:var(--muted)}
footer .wrap{display:flex;flex-wrap:wrap;gap:12px 22px;justify-content:space-between}
footer nav{display:flex;flex-wrap:wrap;gap:16px}
footer a:hover{color:#fff}
.card-links{display:flex;flex-wrap:wrap;gap:4px 16px}
/* Right-to-left (Arabic) */
[dir="rtl"] body{font-family:'Cairo','Outfit',sans-serif}
[dir="rtl"] h1,[dir="rtl"] h2{font-family:'Cairo',sans-serif;font-weight:800;letter-spacing:0;line-height:1.3}
[dir="rtl"] h1{font-size:clamp(2rem,5.4vw,3.4rem)}
[dir="rtl"] h2{font-size:clamp(1.6rem,3.6vw,2.2rem)}
[dir="rtl"] .kicker{letter-spacing:.04em}
[dir="rtl"] ul.list li{padding-left:0;padding-right:26px}
[dir="rtl"] ul.list li::before{left:auto;right:4px}
[dir="rtl"] .brand{direction:ltr}
@media(max-width:640px){.top nav a:not(.lang):not(.keep){display:none}.form .row{grid-template-columns:1fr}.hero{padding:48px 0 24px}body{font-size:16px}}
</style>
</head>
<body>
<header class="top">
  <div class="wrap">
    <a class="brand notranslate" translate="no" href="{{ $home }}">HAYTHEM <span>ALJANE</span></a>
    <nav aria-label="{{ $ui['menu'] }}">
      @if($lang === 'en')
        <a href="/#projects">Projects</a>
        <a href="/case-studies" @if(request()->is('case-studies')) aria-current="page" @endif>Case studies</a>
        <a href="/#contact" class="keep">Contact</a>
      @else
        <a href="{{ $home }}#services">{{ $ui['services'] }}</a>
        <a href="{{ $home }}#projects">{{ $ui['projects'] }}</a>
        <a href="{{ $home }}#contact" class="keep">{{ $ui['contact'] }}</a>
        <a href="/" class="lang notranslate" translate="no" hreflang="en" lang="en">EN</a>
      @endif
    </nav>
  </div>
</header>

<main>
@yield('content')
</main>

<footer>
  <div class="wrap">
    <div>© {{ date('Y') }} Haythem Aljane · {{ $ui['tagline'] }}</div>
    <nav class="notranslate" translate="no">
      <a href="{{ $home }}">{{ $ui['home'] }}</a><a href="/case-studies">{{ $ui['cases'] }}</a>
      @foreach(['en' => 'English', 'fr' => 'Français', 'ar' => 'العربية', 'tr' => 'Türkçe'] as $code => $name)
        @if($code !== $lang)<a href="{{ $code === 'en' ? '/' : '/'.$code }}" hreflang="{{ $code }}" lang="{{ $code }}">{{ $name }}</a>@endif
      @endforeach
    </nav>
  </div>
</footer>
@include('partials.whatsapp-button', ['pageLang' => $lang])
@include('partials.language-switcher', ['pageLang' => $lang])
@stack('scripts')
</body>
</html>
