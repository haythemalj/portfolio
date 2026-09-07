<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin Login | Haythem Aljane</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
        :root {
            --bg: #090909;
            --bg-soft: #111111;
            --panel: rgba(17,17,17,0.9);
            --panel-strong: #171717;
            --primary: #e50000;
            --primary-soft: rgba(229,0,0,0.12);
            --text: #f3f4f6;
            --muted: #9ca3af;
            --line: rgba(255,255,255,0.08);
            --success: #4ade80;
            --danger: #f87171;
        }

        * { box-sizing: border-box; }

        html, body {
            margin: 0;
            min-height: 100%;
            font-family: 'Outfit', sans-serif;
            background:
                radial-gradient(circle at top, rgba(229, 0, 0, 0.12), transparent 30%),
                linear-gradient(180deg, var(--bg) 0%, #0b0b0b 100%);
            color: var(--text);
        }

        body {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 32px 18px;
        }

        .auth-shell {
            width: min(100%, 460px);
            position: relative;
        }

        .auth-card {
            background: rgba(17,17,17,0.94);
            border: 1px solid var(--line);
            border-radius: 22px;
            box-shadow: 0 25px 80px rgba(0,0,0,0.52);
            overflow: hidden;
            backdrop-filter: blur(8px);
        }

        .auth-header {
            padding: 28px 28px 14px;
            text-align: center;
            border-bottom: 1px solid var(--line);
            background: rgba(255,255,255,0.01);
        }

        .brand { 
            display: inline-flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--text);
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            font-size: 0.8rem;
        }

        .brand-mark {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--primary-soft);
            border: 1px solid rgba(229, 0, 0, 0.28);
            color: var(--primary);
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.4rem;
        }

        .auth-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: clamp(2.2rem, 4vw, 3rem);
            letter-spacing: 0.08em;
            margin: 18px 0 8px;
            color: var(--text);
        }

        .auth-subtitle {
            font-size: 0.9rem;
            color: var(--muted);
            margin: 0;
        }

        .auth-body {
            padding: 28px;
        }

        .field-group {
            margin-bottom: 18px;
        }

        .field-label {
            display: block;
            font-size: 0.75rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--muted);
            margin-bottom: 8px;
        }

        .field {
            width: 100%;
            border: 1px solid var(--line);
            background: rgba(255,255,255,0.02);
            color: var(--text);
            border-radius: 12px;
            padding: 14px 16px;
            font-size: 0.96rem;
            outline: none;
            transition: 0.2s ease;
        }

        .field:focus {
            border-color: rgba(229,0,0,0.5);
            box-shadow: 0 0 0 3px rgba(229,0,0,0.12);
            background: rgba(255,255,255,0.03);
        }

        .field.is-invalid {
            border-color: rgba(248,113,113,0.8);
        }

        .invalid-feedback {
            display: block;
            margin-top: 8px;
            color: var(--danger);
            font-size: 0.82rem;
        }

        .row-inline {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            margin: 18px 0 22px;
        }

        .checkbox-wrap {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--muted);
            font-size: 0.9rem;
        }

        .checkbox-wrap input {
            accent-color: var(--primary);
            width: 16px;
            height: 16px;
        }

        .link-muted {
            color: #fca5a5;
            text-decoration: none;
            font-size: 0.88rem;
        }

        .link-muted:hover {
            text-decoration: underline;
        }

        .btn-submit {
            width: 100%;
            border: none;
            background: linear-gradient(135deg, var(--primary) 0%, #ff3030 100%);
            color: white;
            border-radius: 12px;
            padding: 14px 18px;
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 18px 30px rgba(229,0,0,0.22);
        }

        .btn-submit:hover {
            transform: translateY(-1px);
            box-shadow: 0 20px 34px rgba(229,0,0,0.28);
        }

        .back-link {
            display: inline-block;
            width: 100%;
            text-align: center;
            margin-top: 18px;
            color: var(--muted);
            text-decoration: none;
            font-size: 0.88rem;
        }

        .back-link:hover {
            color: var(--text);
        }

        @media (max-width: 540px) {
            .auth-card { border-radius: 18px; }
            .auth-header, .auth-body { padding-left: 18px; padding-right: 18px; }
            .row-inline { align-items: flex-start; }
        }
    </style>
</head>
<body>
    <main class="auth-shell">
        <div class="auth-card">
            <div class="auth-header">
                <a href="{{ route('landing') }}" class="brand">
                    <span class="brand-mark">A</span>
                    <span>Haythem</span>
                </a>
                <h1 class="auth-title">Login</h1>
                <p class="auth-subtitle">Access the admin dashboard</p>
            </div>

            <div class="auth-body">
                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="field-group">
                        <label for="email" class="field-label">Email</label>
                        <input id="email" type="email" class="field @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="you@example.com">
                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <span>{{ $message }}</span>
                            </span>
                        @enderror
                    </div>

                    <div class="field-group">
                        <label for="password" class="field-label">Password</label>
                        <input id="password" type="password" class="field @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Enter your password">
                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <span>{{ $message }}</span>
                            </span>
                        @enderror
                    </div>

                    <div class="row-inline">
                        <label class="checkbox-wrap" for="remember">
                            <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            <span>Remember me</span>
                        </label>

                        @if (Route::has('password.request'))
                            <a class="link-muted" href="{{ route('password.request') }}">Forgot password?</a>
                        @endif
                    </div>

                    <button type="submit" class="btn-submit">{{ __('Login') }}</button>
                    <a href="{{ route('landing') }}" class="back-link">← Back to portfolio</a>
                </form>
            </div>
        </div>
    </main>
</body>
</html>
