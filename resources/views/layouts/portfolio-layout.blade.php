<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Haythem Aljane - Web Developer, Graphic Designer & Community Leader">
    <meta name="keywords" content="web development, design, portfolio, freelance, Tunisia">
    <meta name="author" content="Haythem Aljane">
    <link rel="shortcut icon" type="image/png" href="/public/images/logo02.png">
    <title>{{ config('app.name', 'Haythem Aljane Portfolio') }} - Portfolio</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Bebas+Neue&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    
    <style>
        :root {
            --red: #e50000;
            --red-dark: #b30000;
            --black: #080808;
            --dark: #111;
            --card: #161616;
            --card2: #1c1c1c;
            --border: rgba(229, 0, 0, 0.18);
            --text: #ddd;
            --muted: #666;
            --white: #fff;
            --nav-w: 80px;
            --nav-w-exp: 260px;
        }
    </style>
</head>
<body>
    <!-- Sidebar Navigation -->
    <nav class="portfolio-sidebar">
        <div class="sidebar-brand">
            <a href="{{ route('landing') }}" title="Home">
                <i class="fas fa-code"></i>
            </a>
        </div>
        <div class="sidebar-nav">
            <a href="#about" class="nav-item" title="About">
                <i class="fas fa-user"></i>
                <span>About</span>
            </a>
            <a href="#experience" class="nav-item" title="Experience">
                <i class="fas fa-briefcase"></i>
                <span>Experience</span>
            </a>
            <a href="#projects" class="nav-item" title="Projects">
                <i class="fas fa-folder"></i>
                <span>Projects</span>
            </a>
            <a href="#certs" class="nav-item" title="Certificates">
                <i class="fas fa-certificate"></i>
                <span>Certificates</span>
            </a>
            <a href="#leadership" class="nav-item" title="Leadership">
                <i class="fas fa-people-group"></i>
                <span>Leadership</span>
            </a>
            <a href="#contact" class="nav-item" title="Contact">
                <i class="fas fa-envelope"></i>
                <span>Contact</span>
            </a>
            <a href="{{ route('blog.index') }}" class="nav-item" title="Blog">
                <i class="fas fa-blog"></i>
                <span>Blog</span>
            </a>
        </div>
        <div class="sidebar-footer">
            <a href="https://github.com/haythemalj" target="_blank" title="GitHub" class="social-icon">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/aljane-haythem-077713193/" target="_blank" title="LinkedIn" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" title="Twitter" class="social-icon">
                <i class="fab fa-twitter"></i>
            </a>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="portfolio-content">
        @yield('content')
    </div>

    <!-- Additional Styles for Sidebar -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background: var(--black);
            color: var(--text);
            overflow-x: hidden;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: var(--black);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--red);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--red-dark);
        }

        /* Portfolio Sidebar Navigation */
        .portfolio-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            width: var(--nav-w);
            height: 100vh;
            background: var(--dark);
            border-right: 1px solid rgba(229, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            transition: width 0.3s ease;
            z-index: 999;
        }

        .portfolio-sidebar:hover {
            width: var(--nav-w-exp);
        }

        .sidebar-brand {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
        }

        .sidebar-brand a {
            width: 50px;
            height: 50px;
            background: rgba(229, 0, 0, 0.15);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--red);
            font-size: 1.5rem;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .sidebar-brand a:hover {
            background: rgba(229, 0, 0, 0.25);
            transform: scale(1.05);
        }

        .sidebar-nav {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 100%;
            padding: 0 10px;
        }

        .nav-item {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            color: var(--text);
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            padding: 0 12px;
        }

        .nav-item i {
            font-size: 1.2rem;
            transition: color 0.3s ease;
        }

        .nav-item span {
            opacity: 0;
            transition: opacity 0.3s ease;
            white-space: nowrap;
            font-size: 0.85rem;
            font-weight: 500;
        }

        .portfolio-sidebar:hover .nav-item span {
            opacity: 1;
        }

        .nav-item:hover {
            background: rgba(229, 0, 0, 0.1);
            color: var(--red);
        }

        .nav-item:hover i {
            color: var(--red);
        }

        .nav-item.active {
            background: rgba(229, 0, 0, 0.15);
            color: var(--red);
        }

        .nav-item.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 3px;
            background: var(--red);
        }

        .sidebar-footer {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
            padding: 0 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 20px;
        }

        .social-icon {
            width: 100%;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--muted);
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.3s ease;
            font-size: 1rem;
        }

        .social-icon:hover {
            background: rgba(229, 0, 0, 0.15);
            color: var(--red);
            transform: translateY(-2px);
        }

        .portfolio-content {
            margin-left: var(--nav-w);
            transition: margin-left 0.3s ease;
        }

        .portfolio-sidebar:hover + .portfolio-content {
            margin-left: var(--nav-w-exp);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .portfolio-sidebar {
                width: var(--nav-w);
            }

            .portfolio-sidebar:hover {
                width: var(--nav-w);
            }

            .nav-item span {
                display: none;
            }

            .portfolio-content {
                margin-left: var(--nav-w);
            }
        }

        @media (max-width: 480px) {
            .portfolio-sidebar {
                width: 60px;
                --nav-w: 60px;
            }

            .nav-item {
                height: 45px;
            }
        }
    </style>

    <script>
        // Active nav item based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.portfolio-sidebar .nav-item');

        function updateActiveNav() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === '#' + current) {
                    item.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    </script>
</body>
</html>
