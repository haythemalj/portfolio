<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>Join the dashboard · Haythem Aljane</title>
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Outfit',system-ui,sans-serif;background:radial-gradient(circle at top,rgba(229,0,0,.12),transparent 40%),#0a0a0a;color:#e6e6e6;min-height:100vh;display:grid;place-items:center;padding:20px}
.box{width:100%;max-width:420px;background:#151515;border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:28px}
img{width:44px;height:44px;border-radius:10px;margin-bottom:14px}
h1{font-size:1.35rem;margin-bottom:6px}
p{color:#8d8d8d;font-size:.92rem;margin-bottom:18px}
label{display:block;font-size:.76rem;text-transform:uppercase;letter-spacing:.08em;color:#8d8d8d;margin:14px 0 6px;font-weight:600}
input{width:100%;padding:11px 12px;background:#0f0f0f;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fff;font:inherit}
input:focus{outline:2px solid rgba(229,0,0,.6);border-color:transparent}
button{width:100%;margin-top:20px;padding:12px;border:0;border-radius:10px;background:#e50000;color:#fff;font:600 .95rem inherit;cursor:pointer}
.err{background:rgba(248,113,113,.08);color:#fca5a5;border:1px solid rgba(248,113,113,.3);padding:10px 12px;border-radius:10px;font-size:.88rem;margin-bottom:10px}
</style>
</head>
<body>
<form class="box" method="POST" action="{{ route('invite.accept', $token) }}">
  @csrf
  <img src="/icon-192.png" alt="">
  <h1>Welcome, {{ $member->name }}</h1>
  <p>You've been invited to Haythem Aljane's portfolio dashboard as <strong style="color:#fff">{{ \App\Models\User::ROLES[$member->effectiveRole()] }}</strong>. Choose a password to finish. You'll log in with <strong style="color:#fff">{{ $member->email }}</strong>.</p>
  @if($errors->any())<div class="err">{{ $errors->first() }}</div>@endif
  <label for="password">Password</label>
  <input id="password" type="password" name="password" required minlength="8" autocomplete="new-password" autofocus>
  <label for="password_confirmation">Repeat password</label>
  <input id="password_confirmation" type="password" name="password_confirmation" required minlength="8" autocomplete="new-password">
  <button type="submit">Join the dashboard</button>
</form>
</body>
</html>
