@extends('layouts.portfolio-layout')
@section('content')
<style>
:root{--red:#e50000;--red-dark:#b30000;--black:#080808;--dark:#111;--card:#161616;--card2:#1c1c1c;--border:rgba(229,0,0,0.18);--text:#ddd;--muted:#666;--white:#fff;--nav-w:80px;--nav-w-exp:260px}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Outfit',sans-serif;background:var(--black);color:var(--text);overflow-x:hidden;padding-left:var(--nav-w)}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:var(--black)}::-webkit-scrollbar-thumb{background:var(--red)}
a{text-decoration:none;color:inherit}

section{padding:100px 70px;position:relative}
.section-label{font-size:.7rem;letter-spacing:.25em;text-transform:uppercase;color:var(--red);margin-bottom:12px;display:flex;align-items:center;gap:10px}
.section-label::before{content:'';width:30px;height:1px;background:var(--red)}
h2.section-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,4.5rem);color:var(--white);line-height:1;margin-bottom:60px}
h2.section-title span{color:var(--red)}

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

.certs{background:var(--black)}
.certs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px}
.cert-card{padding:22px;background:var(--card);border:1px solid rgba(255,255,255,.05);border-radius:4px;display:flex;align-items:center;gap:14px;transition:.3s}
.cert-card:hover{border-color:var(--border);transform:translateY(-3px)}
.cert-icon{width:34px;height:34px;background:rgba(229,0,0,.1);border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--red);font-size:.85rem}
.cert-name{font-size:.84rem;font-weight:600;color:var(--white);line-height:1.4}

.leadership{background:var(--dark)}
.leadership-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:18px}
.lead-card{padding:26px;background:var(--card);border:1px solid rgba(255,255,255,.05);border-radius:4px;transition:.3s;position:relative;overflow:hidden}
.lead-card::before{content:'';position:absolute;top:0;left:0;width:3px;height:0;background:var(--red);transition:height .4s}
.lead-card:hover::before{height:100%}
.lead-card:hover{border-color:var(--border);transform:translateY(-4px)}
.lead-org{font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:var(--red);margin-bottom:10px}
.lead-role{font-size:.97rem;font-weight:600;color:var(--white);margin-bottom:10px;line-height:1.4}
.lead-desc{font-size:.81rem;color:var(--muted);line-height:1.7}

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

.btn{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;font-size:.85rem;letter-spacing:.08em;font-weight:600;border-radius:2px;transition:.3s;cursor:pointer;border:none;font-family:'Outfit',sans-serif}
.btn-primary{background:var(--red);color:var(--white)}
.btn-primary:hover{background:var(--red-dark);transform:translateY(-2px);box-shadow:0 8px 30px rgba(229,0,0,.35)}
.btn-outline{background:transparent;color:var(--white);border:1px solid rgba(255,255,255,.2)}
.btn-outline:hover{border-color:var(--red);color:var(--red);transform:translateY(-2px)}

@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
.reveal{opacity:0;transform:translateY(36px);transition:opacity .7s ease,transform .7s ease}
.reveal.visible{opacity:1;transform:translateY(0)}

@media(max-width:960px){
  section{padding:80px 24px}
  .about-grid,.exp-grid,.contact-grid{grid-template-columns:1fr}
  .form-row{grid-template-columns:1fr}
}
</style>

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
      <p style="grid-column:1/-1;color:var(--muted)">No projects found. Run <code>php artisan db:seed --class=ProjectSeeder</code> to load sample data.</p>
    @endforelse
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
      <div class="contact-item"><div class="contact-item-icon"><i class="fas fa-phone"></i></div><div><div class="contact-item-label">Phone / WhatsApp</div><div class="contact-item-value">+216 20 832 737</div></div></div>
      <div class="contact-item"><div class="contact-item-icon"><i class="fas fa-envelope"></i></div><div><div class="contact-item-label">Email</div><div class="contact-item-value">aljanehaythem23@gmail.com</div></div></div>
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
      <div class="contact-form">
        <div class="form-row">
          <div class="form-group"><label class="form-label">Your Name</label><input type="text" class="form-input" placeholder="John Doe" id="cName"></div>
          <div class="form-group"><label class="form-label">Your Email</label><input type="email" class="form-input" placeholder="john@example.com" id="cEmail"></div>
        </div>
        <div class="form-group"><label class="form-label">Subject</label><input type="text" class="form-input" placeholder="Project Inquiry" id="cSubject"></div>
        <div class="form-group"><label class="form-label">Message</label><textarea class="form-textarea" placeholder="Tell me about your project..." id="cMsg"></textarea></div>
        <button class="btn btn-primary" id="sendBtn" style="align-self:flex-start" onclick="handleSend()"><i class="fas fa-paper-plane"></i>Send Message</button>
        <div id="formMsg" style="font-size:.82rem;display:none;margin-top:8px"></div>
      </div>
    </div>
  </div>
</section>

<script>
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.cat!==f));
  });
});

const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));

const skillObs=new IntersectionObserver(e=>{
  e.forEach(x=>{if(x.isIntersecting)x.target.querySelectorAll('.skill-fill').forEach(b=>b.style.width=b.dataset.width+'%')});
},{threshold:.25});
document.querySelectorAll('.about-right').forEach(e=>skillObs.observe(e));

function handleSend(){
  const n=document.getElementById('cName').value.trim(),
        e=document.getElementById('cEmail').value.trim(),
        s=document.getElementById('cSubject').value.trim(),
        m=document.getElementById('cMsg').value.trim(),
        msg=document.getElementById('formMsg'),
        btn=document.getElementById('sendBtn');
  if(!n||!e||!s||!m){msg.style.display='block';msg.style.color='var(--red)';msg.textContent='⚠ Please fill in all fields.';return}
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';btn.disabled=true;
  setTimeout(()=>{
    msg.style.display='block';msg.style.color='#4ade80';
    msg.textContent='✓ Message sent! I will get back to you soon.';
    btn.innerHTML='<i class="fas fa-check"></i> Sent!';
    btn.style.background='#166534';btn.style.cursor='default';
  },1500);
}
</script>
@endsection