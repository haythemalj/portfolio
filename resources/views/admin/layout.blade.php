@php
  $me = auth()->user();
  $unreadCount = \App\Models\ContactMessage::whereNull('read_at')->count();
  $nav = [
    ['admin.dashboard', 'Dashboard', 'fa-gauge-high', 'admin', null],
    ['admin.stats', 'Statistics', 'fa-chart-line', 'admin/stats*', null],
    ['admin.messages.index', 'Messages', 'fa-envelope', 'admin/messages*', $unreadCount ?: null],
    ['admin.projects.index', 'Projects', 'fa-layer-group', 'admin/projects*', null],
  ];
  if ($me->isOwner()) { $nav[] = ['admin.team.index', 'Team access', 'fa-user-group', 'admin/team*', null]; }
  $nav[] = ['admin.account.edit', 'Settings', 'fa-gear', 'admin/account*', null];
@endphp
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>@yield('title', 'Dashboard') · Haythem Admin</title>
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/admin.webmanifest">
<meta name="theme-color" content="#0a0a0a">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Dashboard">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
:root{--red:#e50000;--red-2:#ff3b3b;--bg:#0a0a0a;--side:#101010;--card:#151515;--card-2:#1b1b1b;--line:rgba(255,255,255,.07);--line-red:rgba(229,0,0,.28);--text:#e6e6e6;--muted:#8d8d8d;--green:#22c55e;--amber:#f59e0b;--blue:#3b82f6}
*{box-sizing:border-box;margin:0;padding:0}
html,body{min-height:100%}
body{font-family:'Outfit',system-ui,sans-serif;background:var(--bg);color:var(--text);font-size:15px;line-height:1.5}
a{color:inherit;text-decoration:none}
/* Shell */
.shell{display:grid;grid-template-columns:248px minmax(0,1fr);min-height:100vh}
.shell>div{min-width:0}
.side{background:var(--side);border-right:1px solid var(--line);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;padding:20px 14px}
.brand{display:flex;align-items:center;gap:10px;padding:4px 8px 20px;font-weight:700;letter-spacing:.02em}
.brand img{width:32px;height:32px;border-radius:8px}
.brand small{display:block;color:var(--muted);font-weight:500;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase}
.nav{display:flex;flex-direction:column;gap:2px;flex:1}
.nav a{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:10px;color:#bdbdbd;font-weight:500;transition:background .15s,color .15s}
.nav a i{width:18px;text-align:center;color:#777}
.nav a:hover{background:#181818;color:#fff}
.nav a.on{background:rgba(229,0,0,.12);color:#fff}
.nav a.on i{color:var(--red-2)}
.nav .count{margin-left:auto;background:var(--red);color:#fff;font-size:.72rem;font-weight:700;border-radius:999px;padding:1px 8px}
.me{border-top:1px solid var(--line);padding-top:14px;display:flex;flex-direction:column;gap:8px}
.me-row{display:flex;align-items:center;gap:10px;padding:0 6px}
.avatar{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#e50000,#7a0000);display:grid;place-items:center;font-weight:700;color:#fff;flex-shrink:0}
.me-name{font-weight:600;font-size:.9rem;line-height:1.2}
.me-role{font-size:.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
.me-links{display:flex;gap:6px}
.me-links a,.me-links button{flex:1;text-align:center;font:inherit;font-size:.8rem;color:#bbb;background:#161616;border:1px solid var(--line);border-radius:8px;padding:7px;cursor:pointer}
.me-links a:hover,.me-links button:hover{color:#fff;border-color:var(--line-red)}
.main{min-width:0;padding:28px 32px 60px}
.app-tools{display:flex;flex-direction:column;gap:6px;margin-bottom:10px}
.app-tools button,.app-tools .ios-tip{display:none;width:100%;text-align:left;font:inherit;font-size:.82rem;color:#ddd;background:rgba(229,0,0,.1);border:1px solid var(--line-red);border-radius:8px;padding:8px 10px;cursor:pointer}
.app-tools .ios-tip{cursor:default;color:#bbb;line-height:1.4}
.app-tools button:hover{background:rgba(229,0,0,.18)}
@media(display-mode:standalone){.side{padding-top:max(20px,env(safe-area-inset-top))}}
.topbar{display:none}
.scrim{display:none}
/* Page header */
.page-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:22px}
.page-head h1{font-size:1.55rem;font-weight:700;line-height:1.2}
.page-head p{color:var(--muted);margin-top:4px}
.head-actions{display:flex;gap:8px;flex-wrap:wrap}
/* Building blocks */
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px}
.card h2{font-size:1rem;font-weight:600;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;gap:10px}
.card h2 a{font-size:.8rem;color:var(--muted);font-weight:500}
.card h2 a:hover{color:#fff}
.grid{display:grid;gap:16px}
.g-4{grid-template-columns:repeat(4,minmax(0,1fr))}
.g-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.g-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.g-main{grid-template-columns:minmax(0,2fr) minmax(0,1fr)}
.mt{margin-top:16px}
.kpi{position:relative;overflow:hidden}
.kpi .k-label{display:flex;align-items:center;gap:8px;color:var(--muted);font-size:.8rem;font-weight:500}
.kpi .k-label i{color:var(--red-2)}
.kpi .k-value{font-size:1.9rem;font-weight:700;margin-top:6px;line-height:1.1}
.kpi .k-sub{font-size:.8rem;color:var(--muted);margin-top:4px}
.up{color:#4ade80}.down{color:#f87171}
.btn{display:inline-flex;align-items:center;gap:8px;padding:9px 16px;border-radius:10px;border:1px solid transparent;font:600 .88rem/1.2 inherit;cursor:pointer;transition:background .15s,border-color .15s;white-space:nowrap}
.btn-primary{background:var(--red);color:#fff}.btn-primary:hover{background:#c40000}
.btn-ghost{background:#171717;border-color:var(--line);color:#ddd}.btn-ghost:hover{border-color:var(--line-red);color:#fff}
.btn-danger{background:transparent;border-color:rgba(248,113,113,.35);color:#f87171}.btn-danger:hover{background:rgba(248,113,113,.1)}
.btn-sm{padding:6px 10px;font-size:.8rem;border-radius:8px}
.icon-btn{width:32px;height:32px;display:inline-grid;place-items:center;border-radius:8px;background:#171717;border:1px solid var(--line);color:#bbb;cursor:pointer}
.icon-btn:hover{color:#fff;border-color:var(--line-red)}
.icon-btn:disabled{opacity:.35;cursor:default}
.badge{display:inline-flex;align-items:center;gap:5px;font-size:.72rem;font-weight:600;padding:2px 9px;border-radius:999px;background:#222;color:#bbb;white-space:nowrap}
.b-green{background:rgba(34,197,94,.12);color:#4ade80}.b-amber{background:rgba(245,158,11,.14);color:#fbbf24}.b-red{background:rgba(229,0,0,.14);color:#ff6b6b}.b-blue{background:rgba(59,130,246,.14);color:#93c5fd}
.alert{padding:12px 16px;border-radius:10px;margin-bottom:18px;background:rgba(34,197,94,.1);color:#86efac;border:1px solid rgba(34,197,94,.25)}
.alert-error{background:rgba(248,113,113,.08);color:#fca5a5;border-color:rgba(248,113,113,.3)}
.alert-warn{background:rgba(245,158,11,.08);color:#fcd34d;border-color:rgba(245,158,11,.3)}
.empty{text-align:center;color:var(--muted);padding:28px 10px;font-size:.92rem}
.empty i{display:block;font-size:1.6rem;margin-bottom:8px;color:#444}
.muted{color:var(--muted)}
.small{font-size:.82rem}
/* Lists and tables */
.list{display:flex;flex-direction:column}
.list-row{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--line)}
.list-row:last-child{border-bottom:0}
.grow{flex:1;min-width:0}
.ellipsis{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.table{width:100%;border-collapse:collapse}
.table th{font-size:.74rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);font-weight:600;text-align:left;padding:10px 12px;border-bottom:1px solid var(--line)}
.table td{padding:12px;border-bottom:1px solid var(--line);vertical-align:middle}
.card .table{table-layout:fixed}
.card .table td:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.card .table th:not(:first-child),.card .table td:not(:first-child){width:84px}
.table tr:last-child td{border-bottom:0}
.table-wrap{background:var(--card);border:1px solid var(--line);border-radius:14px;overflow:hidden}
/* Bars */
.bar-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:4px 12px;margin-bottom:12px;font-size:.88rem}
.bar{grid-column:1/-1;height:6px;border-radius:99px;background:#222;overflow:hidden}
.bar span{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,var(--red),var(--red-2))}
/* Forms */
.form-row{display:grid;gap:14px}
.field label{display:block;font-size:.76rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-bottom:6px;font-weight:600}
.field input,.field select,.field textarea,.search input{width:100%;padding:11px 12px;background:#0f0f0f;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fff;font:inherit}
.field input:focus,.field select:focus,.field textarea:focus,.search input:focus{outline:2px solid rgba(229,0,0,.6);border-color:transparent}
.field textarea{min-height:110px;resize:vertical}
.field .hint{font-size:.78rem;color:var(--muted);margin-top:6px}
.check{display:flex;align-items:center;gap:10px;font-size:.92rem;cursor:pointer}
.check input{width:18px;height:18px;accent-color:var(--red)}
.tabs{display:flex;gap:6px;flex-wrap:wrap}
.tabs a{padding:7px 14px;border-radius:999px;background:#151515;border:1px solid var(--line);color:#bbb;font-size:.85rem;font-weight:500}
.tabs a.on{background:rgba(229,0,0,.14);border-color:var(--line-red);color:#fff}
.tabs a span{color:var(--muted);margin-left:4px}
.toolbar{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px}
.search{position:relative;min-width:240px}
.search i{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:#666}
.search input{padding-left:36px}
.inline{display:inline}
/* Responsive */
@media(max-width:1100px){.g-4{grid-template-columns:repeat(2,minmax(0,1fr))}.g-main{grid-template-columns:minmax(0,1fr)}}
@media(max-width:860px){
  .shell{grid-template-columns:minmax(0,1fr)}
  .side{position:fixed;inset:0 auto 0 0;width:270px;z-index:60;transform:translateX(-100%);transition:transform .2s ease;box-shadow:20px 0 40px rgba(0,0,0,.5)}
  body.menu-open .side{transform:none}
  body.menu-open .scrim{display:block}
  .scrim{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:50}
  .topbar{display:flex;align-items:center;justify-content:space-between;gap:12px;position:sticky;top:0;z-index:40;background:rgba(10,10,10,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line);padding:10px 16px;padding-top:max(10px,env(safe-area-inset-top))}
  .main{padding-bottom:max(50px,env(safe-area-inset-bottom))}
  .topbar .brand{padding:0}
  .main{padding:18px 16px 50px}
  .g-3,.g-2{grid-template-columns:minmax(0,1fr)}
  .page-head h1{font-size:1.3rem}
  .table-stack,.table-stack tbody{display:block;width:100%}
  .table-stack thead{display:none}
  .table-stack tr{display:block;padding:12px;border-bottom:1px solid var(--line)}
  .table-stack td{display:flex;justify-content:space-between;gap:12px;border:0;padding:5px 0;text-align:right}
  .table-stack td::before{content:attr(data-label);color:var(--muted);font-size:.78rem;text-align:left}
  .table-stack td.full{display:block;text-align:left}
  .table-stack td.full::before{content:none}
  .search{min-width:0;flex:1}
}
@media(max-width:480px){.g-4{grid-template-columns:repeat(2,minmax(0,1fr))}.kpi .k-value{font-size:1.5rem}}
</style>
@stack('head')
</head>
<body>
<div class="shell">
  <div class="scrim" data-menu-close></div>
  <aside class="side" aria-label="Dashboard menu">
    <a href="{{ route('admin.dashboard') }}" class="brand"><img src="/icon-192.png" alt=""><span>Haythem<small>Dashboard</small></span></a>
    <nav class="nav">
      @foreach($nav as [$route, $label, $icon, $pattern, $count])
        <a href="{{ route($route) }}" class="{{ request()->is($pattern) ? 'on' : '' }}"><i class="fa-solid {{ $icon }}"></i>{{ $label }}@if($route === 'admin.messages.index')<span class="count" id="unreadBadge" @if(!$count) hidden @endif>{{ $count }}</span>@elseif($count)<span class="count">{{ $count }}</span>@endif</a>
      @endforeach
    </nav>
    <div class="app-tools">
      <button type="button" id="installApp"><i class="fa-solid fa-download"></i> Install app</button>
      <div class="ios-tip" id="iosTip"><i class="fa-solid fa-mobile-screen"></i> Install on iPhone: tap <i class="fa-solid fa-arrow-up-from-bracket"></i> Share, then <strong>Add to Home Screen</strong>.</div>
      <button type="button" id="enableAlerts"><i class="fa-solid fa-bell"></i> Turn on message alerts</button>
    </div>
    <div class="me">
      <div class="me-row">
        <div class="avatar">{{ mb_strtoupper(mb_substr($me->name, 0, 1)) }}</div>
        <div class="grow"><div class="me-name ellipsis">{{ $me->name }}</div><div class="me-role">{{ \App\Models\User::ROLES[$me->effectiveRole()] }}</div></div>
      </div>
      <div class="me-links">
        <a href="{{ route('landing') }}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Site</a>
        <form action="{{ route('logout') }}" method="POST" style="flex:1;display:flex">@csrf<button type="submit"><i class="fa-solid fa-right-from-bracket"></i> Log out</button></form>
      </div>
    </div>
  </aside>
  <div>
    <header class="topbar">
      <a href="{{ route('admin.dashboard') }}" class="brand"><img src="/icon-192.png" alt=""><span>Haythem<small>Dashboard</small></span></a>
      <button class="icon-btn" type="button" data-menu-open aria-label="Open menu"><i class="fa-solid fa-bars"></i></button>
    </header>
    <main class="main">
      @if(session('success'))<div class="alert"><i class="fa-solid fa-circle-check"></i> {{ session('success') }}</div>@endif
      @if($errors->any())<div class="alert alert-error"><i class="fa-solid fa-triangle-exclamation"></i> {{ $errors->first() }}</div>@endif
      @yield('content')
    </main>
  </div>
</div>
<script>
document.querySelectorAll('[data-menu-open]').forEach(b=>b.addEventListener('click',()=>document.body.classList.add('menu-open')));
document.querySelectorAll('[data-menu-close]').forEach(b=>b.addEventListener('click',()=>document.body.classList.remove('menu-open')));
document.querySelectorAll('[data-confirm]').forEach(f=>f.addEventListener('submit',e=>{if(!confirm(f.dataset.confirm))e.preventDefault();}));

/* Installable app: service worker, install button, unread badge and message alerts. */
(function () {
  var standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  var reg = null;
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/admin-sw.js', { scope: '/admin' }).then(function (r) { reg = r; }).catch(function () {});
  }

  // Install button (Chrome, Edge, Android) and iPhone tip (Safari has no install prompt).
  var installBtn = document.getElementById('installApp'), deferred = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; installBtn.style.display = 'block'; });
  installBtn.addEventListener('click', function () {
    if (!deferred) return;
    deferred.prompt();
    deferred.userChoice.finally(function () { deferred = null; installBtn.style.display = 'none'; });
  });
  window.addEventListener('appinstalled', function () { installBtn.style.display = 'none'; });
  if (!standalone && /iphone|ipad|ipod/i.test(navigator.userAgent)) { document.getElementById('iosTip').style.display = 'block'; }

  // Message alerts: the browser asks permission once, after a click.
  var alertsBtn = document.getElementById('enableAlerts');
  if ('Notification' in window && Notification.permission === 'default') { alertsBtn.style.display = 'block'; }
  alertsBtn.addEventListener('click', function () {
    Notification.requestPermission().then(function (p) { if (p !== 'default') alertsBtn.style.display = 'none'; });
  });

  // Unread badge: checks every minute while the dashboard is open (also minimised).
  var badge = document.getElementById('unreadBadge'), baseTitle = document.title;
  var last = parseInt(badge.textContent, 10) || 0, lastId = null;
  function show(count) {
    badge.textContent = count; badge.hidden = !count;
    document.title = (count ? '(' + count + ') ' : '') + baseTitle;
    if ('setAppBadge' in navigator) { (count ? navigator.setAppBadge(count) : navigator.clearAppBadge()).catch(function () {}); }
  }
  function check() {
    fetch('/admin/api/unread', { headers: { 'Accept': 'application/json' }, credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d) return;
        var latest = d.latest;
        if (lastId !== null && latest && latest.id !== lastId && d.unread > last && 'Notification' in window && Notification.permission === 'granted') {
          var opts = { body: latest.name + ': ' + latest.subject, icon: '/icon-192.png', badge: '/icon-192.png', tag: 'msg-' + latest.id, data: { url: latest.url } };
          if (reg && reg.showNotification) { reg.showNotification('New message', opts); } else { new Notification('New message', opts); }
        }
        last = d.unread; lastId = latest ? latest.id : 0; show(d.unread);
      }).catch(function () {});
  }
  show(last); check(); setInterval(check, 60000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) check(); });
})();
</script>
@stack('scripts')
</body>
</html>
