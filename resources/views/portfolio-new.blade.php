<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Haythem Aljane | Web Designer & Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
        :root{--red:#e50000;--red-dark:#b30000;--red-glow:rgba(229,0,0,0.18);--black:#080808;--dark:#111;--card:#161616;--card2:#1c1c1c;--border:rgba(229,0,0,0.18);--text:#ddd;--muted:#777;--white:#fff;--sidebar-w:320px}
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{font-family:'Outfit',sans-serif;background:var(--black);color:var(--text);overflow-x:hidden}
        ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:var(--black)}::-webkit-scrollbar-thumb{background:var(--red)}
        a{text-decoration:none;color:inherit}
        
        /* ===== TOP NAV BAR ===== */
        nav{position:fixed;top:0;left:0;right:0;z-index:300;display:flex;align-items:center;justify-content:space-between;padding:18px 50px;background:rgba(8,8,8,.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);transition:padding .3s}
        nav.scrolled{padding:12px 50px}
        .nav-logo img{height:44px;filter:drop-shadow(0 0 8px rgba(229,0,0,.35))}
        
        /* ===== HAMBURGER BUTTON ===== */
        .hamburger{display:flex;flex-direction:column;justify-content:center;gap:0;width:44px;height:44px;cursor:pointer;z-index:400;position:relative;border:1px solid rgba(229,0,0,.25);border-radius:4px;padding:10px 11px;transition:border-color .3s}
        .hamburger:hover{border-color:var(--red)}
        .hamburger span{display:block;width:22px;height:2px;background:var(--white);border-radius:2px;transition:transform .4s cubic-bezier(.23,1,.32,1),opacity .3s,top .3s}
        .hamburger span:nth-child(1){transform-origin:center}
        .hamburger span:nth-child(2){margin:5px 0}
        .hamburger span:nth-child(3){transform-origin:center}
        .hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
        .hamburger.open span:nth-child(2){opacity:0;transform:scaleX(0)}
        .hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
        
        /* ===== OVERLAY ===== */
        .overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:350;opacity:0;pointer-events:none;transition:opacity .4s;backdrop-filter:blur(4px)}
        .overlay.open{opacity:1;pointer-events:all}
        
        /* ===== SIDEBAR ===== */
        .sidebar{position:fixed;top:0;right:-var(--sidebar-w);right:-340px;width:var(--sidebar-w);height:100vh;background:var(--dark);border-left:1px solid var(--border);z-index:360;display:flex;flex-direction:column;padding:0;transition:right .45s cubic-bezier(.23,1,.32,1);overflow:hidden}
        .sidebar.open{right:0}
        .sidebar-header{display:flex;align-items:center;justify-content:space-between;padding:24px 32px;border-bottom:1px solid rgba(255,255,255,.05)}
        .sidebar-logo img{height:38px;opacity:.9}
        .sidebar-close{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.1);border-radius:4px;cursor:pointer;color:var(--muted);transition:.3s;font-size:.85rem}
        .sidebar-close:hover{border-color:var(--red);color:var(--red)}
        .sidebar-nav{flex:1;padding:40px 32px;display:flex;flex-direction:column;gap:4px}
        .sidebar-nav a{display:flex;align-items:center;gap:16px;padding:14px 16px;border-radius:4px;font-size:.85rem;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:var(--muted);transition:.3s;position:relative;overflow:hidden;border:1px solid transparent}
        .sidebar-nav a .nav-num{font-family:'Bebas Neue',sans-serif;font-size:1.1rem;color:rgba(229,0,0,.35);min-width:24px;transition:.3s}
        .sidebar-nav a:hover,.sidebar-nav a.active{color:var(--white);background:rgba(229,0,0,.06);border-color:var(--border)}
        .sidebar-nav a:hover .nav-num,.sidebar-nav a.active .nav-num{color:var(--red)}
        .sidebar-nav a::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--red);transform:scaleY(0);transition:transform .3s;transform-origin:bottom}
        .sidebar-nav a:hover::before,.sidebar-nav a.active::before{transform:scaleY(1)}
        .sidebar-footer{padding:28px 32px;border-top:1px solid rgba(255,255,255,.05)}
        .sidebar-socials{display:flex;gap:10px;margin-bottom:20px}
        .sidebar-social{width:36px;height:36px;border:1px solid rgba(255,255,255,.08);border-radius:4px;display:flex;align-items:center;justify-content:center;color:var(--muted);transition:.3s;font-size:.8rem}
        .sidebar-social:hover{background:var(--red);color:var(--white);border-color:var(--red)}
        .sidebar-cta{display:flex;align-items:center;gap:10px;padding:12px 18px;background:rgba(229,0,0,.1);border:1px solid rgba(229,0,0,.25);border-radius:4px;color:var(--red);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;font-weight:600;transition:.3s}
        .sidebar-cta:hover{background:var(--red);color:var(--white)}
        .sidebar-cta i{font-size:.85rem}
        
        /* ===== SECTION BASE ===== */
        section{padding:100px 60px;position:relative}
        .section-label{font-size:.7rem;letter-spacing:.25em;text-transform:uppercase;color:var(--red);margin-bottom:12px;display:flex;align-items:center;gap:10px}
        .section-label::before{content:'';width:30px;height:1px;background:var(--red)}
        h2.section-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,4.5rem);color:var(--white);line-height:1;margin-bottom:60px}
        h2.section-title span{color:var(--red)}
        
        /* ===== HERO ===== */
        .hero{min-height:100vh;display:flex;align-items:center;padding:140px 60px 80px;overflow:hidden}
        .hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 65% 40%,rgba(229,0,0,.08) 0%,transparent 60%);pointer-events:none}
        .hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(229,0,0,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(229,0,0,.035) 1px,transparent 1px);background-size:55px 55px;mask-image:radial-gradient(ellipse at center,black 20%,transparent 75%);pointer-events:none}
        .hero-inner{position:relative;z-index:2;width:100%;display:flex;align-items:center;justify-content:space-between;gap:60px}
        .hero-content{max-width:680px}
        .hero-tag{display:inline-flex;align-items:center;gap:8px;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--red);border:1px solid var(--border);padding:6px 16px;border-radius:2px;margin-bottom:28px;animation:fadeUp .7s ease both}
        .hero-dot{width:7px;height:7px;background:var(--red);border-radius:50%;animation:pulse 1.5s infinite}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(1.5)}}
        .hero h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(4.5rem,9vw,8.5rem);line-height:.92;color:var(--white);animation:fadeUp .7s .1s ease both}
        .hero h1 .red{color:var(--red)}
        .hero-typed-wrap{font-size:1.15rem;color:var(--muted);margin:22px 0 14px;animation:fadeUp .7s .15s ease both;min-height:1.8rem}
        .hero-typed-wrap span{color:var(--white);font-weight:600}
        .cursor-blink{color:var(--red);animation:blink .7s infinite}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        .hero-desc{font-size:1rem;color:var(--muted);line-height:1.8;max-width:500px;margin-bottom:42px;animation:fadeUp .7s .2s ease both}
        .hero-btns{display:flex;gap:16px;flex-wrap:wrap;animation:fadeUp .7s .25s ease both}
        .btn{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;font-size:.85rem;letter-spacing:.08em;font-weight:600;border-radius:2px;transition:.3s;cursor:pointer;border:none;font-family:'Outfit',sans-serif}
        .btn-primary{background:var(--red);color:var(--white)}
        .btn-primary:hover{background:var(--red-dark);transform:translateY(-2px);box-shadow:0 8px 30px rgba(229,0,0,.35)}
        .btn-outline{background:transparent;color:var(--white);border:1px solid rgba(255,255,255,.2)}
        .btn-outline:hover{border-color:var(--red);color:var(--red);transform:translateY(-2px)}
        .hero-stats{display:flex;gap:40px;margin-top:50px;animation:fadeUp .7s .3s ease both;flex-wrap:wrap}
        .hero-stat h3{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;color:var(--red);line-height:1}
        .hero-stat p{font-size:.75rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em;margin-top:4px}
        .hero-img-wrap{position:relative;flex-shrink:0;animation:fadeUp .7s .35s ease both}
        .hero-img-ring{width:320px;height:320px;border-radius:50%;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;position:relative;animation:spin 20s linear infinite}
        @keyframes spin{to{transform:rotate(360deg)}}
        .hero-img-ring::before{content:'AH';position:absolute;top:-1px;right:60px;font-family:'Bebas Neue',sans-serif;font-size:.85rem;color:var(--red);letter-spacing:.1em;background:var(--black);padding:0 6px}
        .hero-avatar{width:268px;height:268px;border-radius:50%;background:linear-gradient(135deg,var(--card) 0%,var(--card2) 100%);display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:5.5rem;color:var(--red);border:3px solid rgba(229,0,0,.25);animation:spin 20s linear infinite reverse;box-shadow:0 0 60px rgba(229,0,0,.12),inset 0 0 40px rgba(229,0,0,.05)}
        .hero-scroll{position:absolute;bottom:36px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--muted);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase}
        .hero-scroll-line{width:1px;height:44px;background:linear-gradient(to bottom,var(--red),transparent);animation:scrollLine 1.5s ease infinite}
        @keyframes scrollLine{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
        
        /* ===== PROJECTS ===== */
        .projects{background:var(--dark)}
        .projects-filter{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:48px}
        .filter-btn{padding:8px 20px;font-size:.73rem;letter-spacing:.08em;text-transform:uppercase;border:1px solid rgba(255,255,255,.1);border-radius:2px;cursor:pointer;transition:.3s;background:transparent;color:var(--muted);font-family:'Outfit',sans-serif}
        .filter-btn.active,.filter-btn:hover{border-color:var(--red);color:var(--red)}
        .projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px}
        .project-card{background:var(--card);border:1px solid rgba(255,255,255,.05);border-radius:4px;overflow:hidden;transition:.4s}
        .project-card:hover{transform:translateY(-6px);border-color:var(--border);box-shadow:0 20px 60px rgba(0,0,0,.5)}
        .project-card.hidden{display:none}
        .project-thumb{height:170px;background:linear-gradient(135deg,#191919 0%,#222 100%);display:flex;align-items:center;justify-content:center;position:relative}
        .project-thumb-icon{font-size:2.5rem;color:rgba(229,0,0,.28)}
        .project-thumb-label{position:absolute;top:12px;right:12px;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;padding:4px 10px;border-radius:2px;background:rgba(229,0,0,.12);color:var(--red);border:1px solid rgba(229,0,0,.25)}
        .project-body{padding:24px}
        .project-title{font-size:1rem;font-weight:600;color:var(--white);margin-bottom:8px}
        .project-desc{font-size:.82rem;color:var(--muted);line-height:1.7;margin-bottom:16px}
        .project-tech{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px}
        .project-tech span{font-size:.62rem;padding:3px 8px;border-radius:2px;background:rgba(229,0,0,.07);color:var(--red);border:1px solid rgba(229,0,0,.15);letter-spacing:.05em;text-transform:uppercase}
        .project-link{font-size:.75rem;color:var(--red);letter-spacing:.08em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;transition:gap .3s}
        .project-link:hover{gap:10px}
        
        /* ===== CONTACT ===== */
        .contact{background:var(--black)}
        .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:start}
        .contact-intro{color:var(--muted);line-height:1.8;margin-bottom:28px}
        .contact-item{display:flex;align-items:center;gap:16px;margin-bottom:16px;padding:16px 20px;background:var(--card);border:1px solid rgba(255,255,255,.05);border-radius:4px;transition:.3s}
        .contact-item:hover{border-color:var(--border)}
        .contact-item-icon{width:42px;height:42px;background:rgba(229,0,0,.1);border-radius:4px;display:flex;align-items:center;justify-content:center;color:var(--red);flex-shrink:0}
        .contact-item-label{font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:3px}
        .contact-item-value{font-size:.88rem;color:var(--white);font-weight:500}
        .contact-socials{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}
        .contact-social-link{width:40px;height:40px;border:1px solid rgba(255,255,255,.08);border-radius:4px;display:flex;align-items:center;justify-content:center;color:var(--muted);transition:.3s}
        .contact-social-link:hover{background:var(--red);color:var(--white);border-color:var(--red)}
        .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px}
        .projects-empty{text-align:center;padding:60px 20px;color:var(--muted);border:1px dashed var(--border);border-radius:4px}
        
        /* ===== FOOTER ===== */
        footer{background:var(--dark);border-top:1px solid var(--border);padding:36px 60px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:18px}
        .footer-logo img{height:36px;opacity:.75}
        .footer-copy{font-size:.76rem;color:var(--muted);text-align:center}
        .footer-copy span{color:var(--red)}
        .footer-links{display:flex;gap:22px}
        .footer-links a{font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);transition:color .3s}
        .footer-links a:hover{color:var(--red)}
        
        /* ===== ANIMATIONS ===== */
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        .reveal{opacity:0;transform:translateY(36px);transition:opacity .7s ease,transform .7s ease}
        .reveal.visible{opacity:1;transform:translateY(0)}
        
        /* ===== RESPONSIVE ===== */
        @media(max-width:960px){
            section{padding:80px 28px}
            .hero{padding:120px 28px 80px}
            .hero-inner{flex-direction:column-reverse}
            .hero-img-wrap{display:none}
            .about-grid,.contact-grid{grid-template-columns:1fr}
            footer{flex-direction:column;text-align:center;padding:30px 28px}
            .footer-links{justify-content:center}
        }
        @media(max-width:560px){
            nav{padding:14px 20px}
            section{padding:70px 20px}
            .hero{padding:110px 20px 60px}
            .hero-stats{gap:24px}
        }
    </style>
</head>
<body>

<!-- ===== TOP NAV ===== -->
<nav id="navbar">
    <a href="#hero" class="nav-logo">
        <div style="font-family:'Bebas Neue';font-size:1.5rem;color:var(--white)">HA</div>
    </a>
    <button class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
    </button>
</nav>

<!-- ===== OVERLAY ===== -->
<div class="overlay" id="overlay"></div>

<!-- ===== SIDEBAR ===== -->
<div class="sidebar" id="sidebar">
    <div class="sidebar-header">
        <div class="sidebar-logo" style="font-family:'Bebas Neue';font-size:1.3rem;color:var(--white)">HA</div>
        <button class="sidebar-close" id="sidebarClose"><i class="fas fa-times"></i></button>
    </div>
    <nav class="sidebar-nav">
        <a href="#hero"><span class="nav-num">01</span>Home</a>
        <a href="#about"><span class="nav-num">02</span>About</a>
        <a href="#projects"><span class="nav-num">03</span>Projects</a>
        <a href="#services"><span class="nav-num">04</span>Services</a>
        <a href="#testimonials"><span class="nav-num">05</span>Testimonials</a>
        <a href="#contact"><span class="nav-num">06</span>Contact</a>
        <a href="{{ route('portfolio.index') }}"><span class="nav-num">07</span>Full CV</a>
        <a href="{{ route('blog.index') }}"><span class="nav-num">08</span>Blog</a>
    </nav>
    <div class="sidebar-footer">
        <div class="sidebar-socials">
            <a href="https://www.facebook.com/haythem.aljane" class="sidebar-social" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://github.com/haythemalj" class="sidebar-social" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.instagram.com/haythem_alj" class="sidebar-social" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/aljane-haythem-077713193/" class="sidebar-social" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://wa.me/21620832737" class="sidebar-social" target="_blank"><i class="fab fa-whatsapp"></i></a>
        </div>
        <a href="#contact" class="sidebar-cta">
            <i class="fas fa-envelope"></i> Get in Touch
        </a>
    </div>
</div>

<!-- ===== HERO ===== -->
<section class="hero" id="hero">
    <div class="hero-bg"></div>
    <div class="hero-grid"></div>
    <div class="hero-inner">
        <div class="hero-content">
            <div class="hero-tag"><span class="hero-dot"></span>Available for Freelance</div>
            <h1>HAYTHEM<br><span class="red">ALJANE</span></h1>
            <div class="hero-typed-wrap">I am a <span id="typed-text"></span><span class="cursor-blink">|</span></div>
            <p class="hero-desc">Freelance Developer & UI/UX Designer from Tataouine, Tunisia. 3+ years of experience creating web applications, digital designs, and leading teams. Passionate about innovation, community, and building impactful digital solutions.</p>
            <div class="hero-btns">
                <a href="#contact" class="btn btn-primary"><i class="fas fa-paper-plane"></i>Get in Touch</a>
                <a href="http://aljane.kesug.com/cv%20haythem/cv.pdf" target="_blank" class="btn btn-outline"><i class="fas fa-download"></i>Download CV</a>
            </div>
            <div class="hero-stats">
                <div class="hero-stat"><h3>3+</h3><p>Years Active</p></div>
                <div class="hero-stat"><h3>10+</h3><p>Websites</p></div>
                <div class="hero-stat"><h3>400+</h3><p>Design Works</p></div>
                <div class="hero-stat"><h3>4</h3><p>Languages</p></div>
            </div>
        </div>
        <div class="hero-img-wrap">
            <div class="hero-img-ring">
                <div class="hero-avatar">AH</div>
            </div>
        </div>
    </div>
    <div class="hero-scroll"><span>Scroll</span><div class="hero-scroll-line"></div></div>
</section>

<!-- ===== ABOUT / SKILLS ===== -->
<section class="projects" id="about" style="padding:100px 60px">
    <div class="section-label">About Me</div>
    <h2 class="section-title">Skills & <span>Experience</span></h2>
    
    <div class="about-grid" style="margin-bottom:60px">
        <div>
            <h3 style="font-size:1.3rem; color:var(--white); margin-bottom:20px">Technical Skills</h3>
            <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:25px">
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">HTML5</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">CSS3</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">JavaScript</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">React</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">Laravel</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">PHP</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">Node.js</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">MySQL</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">Python</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">WordPress</span>
            </div>
            <h3 style="font-size:1.3rem; color:var(--white); margin:20px 0 15px 0">Design Tools</h3>
            <div style="display:flex; flex-wrap:wrap; gap:10px">
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">Photoshop</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">Illustrator</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">After Effects</span>
                <span style="background:rgba(229,0,0,.1); border:1px solid rgba(229,0,0,.25); padding:8px 14px; border-radius:4px; font-size:.85rem">UI/UX</span>
            </div>
        </div>

        <div>
            <h3 style="font-size:1.3rem; color:var(--white); margin-bottom:20px">Experience</h3>
            <div style="border-left:2px solid var(--red); padding-left:20px; margin-bottom:25px">
                <h4 style="color:var(--white); margin-bottom:5px">Freelance Developer</h4>
                <p style="color:var(--red); font-size:.9rem">2023 - Present</p>
                <p style="color:var(--muted); font-size:.9rem">Web apps & design projects</p>
            </div>
            <div style="border-left:2px solid var(--red); padding-left:20px; margin-bottom:25px">
                <h4 style="color:var(--white); margin-bottom:5px">AIESEC International</h4>
                <p style="color:var(--red); font-size:.9rem">2022 - 2024</p>
                <p style="color:var(--muted); font-size:.9rem">VP Leadership & B2B Sales</p>
            </div>
            <div style="border-left:2px solid var(--red); padding-left:20px">
                <h4 style="color:var(--white); margin-bottom:5px">Languages</h4>
                <p style="color:var(--muted); font-size:.9rem">Arabic (Native) • English (Advanced) • French (Advanced) • Italian (Basic)</p>
            </div>
        </div>
    </div>
</section>

<!-- ===== PROJECTS ===== -->
<section class="projects" id="projects">
    <div class="section-label">Portfolio</div>
    <h2 class="section-title">My <span>Projects</span></h2>
    <div class="projects-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="web">Web Dev</button>
        <button class="filter-btn" data-filter="design">Design</button>
        <button class="filter-btn" data-filter="ai">AI / Tech</button>
    </div>
    <div class="projects-grid" id="projects-container">
        @forelse($projects as $project)
            @include('partials.project-card', ['project' => $project])
        @empty
            <div class="projects-empty" style="grid-column:1/-1">
                <p>No projects yet. Add them from the admin dashboard or database seeder.</p>
                <a href="{{ route('portfolio.index') }}" class="btn btn-outline" style="margin-top:20px">View Full Portfolio</a>
            </div>
        @endforelse
    </div>
</section>

<!-- ===== SERVICES ===== -->
<section class="projects" id="services" style="padding:100px 60px">
    <div class="section-label">What I Offer</div>
    <h2 class="section-title">Services & <span>Solutions</span></h2>
    
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:30px; margin-top:60px">
        <div style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:40px; border-radius:4px; transition:.3s">
            <i style="font-size:2.5rem; color:var(--red); margin-bottom:20px" class="fas fa-code"></i>
            <h3 style="color:var(--white); margin-bottom:15px; font-size:1.2rem">Web Development</h3>
            <p style="color:var(--muted); line-height:1.8">Full-stack web applications with React, Laravel, and modern frameworks. Responsive design for all devices.</p>
        </div>
        
        <div style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:40px; border-radius:4px; transition:.3s">
            <i style="font-size:2.5rem; color:var(--red); margin-bottom:20px" class="fas fa-paint-brush"></i>
            <h3 style="color:var(--white); margin-bottom:15px; font-size:1.2rem">UI/UX Design</h3>
            <p style="color:var(--muted); line-height:1.8">Beautiful, user-centered designs. Wireframes, prototypes, and complete design systems.</p>
        </div>
        
        <div style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:40px; border-radius:4px; transition:.3s">
            <i style="font-size:2.5rem; color:var(--red); margin-bottom:20px" class="fas fa-mobile-alt"></i>
            <h3 style="color:var(--white); margin-bottom:15px; font-size:1.2rem">Mobile Solutions</h3>
            <p style="color:var(--muted); line-height:1.8">Responsive mobile-first designs and Android development. Progressive Web Apps (PWA).</p>
        </div>
        
        <div style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:40px; border-radius:4px; transition:.3s">
            <i style="font-size:2.5rem; color:var(--red); margin-bottom:20px" class="fas fa-brain"></i>
            <h3 style="color:var(--white); margin-bottom:15px; font-size:1.2rem">AI & Machine Learning</h3>
            <p style="color:var(--muted); line-height:1.8">AI-powered features, computer vision integration, predictive analytics, and automation.</p>
        </div>
        
        <div style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:40px; border-radius:4px; transition:.3s">
            <i style="font-size:2.5rem; color:var(--red); margin-bottom:20px" class="fas fa-film"></i>
            <h3 style="color:var(--white); margin-bottom:15px; font-size:1.2rem">Video & Animation</h3>
            <p style="color:var(--muted); line-height:1.8">Motion graphics, video editing, and animated content creation. 400+ design projects completed.</p>
        </div>
        
        <div style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:40px; border-radius:4px; transition:.3s">
            <i style="font-size:2.5rem; color:var(--red); margin-bottom:20px" class="fas fa-palette"></i>
            <h3 style="color:var(--white); margin-bottom:15px; font-size:1.2rem">Branding</h3>
            <p style="color:var(--muted); line-height:1.8">Logo design, brand guidelines, visual identity, and complete branding packages.</p>
        </div>
    </div>
</section>

<!-- ===== STATS ===== -->
<section style="padding:100px 60px; background:rgba(229,0,0,.02)">
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:40px; text-align:center">
        <div>
            <h3 style="font-family:'Bebas Neue'; font-size:3rem; color:var(--red); line-height:1">10+</h3>
            <p style="color:var(--muted); font-size:.85rem; text-transform:uppercase; letter-spacing:.1em; margin-top:10px">Projects Completed</p>
        </div>
        <div>
            <h3 style="font-family:'Bebas Neue'; font-size:3rem; color:var(--red); line-height:1">400+</h3>
            <p style="color:var(--muted); font-size:.85rem; text-transform:uppercase; letter-spacing:.1em; margin-top:10px">Design Works</p>
        </div>
        <div>
            <h3 style="font-family:'Bebas Neue'; font-size:3rem; color:var(--red); line-height:1">3+</h3>
            <p style="color:var(--muted); font-size:.85rem; text-transform:uppercase; letter-spacing:.1em; margin-top:10px">Years Experience</p>
        </div>
        <div>
            <h3 style="font-family:'Bebas Neue'; font-size:3rem; color:var(--red); line-height:1">4</h3>
            <p style="color:var(--muted); font-size:.85rem; text-transform:uppercase; letter-spacing:.1em; margin-top:10px">Languages</p>
        </div>
        <div>
            <h3 style="font-family:'Bebas Neue'; font-size:3rem; color:var(--red); line-height:1">40+</h3>
            <p style="color:var(--muted); font-size:.85rem; text-transform:uppercase; letter-spacing:.1em; margin-top:10px">Team Members Led</p>
        </div>
        <div>
            <h3 style="font-family:'Bebas Neue'; font-size:3rem; color:var(--red); line-height:1">100%</h3>
            <p style="color:var(--muted); font-size:.85rem; text-transform:uppercase; letter-spacing:.1em; margin-top:10px">Client Satisfaction</p>
        </div>
    </div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<section class="projects" id="testimonials" style="padding:100px 60px">
    <div class="section-label">Feedback</div>
    <h2 class="section-title">What Clients <span>Say</span></h2>
    
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:30px; margin-top:60px">
        <div style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:30px; border-radius:4px">
            <div style="display:flex; margin-bottom:20px">
                <span style="color:var(--red)">★★★★★</span>
            </div>
            <p style="color:var(--muted); line-height:1.8; margin-bottom:20px">"Haythem delivered an exceptional web application that exceeded our expectations. Professional, creative, and detail-oriented."</p>
            <div style="display:flex; align-items:center; gap:15px">
                <div style="width:50px; height:50px; background:var(--red); border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--white); font-weight:600">AH</div>
                <div>
                    <p style="color:var(--white); font-weight:600">Ahmed Hassan</p>
                    <p style="color:var(--red); font-size:.85rem">CEO, Tech Startup Cairo</p>
                </div>
            </div>
        </div>
        
        <div style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:30px; border-radius:4px">
            <div style="display:flex; margin-bottom:20px">
                <span style="color:var(--red)">★★★★★</span>
            </div>
            <p style="color:var(--muted); line-height:1.8; margin-bottom:20px">"Outstanding UI/UX design work. Haythem transformed our brand vision into beautiful digital experiences."</p>
            <div style="display:flex; align-items:center; gap:15px">
                <div style="width:50px; height:50px; background:var(--red); border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--white); font-weight:600">FM</div>
                <div>
                    <p style="color:var(--white); font-weight:600">Fatima Al-Mansoori</p>
                    <p style="color:var(--red); font-size:.85rem">Creative Director</p>
                </div>
            </div>
        </div>
        
        <div style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:30px; border-radius:4px">
            <div style="display:flex; margin-bottom:20px">
                <span style="color:var(--red)">★★★★★</span>
            </div>
            <p style="color:var(--muted); line-height:1.8; margin-bottom:20px">"Reliable, skilled developer. The Smart Glasses project was innovative and well-executed. Highly recommended!"</p>
            <div style="display:flex; align-items:center; gap:15px">
                <div style="width:50px; height:50px; background:var(--red); border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--white); font-weight:600">MK</div>
                <div>
                    <p style="color:var(--white); font-weight:600">Mohamed Karim</p>
                    <p style="color:var(--red); font-size:.85rem">Product Manager</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== FAQ ===== -->
<section style="padding:100px 60px; background:rgba(229,0,0,.02)">
    <div class="section-label">Questions?</div>
    <h2 class="section-title">Frequently Asked <span>Questions</span></h2>
    
    <div style="max-width:800px; margin:60px auto 0">
        <details style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:25px; margin-bottom:15px; border-radius:4px; cursor:pointer">
            <summary style="color:var(--white); font-weight:600; user-select:none">What technologies do you specialize in?</summary>
            <p style="color:var(--muted); margin-top:15px; line-height:1.8">I specialize in Laravel, React.js, Node.js, PHP, Python, and various design tools. I'm also experienced with AI/ML integration, WordPress, and modern web frameworks.</p>
        </details>
        
        <details style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:25px; margin-bottom:15px; border-radius:4px; cursor:pointer">
            <summary style="color:var(--white); font-weight:600; user-select:none">How long does a typical project take?</summary>
            <p style="color:var(--muted); margin-top:15px; line-height:1.8">Project timelines vary based on complexity. Small websites typically take 2-4 weeks, while complex applications may take 2-3 months. I'll provide a detailed timeline after understanding your requirements.</p>
        </details>
        
        <details style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:25px; margin-bottom:15px; border-radius:4px; cursor:pointer">
            <summary style="color:var(--white); font-weight:600; user-select:none">Do you offer ongoing support?</summary>
            <p style="color:var(--muted); margin-top:15px; line-height:1.8">Yes! I offer maintenance packages, ongoing support, and updates. Let's discuss a support plan that works for your needs.</p>
        </details>
        
        <details style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:25px; margin-bottom:15px; border-radius:4px; cursor:pointer">
            <summary style="color:var(--white); font-weight:600; user-select:none">Can you work on existing projects?</summary>
            <p style="color:var(--muted); margin-top:15px; line-height:1.8">Absolutely! I can enhance, fix, or refactor existing projects. I'm comfortable working with any codebase and can help improve performance, security, and features.</p>
        </details>
        
        <details style="background:var(--card); border:1px solid rgba(255,255,255,.05); padding:25px; margin-bottom:15px; border-radius:4px; cursor:pointer">
            <summary style="color:var(--white); font-weight:600; user-select:none">What's your availability?</summary>
            <p style="color:var(--muted); margin-top:15px; line-height:1.8">I'm available for freelance projects and can adjust my schedule based on project needs. Feel free to reach out to discuss availability and project requirements.</p>
        </details>
    </div>
</section>

<!-- ===== CONTACT ===== -->
<section class="contact" id="contact">
    <div class="section-label">Get in Touch</div>
    <h2 class="section-title">Contact <span>Me</span></h2>
    <div class="contact-grid">
        <div class="reveal">
            <p class="contact-intro">Looking to collaborate on a web app, brand design, or freelance project? Reach out — I usually reply within 24 hours.</p>
            <div class="contact-item">
                <div class="contact-item-icon"><i class="fas fa-phone"></i></div>
                <div>
                    <div class="contact-item-label">Phone / WhatsApp</div>
                    <div class="contact-item-value"><a href="https://wa.me/21620832737" target="_blank" rel="noopener">+216 20 832 737</a></div>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-item-icon"><i class="fas fa-envelope"></i></div>
                <div>
                    <div class="contact-item-label">Email</div>
                    <div class="contact-item-value"><a href="mailto:aljanehaythem23@gmail.com">aljanehaythem23@gmail.com</a></div>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-item-icon"><i class="fas fa-location-dot"></i></div>
                <div>
                    <div class="contact-item-label">Location</div>
                    <div class="contact-item-value">Tataouine, Tunisia</div>
                </div>
            </div>
            <div class="contact-socials">
                <a href="https://www.facebook.com/haythem.aljane" class="contact-social-link" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a>
                <a href="https://github.com/haythemalj" class="contact-social-link" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>
                <a href="https://www.instagram.com/haythem_alj" class="contact-social-link" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/aljane-haythem-077713193/" class="contact-social-link" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://wa.me/21620832737" class="contact-social-link" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
        <div class="reveal" style="text-align:center">
            <p class="contact-intro">Prefer email? Send me a message with your project details.</p>
            <a href="mailto:aljanehaythem23@gmail.com?subject=Portfolio%20Inquiry" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Send Email</a>
            <a href="{{ route('portfolio.index') }}" class="btn btn-outline" style="margin-left:12px;margin-top:12px"><i class="fas fa-user"></i> Full CV Page</a>
        </div>
    </div>
</section>

<!-- ===== FOOTER ===== -->
<footer>
    <div class="footer-logo" style="font-family:'Bebas Neue';font-size:1.2rem;color:var(--white)">HA</div>
    <div class="footer-copy">© {{ date('Y') }} Haythem Aljane. All Rights Reserved</div>
    <div class="footer-links">
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="{{ route('portfolio.index') }}">CV</a>
        <a href="{{ route('blog.index') }}">Blog</a>
        <a href="#contact">Contact</a>
    </div>
</footer>

<script>
    // Typed text animation
    const phrases = ['Web Developer', 'UI/UX Designer', 'Community Manager', 'Tech Enthusiast'];
    let currentPhrase = 0;
    let currentChar = 0;
    const typedText = document.getElementById('typed-text');
    
    function type() {
        if (currentChar < phrases[currentPhrase].length) {
            typedText.textContent += phrases[currentPhrase][currentChar];
            currentChar++;
            setTimeout(type, 50);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (currentChar > 0) {
            typedText.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
            currentChar--;
            setTimeout(erase, 30);
        } else {
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(type, 500);
        }
    }
    
    type();
    
    // Navigation
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const sidebarClose = document.getElementById('sidebarClose');
    const navbar = document.getElementById('navbar');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
    });
    
    sidebarClose.addEventListener('click', () => {
        hamburger.classList.remove('open');
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    });
    
    overlay.addEventListener('click', () => {
        hamburger.classList.remove('open');
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    });
    
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
        });
    });
    
    // Scroll navbar effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Filter projects
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            document.querySelectorAll('.project-card').forEach(card => {
                if (filter === 'all' || card.dataset.cat === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    // Reveal animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>

</body>
</html>
