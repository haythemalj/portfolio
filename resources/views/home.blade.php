<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>Haythem Aljane | Web Designer & Developer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
:root{--red:#e50000;--red-dark:#b30000;--black:#080808;--dark:#111;--card:#161616;--card2:#1c1c1c;--border:rgba(229,0,0,0.18);--text:#ddd;--muted:#666;--white:#fff;--nav-w:80px;--nav-w-exp:260px}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Outfit',sans-serif;background:var(--black);color:var(--text);overflow-x:hidden;padding-left:var(--nav-w)}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:var(--black)}::-webkit-scrollbar-thumb{background:var(--red)}
a{text-decoration:none;color:inherit}

/* ===== LEFT SIDEBAR NAV ===== */
.leftnav{
  position:fixed;top:0;left:0;bottom:0;
  width:var(--nav-w);
  background:var(--dark);
  border-right:1px solid var(--border);
  z-index:500;
  display:flex;flex-direction:column;
  align-items:center;
  padding:28px 0;
  transition:width .4s cubic-bezier(.23,1,.32,1);
  overflow:hidden;
}
.leftnav:hover{width:var(--nav-w-exp)}
.leftnav:hover .nav-label{opacity:1;transform:translateX(0)}
.leftnav:hover .nav-logo-text{opacity:1}
.leftnav:hover .nav-logo-img{margin-right:10px}

/* Logo area */
.nav-logo-wrap{
  display:flex;align-items:center;justify-content:center;
  width:100%;padding:0 20px;margin-bottom:40px;
  min-height:50px;overflow:hidden;white-space:nowrap;
}
.nav-logo-img{height:38px;flex-shrink:0;transition:margin .4s}
.nav-logo-text{
  font-family:'Bebas Neue',sans-serif;font-size:.95rem;letter-spacing:.15em;
  color:var(--red);opacity:0;transition:opacity .3s .1s;white-space:nowrap;
}

/* Nav links */
.nav-links{flex:1;display:flex;flex-direction:column;gap:4px;width:100%;padding:0 12px}
.nav-link{
  display:flex;align-items:center;gap:14px;
  padding:13px 14px;border-radius:6px;
  color:var(--muted);transition:.3s;
  position:relative;overflow:hidden;cursor:pointer;
  white-space:nowrap;
}
.nav-link i{font-size:1rem;flex-shrink:0;width:20px;text-align:center;transition:color .3s}
.nav-label{
  font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;font-weight:600;
  opacity:0;transform:translateX(-8px);transition:opacity .3s .05s,transform .3s .05s;
}
.nav-link:hover,.nav-link.active{color:var(--white);background:rgba(229,0,0,.08)}
.nav-link:hover i,.nav-link.active i{color:var(--red)}
.nav-link::before{
  content:'';position:absolute;left:0;top:0;bottom:0;
  width:2px;background:var(--red);
  transform:scaleY(0);transition:transform .3s;transform-origin:bottom;
}
.nav-link:hover::before,.nav-link.active::before{transform:scaleY(1)}

/* Tooltip on non-expanded */
.nav-link[data-tip]{position:relative}

/* Bottom socials */
.nav-bottom{
  width:100%;padding:0 12px 8px;
  display:flex;flex-direction:column;gap:8px;
  border-top:1px solid rgba(255,255,255,.05);
  padding-top:16px;margin-top:8px;
}
.nav-social{
  display:flex;align-items:center;gap:14px;
  padding:9px 14px;border-radius:6px;
  color:var(--muted);transition:.3s;cursor:pointer;
  white-space:nowrap;
}
.nav-social i{font-size:.85rem;flex-shrink:0;width:20px;text-align:center}
.nav-social-label{
  font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;
  opacity:0;transform:translateX(-8px);transition:opacity .3s .05s,transform .3s .05s;
}
.leftnav:hover .nav-social-label{opacity:1;transform:translateX(0)}
.nav-social:hover{color:var(--red)}

/* Mobile toggle */
.nav-mob-toggle{
  display:none;position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
  z-index:600;width:52px;height:52px;border-radius:50%;
  background:var(--red);border:none;cursor:pointer;
  display:none;align-items:center;justify-content:center;color:var(--white);font-size:1.1rem;
  box-shadow:0 4px 20px rgba(229,0,0,.4);
}

/* ===== SECTIONS ===== */
section{padding:100px 70px;position:relative}
.section-label{font-size:.7rem;letter-spacing:.25em;text-transform:uppercase;color:var(--red);margin-bottom:12px;display:flex;align-items:center;gap:10px}
.section-label::before{content:'';width:30px;height:1px;background:var(--red)}
h2.section-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,4.5rem);color:var(--white);line-height:1;margin-bottom:60px}
h2.section-title span{color:var(--red)}

/* ===== HERO ===== */
.hero{min-height:100vh;display:flex;align-items:center;padding:140px 70px 80px;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 70% 45%,rgba(229,0,0,.09) 0%,transparent 60%);pointer-events:none}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(229,0,0,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(229,0,0,.03) 1px,transparent 1px);background-size:55px 55px;mask-image:radial-gradient(ellipse at center,black 20%,transparent 75%);pointer-events:none}
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
.hero-img-wrap{flex-shrink:0;animation:fadeUp .7s .35s ease both}
.hero-img-ring{width:320px;height:320px;border-radius:50%;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;position:relative;animation:spin 20s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.hero-img-ring::before{content:'AH';position:absolute;top:-1px;right:60px;font-family:'Bebas Neue',sans-serif;font-size:.85rem;color:var(--red);letter-spacing:.1em;background:var(--black);padding:0 6px}
.hero-avatar{width:268px;height:268px;border-radius:50%;object-fit:cover;border:3px solid rgba(229,0,0,.25);box-shadow:0 0 60px rgba(229,0,0,.12);animation:none;display:block}
.hero-scroll{position:absolute;bottom:36px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--muted);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase}
.hero-scroll-line{width:1px;height:44px;background:linear-gradient(to bottom,var(--red),transparent);animation:scrollLine 1.5s ease infinite}
@keyframes scrollLine{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}

/* ===== ABOUT ===== */
.about{background:var(--dark)}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
.about-text p{font-size:1rem;color:var(--muted);line-height:1.9;margin-bottom:20px}
.about-text p strong{color:var(--text)}
.about-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:32px}
.about-info-item{padding:16px 20px;background:var(--card);border:1px solid rgba(255,255,255,.05);border-radius:4px}
.about-info-item .label{font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--red);margin-bottom:4px}
.about-info-item .value{font-size:.88rem;color:var(--white);font-weight:500}
.skills-title{font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:28px}
.skill-bar-wrap{margin-bottom:22px}
.skill-bar-top{display:flex;justify-content:space-between;margin-bottom:8px}
.skill-name{font-size:.85rem;font-weight:500;color:var(--text)}
.skill-pct{font-size:.8rem;color:var(--red);font-weight:600}
.skill-track{height:3px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden}
.skill-fill{height:100%;background:var(--red);border-radius:2px;width:0;transition:width 1.2s cubic-bezier(.4,0,.2,1)}
.tech-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:32px}
.tech-tag{font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);border:1px solid rgba(255,255,255,.08);padding:5px 12px;border-radius:2px;transition:.3s}
.tech-tag:hover{border-color:var(--red);color:var(--red)}

/* ===== EXPERIENCE ===== */
.experience{background:var(--black)}
.exp-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px}
.exp-col-title{font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--red);display:flex;align-items:center;gap:10px;margin-bottom:36px}
.exp-col-title::before{content:'';width:20px;height:1px;background:var(--red)}
.timeline{position:relative;padding-left:28px}
.timeline::before{content:'';position:absolute;left:0;top:8px;bottom:0;width:1px;background:linear-gradient(to bottom,var(--red),rgba(229,0,0,.05))}
.timeline-item{position:relative;margin-bottom:34px}
.timeline-item::before{content:'';position:absolute;left:-32px;top:6px;width:9px;height:9px;background:var(--red);border-radius:50%;box-shadow:0 0 0 3px rgba(229,0,0,.15)}
.tl-date{font-size:.68rem;color:var(--red);letter-spacing:.1em;text-transform:uppercase;margin-bottom:5px}
.tl-title{font-size:.95rem;font-weight:600;color:var(--white);margin-bottom:4px}
.tl-org{font-size:.8rem;color:var(--muted);margin-bottom:8px}
.tl-desc{font-size:.82rem;color:var(--muted);line-height:1.7}

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

/* ===== CERTIFICATES ===== */
.certs{background:var(--black)}
.certs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px}
.cert-card{padding:22px;background:var(--card);border:1px solid rgba(255,255,255,.05);border-radius:4px;display:flex;align-items:center;gap:14px;transition:.3s}
.cert-card:hover{border-color:var(--border);transform:translateY(-3px)}
.cert-icon{width:34px;height:34px;background:rgba(229,0,0,.1);border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--red);font-size:.85rem}
.cert-name{font-size:.84rem;font-weight:600;color:var(--white);line-height:1.4}

/* ===== LEADERSHIP ===== */
.leadership{background:var(--dark)}
.leadership-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:18px}
.lead-card{padding:26px;background:var(--card);border:1px solid rgba(255,255,255,.05);border-radius:4px;transition:.3s;position:relative;overflow:hidden}
.lead-card::before{content:'';position:absolute;top:0;left:0;width:3px;height:0;background:var(--red);transition:height .4s}
.lead-card:hover::before{height:100%}
.lead-card:hover{border-color:var(--border);transform:translateY(-4px)}
.lead-org{font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:var(--red);margin-bottom:10px}
.lead-role{font-size:.97rem;font-weight:600;color:var(--white);margin-bottom:10px;line-height:1.4}
.lead-desc{font-size:.81rem;color:var(--muted);line-height:1.7}

/* ===== CONTACT ===== */
.contact{background:var(--black)}
.contact-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:80px}
.contact-intro{font-size:1rem;color:var(--muted);line-height:1.8;margin-bottom:36px}
.contact-item{display:flex;align-items:center;gap:16px;margin-bottom:18px;padding:16px 22px;background:var(--card);border:1px solid rgba(255,255,255,.05);border-radius:4px;transition:.3s}
.contact-item:hover{border-color:var(--border)}
.contact-item-icon{width:42px;height:42px;background:rgba(229,0,0,.1);border-radius:4px;display:flex;align-items:center;justify-content:center;color:var(--red);flex-shrink:0}
.contact-item-label{font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:3px}
.contact-item-value{font-size:.88rem;color:var(--white);font-weight:500}
.contact-socials{display:flex;gap:10px;margin-top:28px}
.social-link{width:42px;height:42px;background:var(--card);border:1px solid rgba(255,255,255,.07);border-radius:4px;display:flex;align-items:center;justify-content:center;color:var(--muted);transition:.3s;font-size:.88rem}
.social-link:hover{background:var(--red);color:var(--white);border-color:var(--red);transform:translateY(-3px)}
.contact-form{display:flex;flex-direction:column;gap:16px}
.form-group{display:flex;flex-direction:column;gap:7px}
.form-label{font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.form-input,.form-textarea{background:var(--card);border:1px solid rgba(255,255,255,.07);border-radius:4px;padding:13px 16px;color:var(--white);font-family:'Outfit',sans-serif;font-size:.9rem;transition:.3s;outline:none}
.form-input:focus,.form-textarea:focus{border-color:var(--red);box-shadow:0 0 0 3px rgba(229,0,0,.09)}
.form-textarea{resize:vertical;min-height:130px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}

/* ===== SERVICES ===== */
.services{background:var(--black)}
.services-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:22px}
.service-card{padding:32px;background:var(--card);border:1px solid rgba(255,255,255,.05);border-radius:4px;transition:.3s}
.service-card:hover{border-color:var(--border);transform:translateY(-4px)}
.service-card i{font-size:2rem;color:var(--red);margin-bottom:16px}
.service-card h3{color:var(--white);font-size:1.05rem;margin-bottom:10px}
.service-card p{color:var(--muted);font-size:.85rem;line-height:1.7}

/* ===== STATS ===== */
.stats-section{background:rgba(229,0,0,.03);padding:80px 70px}
.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:40px;text-align:center}
.stat-item h3{font-family:'Bebas Neue',sans-serif;font-size:3rem;color:var(--red);line-height:1}
.stat-item p{color:var(--muted);font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;margin-top:8px}

/* ===== MODAL ===== */
.modal{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:2000;display:flex;align-items:center;justify-content:center;padding:24px;opacity:0;pointer-events:none;transition:opacity .3s}
.modal.open{opacity:1;pointer-events:all}
.modal-box{background:var(--card);border:1px solid var(--border);border-radius:6px;max-width:560px;width:100%;padding:36px;position:relative;max-height:90vh;overflow-y:auto}
.modal-close{position:absolute;top:16px;right:16px;background:none;border:1px solid rgba(255,255,255,.15);color:var(--muted);width:36px;height:36px;border-radius:4px;cursor:pointer;font-size:1rem}
.modal-close:hover{color:var(--red);border-color:var(--red)}
.modal-box h3{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--white);margin-bottom:12px}
.modal-box p{color:var(--muted);line-height:1.8;margin-bottom:16px;font-size:.9rem}
.modal-tech{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px}
.modal-tech span{font-size:.65rem;padding:4px 10px;background:rgba(229,0,0,.08);color:var(--red);border:1px solid var(--border);text-transform:uppercase}
.modal-links{display:flex;gap:12px;flex-wrap:wrap}

/* ===== FOOTER ===== */
footer{background:var(--dark);border-top:1px solid var(--border);padding:36px 70px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:18px}
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

/* ===== MOBILE ===== */
@media(max-width:960px){
  body{padding-left:0;padding-bottom:70px}
  .leftnav{
    width:100%;height:60px;top:auto;bottom:0;left:0;right:0;
    flex-direction:row;padding:0 16px;
    border-right:none;border-top:1px solid var(--border);
    justify-content:space-around;align-items:center;
    overflow:visible;
  }
  .leftnav:hover{width:100%}
  .nav-logo-wrap{display:none}
  .nav-links{flex-direction:row;gap:0;padding:0;justify-content:space-around;width:auto}
  .nav-label{display:none}
  .nav-link{padding:10px 14px;border-radius:8px}
  .nav-link::before{display:none}
  .nav-link i{font-size:1.1rem;width:auto}
  .nav-bottom{display:none}
  section{padding:80px 24px}
  .hero{padding:60px 24px 80px}
  .hero-inner{flex-direction:column-reverse}
  .hero-img-wrap{display:none}
  .about-grid,.exp-grid,.contact-grid{grid-template-columns:1fr}
  .form-row{grid-template-columns:1fr}
  footer{flex-direction:column;text-align:center;padding:30px 24px}
  .footer-links{justify-content:center}
}
</style>
</head>
<body>

<!-- ===== LEFT SIDEBAR NAV ===== -->
<aside class="leftnav" id="leftnav">
  <div class="nav-logo-wrap">
    <img class="nav-logo-img" src="{{ asset('images/profile.jpg') }}" alt="Haythem Aljane">
    <span class="nav-logo-text">HAYTHEM</span>
  </div>

  <div class="nav-links">
    <a href="#hero" class="nav-link active" data-section="hero">
      <i class="fas fa-house"></i><span class="nav-label">Home</span>
    </a>
    <a href="#about" class="nav-link" data-section="about">
      <i class="fas fa-user"></i><span class="nav-label">About</span>
    </a>
    <a href="#experience" class="nav-link" data-section="experience">
      <i class="fas fa-briefcase"></i><span class="nav-label">Experience</span>
    </a>
    <a href="#projects" class="nav-link" data-section="projects">
      <i class="fas fa-layer-group"></i><span class="nav-label">Projects</span>
    </a>
    <a href="#certs" class="nav-link" data-section="certs">
      <i class="fas fa-certificate"></i><span class="nav-label">Certificates</span>
    </a>
    <a href="#services" class="nav-link" data-section="services">
      <i class="fas fa-code"></i><span class="nav-label">Services</span>
    </a>
    <a href="#leadership" class="nav-link" data-section="leadership">
      <i class="fas fa-people-group"></i><span class="nav-label">Leadership</span>
    </a>
    <a href="#contact" class="nav-link" data-section="contact">
      <i class="fas fa-envelope"></i><span class="nav-label">Contact</span>
    </a>
  </div>

  <div class="nav-bottom">
    <a href="https://www.linkedin.com/in/aljane-haythem-077713193/" target="_blank" class="nav-social">
      <i class="fab fa-linkedin-in"></i><span class="nav-social-label">LinkedIn</span>
    </a>
    <a href="https://github.com/haythemalj" target="_blank" class="nav-social">
      <i class="fab fa-github"></i><span class="nav-social-label">GitHub</span>
    </a>
    <a href="https://wa.me/21620832737" target="_blank" class="nav-social">
      <i class="fab fa-whatsapp"></i><span class="nav-social-label">WhatsApp</span>
    </a>
    <a href="http://aljane.kesug.com/cv%20haythem/cv.pdf" target="_blank" class="nav-social" style="color:var(--red)">
      <i class="fas fa-download"></i><span class="nav-social-label" style="color:var(--red)">Download CV</span>
    </a>
  </div>
</aside>

<!-- ===== HERO ===== -->
<section class="hero" id="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-inner">
    <div class="hero-content">
      <div class="hero-tag"><span class="hero-dot"></span>Available for Freelance</div>
      <h1>HAYTHEM<br><span class="red">ALJANE</span></h1>
      <div class="hero-typed-wrap">I am a <span id="typed-text"></span><span class="cursor-blink">|</span></div>
      <p class="hero-desc">Web Developer & Community Manager from Tataouine, Tunisia — blending technical expertise with leadership and social engagement to build impactful digital experiences.</p>
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
        <img class="hero-avatar" src="{{ asset('images/profile.jpg') }}" alt="Haythem Aljane">
      </div>
    </div>
  </div>
  <div class="hero-scroll"><span>Scroll</span><div class="hero-scroll-line"></div></div>
</section>

<!-- ===== ABOUT ===== -->
<section class="about" id="about">
  <div class="section-label">Who I Am</div>
  <h2 class="section-title">About <span>Me</span></h2>
  <div class="about-grid">
    <div class="about-text reveal">
      <p>Graduated as a <strong>Web Developer and Community Manager</strong>, I bring a strong mix of technical expertise, leadership, and social engagement. Through my academic background and practical experiences, I have developed solid skills in web design, development, and digital communication.</p>
      <p>My journey with <strong>AIESEC</strong> and other social initiatives has strengthened my teamwork, adaptability, and leadership abilities. With hard skills in technology and soft skills in collaboration and problem-solving, I am motivated to contribute to impactful projects and continuously grow.</p>
      <div class="about-info-grid">
        <div class="about-info-item"><div class="label">Name</div><div class="value">Haythem Aljane</div></div>
        <div class="about-info-item"><div class="label">Date of Birth</div><div class="value">31 December 2000</div></div>
        <div class="about-info-item"><div class="label">Location</div><div class="value">Tataouine, Tunisia</div></div>
        <div class="about-info-item"><div class="label">Freelance</div><div class="value" style="color:var(--red)">Available ✓</div></div>
        <div class="about-info-item"><div class="label">Languages</div><div class="value">AR · EN · FR · IT</div></div>
        <div class="about-info-item"><div class="label">Email</div><div class="value" style="font-size:.76rem">aljanehaythem23@gmail.com</div></div>
      </div>
    </div>
    <div class="about-right reveal">
      <div class="skills-title">Technical Skills</div>
      <div class="skill-bar-wrap"><div class="skill-bar-top"><span class="skill-name">HTML5 / CSS3</span><span class="skill-pct">95%</span></div><div class="skill-track"><div class="skill-fill" data-width="95"></div></div></div>
      <div class="skill-bar-wrap"><div class="skill-bar-top"><span class="skill-name">UI / UX Design</span><span class="skill-pct">90%</span></div><div class="skill-track"><div class="skill-fill" data-width="90"></div></div></div>
      <div class="skill-bar-wrap"><div class="skill-bar-top"><span class="skill-name">JavaScript / React JS</span><span class="skill-pct">85%</span></div><div class="skill-track"><div class="skill-fill" data-width="85"></div></div></div>
      <div class="skill-bar-wrap"><div class="skill-bar-top"><span class="skill-name">Adobe Suite (PS · PR · AI · AE)</span><span class="skill-pct">80%</span></div><div class="skill-track"><div class="skill-fill" data-width="80"></div></div></div>
      <div class="skill-bar-wrap"><div class="skill-bar-top"><span class="skill-name">PHP / Laravel / Node JS</span><span class="skill-pct">75%</span></div><div class="skill-track"><div class="skill-fill" data-width="75"></div></div></div>
      <div class="skill-bar-wrap"><div class="skill-bar-top"><span class="skill-name">Python / OpenCV / YOLO</span><span class="skill-pct">65%</span></div><div class="skill-track"><div class="skill-fill" data-width="65"></div></div></div>
      <div class="tech-tags">
        <span class="tech-tag">WordPress</span><span class="tech-tag">MySQL</span><span class="tech-tag">Tailwind CSS</span><span class="tech-tag">Arduino</span><span class="tech-tag">Android Studio</span><span class="tech-tag">CapCut</span><span class="tech-tag">Google Workspace</span><span class="tech-tag">B2B / B2C</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== EXPERIENCE ===== -->
<section class="experience" id="experience">
  <div class="section-label">My Journey</div>
  <h2 class="section-title">Education & <span>Experience</span></h2>
  <div class="exp-grid">
    <div class="reveal">
      <div class="exp-col-title">Education</div>
      <div class="timeline">
        <div class="timeline-item"><div class="tl-date">2023 – 2025</div><div class="tl-title">BTS Multimedia & Marketing</div><div class="tl-org">Media Formation, Tunisia</div><div class="tl-desc">Web development, multimedia design, digital marketing and community management.</div></div>
        <div class="timeline-item"><div class="tl-date">2021</div><div class="tl-title">Baccalaureate in Technology</div><div class="tl-org">High School March 2, 1934 – Ghomrasen</div></div>
        <div class="timeline-item"><div class="tl-date">2025 · Final Project</div><div class="tl-title">Smart Glasses E-Commerce</div><div class="tl-org">React JS · Laravel · OpenCV · YOLO V8</div><div class="tl-desc">AI-powered smart glasses system with integrated e-commerce platform.</div></div>
        <div class="timeline-item"><div class="tl-date">2024 · International Internship</div><div class="tl-title">MBS Cairo, Egypt</div><div class="tl-desc">Professional internship with international exposure in Egypt.</div></div>
        <div class="timeline-item"><div class="tl-date">2024 · PFA Project</div><div class="tl-title">7 Websites Built</div><div class="tl-org">HTML · CSS · JS · PHP</div></div>
        <div class="timeline-item"><div class="tl-date">2023 · Hackathon 🏆</div><div class="tl-title">Smart Water Robot — Winner</div><div class="tl-org">React JS · Node JS · Arduino</div><div class="tl-desc">Built an AI-powered water-saving robot with marketing strategy. Won the hackathon.</div></div>
      </div>
    </div>
    <div class="reveal">
      <div class="exp-col-title">Leadership & Professional</div>
      <div class="timeline">
        <div class="timeline-item"><div class="tl-date">AIESEC in Tunisia – Monastir</div><div class="tl-title">Sales VP · Data Specialist · Team Leader</div><div class="tl-desc">Managed B2B & B2C sales across Tunisia · Supported 100+ exchange participants from 12 countries · OC Sales VP at Youth Speak Forum 2025 · Data & Sales Specialist IGT Tunisia (500+ participants).</div></div>
        <div class="timeline-item"><div class="tl-date">Tunivisions of ISIMM</div><div class="tl-title">President → VP → Member</div><div class="tl-desc">Led a 40-student team running workshops and training sessions across Monastir and Tunisia.</div></div>
        <div class="timeline-item"><div class="tl-date">JCI Junior</div><div class="tl-title">Financial Responsible</div><div class="tl-desc">Managed cash flow and financial planning for the Junior Chamber International.</div></div>
        <div class="timeline-item"><div class="tl-date">Croissant Rouge</div><div class="tl-title">Local President</div><div class="tl-desc">Led social life training and community programs with the Tunisian Red Crescent.</div></div>
        <div class="timeline-item"><div class="tl-date">3+ Years · Freelance</div><div class="tl-title">Graphic Designer & Web Developer</div><div class="tl-desc">400+ posters and videos · 10+ websites for various clients and industries.</div></div>
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
  <div class="projects-grid">
    @forelse($projects as $project)
      @include('partials.project-card', ['project' => $project])
    @empty
      <p style="grid-column:1/-1;color:var(--muted);text-align:center;padding:40px">No projects yet.</p>
    @endforelse
  </div>
</section>

<!-- ===== SERVICES ===== -->
<section class="services" id="services">
  <div class="section-label">What I Offer</div>
  <h2 class="section-title">Services & <span>Solutions</span></h2>
  <div class="services-grid reveal">
    <div class="service-card"><i class="fas fa-code"></i><h3>Web Development</h3><p>Full-stack apps with Laravel, React, and modern frameworks. Responsive for all devices.</p></div>
    <div class="service-card"><i class="fas fa-paint-brush"></i><h3>UI/UX Design</h3><p>User-centered designs, wireframes, prototypes, and complete design systems.</p></div>
    <div class="service-card"><i class="fas fa-mobile-alt"></i><h3>Mobile & PWA</h3><p>Mobile-first designs and progressive web apps for seamless experiences.</p></div>
    <div class="service-card"><i class="fas fa-brain"></i><h3>AI Integration</h3><p>Computer vision, OpenCV, YOLO, and smart features for innovative products.</p></div>
    <div class="service-card"><i class="fas fa-film"></i><h3>Video & Motion</h3><p>Motion graphics, video editing, and animated content — 400+ design works.</p></div>
    <div class="service-card"><i class="fas fa-palette"></i><h3>Branding</h3><p>Logo design, brand guidelines, and visual identity for businesses and clubs.</p></div>
  </div>
</section>

<!-- ===== STATS ===== -->
<section class="stats-section" id="stats">
  <div class="stats-grid reveal">
    <div class="stat-item"><h3>10+</h3><p>Websites Built</p></div>
    <div class="stat-item"><h3>400+</h3><p>Design Works</p></div>
    <div class="stat-item"><h3>3+</h3><p>Years Experience</p></div>
    <div class="stat-item"><h3>4</h3><p>Languages</p></div>
    <div class="stat-item"><h3>40+</h3><p>Team Members Led</p></div>
    <div class="stat-item"><h3>100%</h3><p>Client Focus</p></div>
  </div>
</section>

<!-- ===== CERTIFICATES ===== -->
<section class="certs" id="certs">
  <div class="section-label">Credentials</div>
  <h2 class="section-title">My <span>Certificates</span></h2>
  <div class="certs-grid reveal">
    <div class="cert-card"><div class="cert-icon"><i class="fas fa-language"></i></div><div class="cert-name">Imperial English B1</div></div>
    <div class="cert-card"><div class="cert-icon"><i class="fas fa-code"></i></div><div class="cert-name">HTML & CSS</div></div>
    <div class="cert-card"><div class="cert-icon"><i class="fas fa-file-word"></i></div><div class="cert-name">Microsoft Office</div></div>
    <div class="cert-card"><div class="cert-icon"><i class="fas fa-image"></i></div><div class="cert-name">Photoshop</div></div>
    <div class="cert-card"><div class="cert-icon"><i class="fas fa-pen-ruler"></i></div><div class="cert-name">UX / UI Design</div></div>
    <div class="cert-card"><div class="cert-icon"><i class="fas fa-people-group"></i></div><div class="cert-name">Soft Skills</div></div>
    <div class="cert-card"><div class="cert-icon"><i class="fas fa-network-wired"></i></div><div class="cert-name">Informatical Network</div></div>
    <div class="cert-card"><div class="cert-icon"><i class="fas fa-trophy"></i></div><div class="cert-name">Hackathon</div></div>
    <div class="cert-card"><div class="cert-icon"><i class="fas fa-brain"></i></div><div class="cert-name">Artificial Intelligence</div></div>
    <div class="cert-card"><div class="cert-icon"><i class="fas fa-globe"></i></div><div class="cert-name">AIESEC International</div></div>
  </div>
</section>

<!-- ===== LEADERSHIP ===== -->
<section class="leadership" id="leadership">
  <div class="section-label">Community</div>
  <h2 class="section-title">Leadership & <span>Engagement</span></h2>
  <div class="leadership-grid">
    <div class="lead-card reveal"><div class="lead-org">AIESEC in Tunisia</div><div class="lead-role">Sales VP · Data Specialist · Team Leader</div><div class="lead-desc">Managed B2B & B2C sales across Tunisia, supported 100+ international participants from 12 countries, and led global talent programs.</div></div>
    <div class="lead-card reveal"><div class="lead-org">Tunivisions of ISIMM</div><div class="lead-role">President → VP → Member</div><div class="lead-desc">Led 40 students to deliver workshops and seminars across Monastir and Tunisia.</div></div>
    <div class="lead-card reveal"><div class="lead-org">JCI Junior</div><div class="lead-role">Financial Responsible</div><div class="lead-desc">Managed cash flow and financial planning for the Junior Chamber International.</div></div>
    <div class="lead-card reveal"><div class="lead-org">Croissant Rouge</div><div class="lead-role">Local President</div><div class="lead-desc">Led social life training initiatives and community programs with the Tunisian Red Crescent.</div></div>
    <div class="lead-card reveal"><div class="lead-org">Tunisian Scout</div><div class="lead-role">Community Leader</div><div class="lead-desc">Active member and community leader in the Tunisian Scouts movement.</div></div>
    <div class="lead-card reveal"><div class="lead-org">Youth Speak Forum 2025</div><div class="lead-role">OC Sales Vice President</div><div class="lead-desc">Spearheaded B2B partnerships with local companies to fund and organize the event.</div></div>
  </div>
</section>

<!-- ===== CONTACT ===== -->
<section class="contact" id="contact">
  <div class="section-label">Get in Touch</div>
  <h2 class="section-title">Contact <span>Me</span></h2>
  <div class="contact-grid">
    <div class="reveal">
      <p class="contact-intro">Looking to collaborate on impactful projects or need a freelance web designer? Let's build something great together.</p>
      <div class="contact-item"><div class="contact-item-icon"><i class="fas fa-phone"></i></div><div><div class="contact-item-label">Phone / WhatsApp</div><div class="contact-item-value"><a href="https://wa.me/21620832737" style="color:inherit">+216 20 832 737</a></div></div></div>
      <div class="contact-item"><div class="contact-item-icon"><i class="fas fa-envelope"></i></div><div><div class="contact-item-label">Email</div><div class="contact-item-value"><a href="mailto:aljanehaythem23@gmail.com" style="color:inherit">aljanehaythem23@gmail.com</a></div></div></div>
      <div class="contact-item"><div class="contact-item-icon"><i class="fas fa-location-dot"></i></div><div><div class="contact-item-label">Location</div><div class="contact-item-value">Tataouine, Tunisia</div></div></div>
      <div class="contact-socials">
        <a href="https://www.facebook.com/haythem.aljane" class="social-link" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://github.com/haythemalj" class="social-link" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.instagram.com/haythem_alj" class="social-link" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/aljane-haythem-077713193/" class="social-link" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://wa.me/21620832737" class="social-link" target="_blank"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
    <div class="reveal">
      <form class="contact-form" id="contactForm" action="{{ route('contact.send') }}" method="POST">
        @csrf
        <div class="form-row">
          <div class="form-group"><label class="form-label">Your Name</label><input type="text" name="name" class="form-input" placeholder="John Doe" id="cName" required></div>
          <div class="form-group"><label class="form-label">Your Email</label><input type="email" name="email" class="form-input" placeholder="john@example.com" id="cEmail" required></div>
        </div>
        <div class="form-group"><label class="form-label">Subject</label><input type="text" name="subject" class="form-input" placeholder="Project Inquiry" id="cSubject" required></div>
        <div class="form-group"><label class="form-label">Message</label><textarea name="message" class="form-textarea" placeholder="Tell me about your project..." id="cMsg" required></textarea></div>
        <button type="submit" class="btn btn-primary" id="sendBtn" style="align-self:flex-start"><i class="fas fa-paper-plane"></i>Send Message</button>
        <div id="formMsg" style="font-size:.82rem;display:none;margin-top:8px"></div>
      </form>
    </div>
  </div>
</section>

<!-- ===== PROJECT MODAL ===== -->
<div class="modal" id="projectModal">
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal()" aria-label="Close"><i class="fas fa-times"></i></button>
    <h3 id="modalTitle"></h3>
    <p id="modalDesc"></p>
    <p id="modalDetails" style="font-size:.82rem"></p>
    <div class="modal-tech" id="modalTech"></div>
    <div class="modal-links" id="modalLinks"></div>
  </div>
</div>

<!-- ===== FOOTER ===== -->
<footer>
  <div class="footer-logo"><img src="{{ asset('images/profile.jpg') }}" alt="Haythem" style="height:36px;border-radius:50%"></div>
  <div class="footer-copy">© {{ date('Y') }} <span>Haythem Aljane</span> · All rights reserved · Built with ❤️ in Tunisia</div>
  <div class="footer-links">
    <a href="#hero">Home</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
  </div>
</footer>

<script>
// TYPING
const words=['Web Designer','Web Developer','UI/UX Designer','Graphic Designer','Community Manager'];
let wi=0,ci=0,del=false;
const el=document.getElementById('typed-text');
function type(){
  const w=words[wi];
  el.textContent=del?w.slice(0,ci--):w.slice(0,ci++);
  if(!del&&ci>w.length){del=true;setTimeout(type,1200);return}
  if(del&&ci<0){del=false;wi=(wi+1)%words.length;ci=0;setTimeout(type,300);return}
  setTimeout(type,del?48:88);
}
type();

// ACTIVE NAV ON SCROLL
window.addEventListener('scroll',()=>{
  document.querySelectorAll('section[id]').forEach(s=>{
    const t=s.offsetTop-120,b=t+s.offsetHeight;
    if(window.scrollY>=t&&window.scrollY<b){
      document.querySelectorAll('.nav-link').forEach(a=>{
        a.classList.toggle('active',a.dataset.section===s.id);
      });
    }
  });
});

// REVEAL
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));

// SKILL BARS
const skillObs=new IntersectionObserver(e=>{
  e.forEach(x=>{if(x.isIntersecting)x.target.querySelectorAll('.skill-fill').forEach(b=>b.style.width=b.dataset.width+'%')});
},{threshold:.25});
document.querySelectorAll('.about-right').forEach(e=>skillObs.observe(e));

// FILTER
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.cat!==f));
  });
});

// CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  const btn = document.getElementById('sendBtn');
  const formData = new FormData(this);
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;
  msg.style.display = 'none';
  try {
    const res = await fetch('{{ route('contact.send') }}', {
      method: 'POST',
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: formData
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message || 'Failed to send');
    msg.style.display = 'block';
    msg.style.color = '#4ade80';
    msg.textContent = '✓ Message sent! I will get back to you soon.';
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    btn.style.background = '#166534';
    this.reset();
  } catch (err) {
    msg.style.display = 'block';
    msg.style.color = 'var(--red)';
    msg.textContent = '⚠ ' + (err.message || 'Could not send. Check mail settings.');
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.disabled = false;
  }
});

// PROJECT MODAL
document.querySelectorAll('.project-card[data-modal]').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    const m = document.getElementById('projectModal');
    document.getElementById('modalTitle').textContent = card.dataset.title;
    document.getElementById('modalDesc').textContent = card.dataset.desc;
    document.getElementById('modalDetails').textContent = card.dataset.details || card.dataset.desc;
    const tech = document.getElementById('modalTech');
    tech.innerHTML = (card.dataset.tech || '').split(',').filter(Boolean).map(t => `<span>${t.trim()}</span>`).join('');
    const links = document.getElementById('modalLinks');
    links.innerHTML = '';
    if (card.dataset.url) links.innerHTML += `<a href="${card.dataset.url}" target="_blank" class="btn btn-primary">View Live</a>`;
    if (card.dataset.github) links.innerHTML += `<a href="${card.dataset.github}" target="_blank" class="btn btn-outline">GitHub</a>`;
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
function closeModal() {
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('projectModal').addEventListener('click', e => { if (e.target.id === 'projectModal') closeModal(); });
</script>
</body>
</html>
