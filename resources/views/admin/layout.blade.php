<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin') | Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root{--red:#e50000;--black:#111;--card:#1a1a1a;--text:#ddd;--muted:#888}
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'Outfit',sans-serif;background:#080808;color:var(--text);min-height:100vh}
        .admin-nav{background:var(--black);border-bottom:1px solid rgba(229,0,0,.2);padding:16px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
        .admin-nav a{color:var(--text);text-decoration:none;margin-right:16px;font-size:.9rem}
        .admin-nav a:hover{color:var(--red)}
        .wrap{max-width:1100px;margin:0 auto;padding:32px 24px}
        h1{font-size:1.6rem;margin-bottom:24px}
        .alert{padding:12px 16px;border-radius:4px;margin-bottom:20px;background:rgba(74,222,128,.15);color:#4ade80;border:1px solid rgba(74,222,128,.3)}
        .btn{display:inline-block;padding:10px 20px;background:var(--red);color:#fff;text-decoration:none;border:none;border-radius:4px;cursor:pointer;font-family:inherit;font-weight:600}
        .btn-secondary{background:#333}
        .btn-danger{background:#7f1d1d}
        table{width:100%;border-collapse:collapse;background:var(--card);border-radius:6px;overflow:hidden}
        th,td{padding:12px 14px;text-align:left;border-bottom:1px solid rgba(255,255,255,.06);font-size:.88rem}
        th{background:rgba(229,0,0,.1);color:#fff}
        .form-group{margin-bottom:18px}
        label{display:block;font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-bottom:6px}
        input,textarea,select{width:100%;padding:12px;background:#111;border:1px solid rgba(255,255,255,.1);border-radius:4px;color:#fff;font-family:inherit}
        textarea{min-height:100px}
        .actions{display:flex;gap:8px;flex-wrap:wrap}
    </style>
</head>
<body>
    <nav class="admin-nav">
        <div>
            <a href="{{ route('landing') }}">← Portfolio Site</a>
            <a href="{{ route('admin.projects.index') }}">Projects</a>
        </div>
        <div>
            <span style="color:var(--muted);margin-right:12px">{{ auth()->user()->name }}</span>
            <a href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit()">Logout</a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display:none">@csrf</form>
        </div>
    </nav>
    <div class="wrap">
        @if(session('success'))
            <div class="alert">{{ session('success') }}</div>
        @endif
        @yield('content')
    </div>
</body>
</html>
