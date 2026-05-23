@extends('layouts.app')

@section('title', 'Haythem Aljane | Web Designer & Developer')

@section('content')
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<link rel="stylesheet" href="{{ asset('css/portfolio.css') }}">

<!-- ===== LEFT SIDEBAR NAV ===== -->
<aside class="leftnav" id="leftnav">
  <div class="nav-logo-wrap">
    <img class="nav-logo-img" src="data:image/jpeg;base64,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" alt="AH">
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
    <a href="#design" class="nav-link" data-section="design">
      <i class="fas fa-palette"></i><span class="nav-label">Design</span>
    </a>
    <a href="#certs" class="nav-link" data-section="certs">
      <i class="fas fa-certificate"></i><span class="nav-label">Certificates</span>
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
      <p class="hero-desc">Freelance Developer & UI/UX Designer from Tataouine, Tunisia — specializing in creating responsive, user-centered web applications with modern technologies and beautiful design.</p>
      <div class="hero-btns">
        <a href="#contact" class="btn btn-primary"><i class="fas fa-paper-plane"></i>Get in Touch</a>
        <a href="http://aljane.kesug.com/cv%20haythem/cv.pdf" target="_blank" class="btn btn-outline"><i class="fas fa-download"></i>Download CV</a>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><h3>3+</h3><p>Years of Experience</p></div>
        <div class="hero-stat"><h3>10+</h3><p>Projects Delivered</p></div>
        <div class="hero-stat"><h3>100%</h3><p>Client Satisfaction</p></div>
        <div class="hero-stat"><h3>5</h3><p>Technologies</p></div>
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

<!-- ===== ABOUT ===== -->
<section class="about" id="about">
  <div class="section-label">Who I Am</div>
  <h2 class="section-title">About <span>Me</span></h2>
  <div class="about-grid">
    <div class="about-text reveal">
      <p>I'm a passionate <strong>Freelance Developer</strong> and <strong>UI/UX Designer</strong> with extensive experience in crafting digital solutions that combine technical excellence with beautiful design. My expertise spans full-stack web development and user-centered design principles.</p>
      <p>Over the years, I've worked on diverse projects including e-commerce platforms, enterprise applications, and community-driven platforms. I'm dedicated to delivering high-quality solutions that exceed client expectations and provide excellent user experiences.</p>
      <div class="about-info-grid">
        <div class="about-info-item">
          <div class="label">Location</div>
          <div class="value">Tataouine, Tunisia</div>
        </div>
        <div class="about-info-item">
          <div class="label">Experience</div>
          <div class="value">3+ Years</div>
        </div>
        <div class="about-info-item">
          <div class="label">Projects</div>
          <div class="value">10+</div>
        </div>
        <div class="about-info-item">
          <div class="label">Specialties</div>
          <div class="value">Web Dev & UI/UX</div>
        </div>
      </div>
    </div>
    <div class="about-skills reveal">
      <div class="skills-title">Technical Expertise</div>
      <div class="skill-bar-wrap">
        <div class="skill-bar-top">
          <span class="skill-name">Full Stack Web Development</span>
          <span class="skill-pct">95%</span>
        </div>
        <div class="skill-track"><div class="skill-fill" style="width:95%"></div></div>
      </div>
      <div class="skill-bar-wrap">
        <div class="skill-bar-top">
          <span class="skill-name">UI/UX Design</span>
          <span class="skill-pct">90%</span>
        </div>
        <div class="skill-track"><div class="skill-fill" style="width:90%"></div></div>
      </div>
      <div class="skill-bar-wrap">
        <div class="skill-bar-top">
          <span class="skill-name">Laravel & PHP</span>
          <span class="skill-pct">92%</span>
        </div>
        <div class="skill-track"><div class="skill-fill" style="width:92%"></div></div>
      </div>
      <div class="skill-bar-wrap">
        <div class="skill-bar-top">
          <span class="skill-name">React & Vue.js</span>
          <span class="skill-pct">85%</span>
        </div>
        <div class="skill-track"><div class="skill-fill" style="width:85%"></div></div>
      </div>
      <div class="skill-bar-wrap">
        <div class="skill-bar-top">
          <span class="skill-name">UI Design (Figma/Adobe XD)</span>
          <span class="skill-pct">88%</span>
        </div>
        <div class="skill-track"><div class="skill-fill" style="width:88%"></div></div>
      </div>
      <div class="tech-tags">
        <span class="tech-tag">Laravel</span>
        <span class="tech-tag">PHP</span>
        <span class="tech-tag">React</span>
        <span class="tech-tag">Vue.js</span>
        <span class="tech-tag">MySQL</span>
        <span class="tech-tag">Figma</span>
        <span class="tech-tag">UI/UX</span>
        <span class="tech-tag">Responsive Design</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== EXPERIENCE ===== -->
<section class="experience" id="experience">
  <div class="section-label">Work History</div>
  <h2 class="section-title">Experience & <span>Education</span></h2>
  <div class="exp-grid">
    <div class="exp-col reveal">
      <div class="exp-col-title"><i class="fas fa-briefcase"></i>Professional Experience</div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="tl-date">2023 - Present</div>
          <div class="tl-title">Freelance Developer & Designer</div>
          <div class="tl-org">Self-Employed</div>
          <div class="tl-desc">Designing and developing custom web applications using Laravel, React, and modern web technologies. Specializing in both full-stack development and UI/UX design.</div>
        </div>
        <div class="timeline-item">
          <div class="tl-date">2021 - 2023</div>
          <div class="tl-title">Web Developer</div>
          <div class="tl-org">Digital Projects</div>
          <div class="tl-desc">Developed responsive web applications, collaborated with design teams, and worked on e-commerce solutions and enterprise platforms.</div>
        </div>
      </div>
    </div>
    <div class="exp-col reveal">
      <div class="exp-col-title"><i class="fas fa-graduation-cap"></i>Education</div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="tl-date">2020 - 2023</div>
          <div class="tl-title">Bachelor in Information Technology</div>
          <div class="tl-org">University of Gabes, Tunisia</div>
          <div class="tl-desc">Comprehensive study of software development, databases, and network systems.</div>
        </div>
        <div class="timeline-item">
          <div class="tl-date">2018 - 2020</div>
          <div class="tl-title">Technical Diploma in Web Development</div>
          <div class="tl-org">Technical Institute, Tunisia</div>
          <div class="tl-desc">Focused on web technologies, programming fundamentals, and practical project work.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== PROJECTS ===== -->
<section class="projects" id="projects">
  <div class="section-label">My Work</div>
  <h2 class="section-title">Featured <span>Projects</span></h2>
  
  <div class="projects-grid reveal">
    <div class="project-card">
      <div class="project-thumb">
        <i class="fas fa-shopping-bag"></i>
        <span class="project-thumb-label">Web App</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">Visinova</h3>
        <p class="project-desc">A modern Laravel + React web application with Tailwind CSS. Features Inertia.js integration for seamless frontend-backend communication. Built with responsive design principles.</p>
        <div class="project-tech">
          <span>Laravel</span>
          <span>React</span>
          <span>Tailwind</span>
          <span>Inertia.js</span>
        </div>
        <a href="http://localhost:8000" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-thumb">
        <i class="fas fa-utensils"></i>
        <span class="project-thumb-label">Website</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">Chin Chin - Ice Cream Website</h3>
        <p class="project-desc">A sleek and fully responsive ice cream website. Built with Bootstrap, HTML5, CSS3, and JavaScript. Features smooth scrolling, responsive gallery, and modern UI design.</p>
        <div class="project-tech">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Bootstrap</span>
          <span>JavaScript</span>
        </div>
        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-thumb">
        <i class="fas fa-fire"></i>
        <span class="project-thumb-label">Restaurant</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">Smoke House - Restaurant Website</h3>
        <p class="project-desc">A fully responsive restaurant website with modern design. Built with HTML, CSS, and JavaScript. Includes menu showcase, reservation system, and contact integration.</p>
        <div class="project-tech">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>Responsive</span>
        </div>
        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-thumb">
        <i class="fas fa-bed"></i>
        <span class="project-thumb-label">Hotel</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">Maison d'Hôte - Guest House Website</h3>
        <p class="project-desc">Beautiful guest house website featuring accommodation showcase, gallery, and booking system. Built with Bootstrap 4, HTML, CSS, and responsive design.</p>
        <div class="project-tech">
          <span>HTML5</span>
          <span>Bootstrap 4</span>
          <span>CSS3</span>
          <span>PHP</span>
        </div>
        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-thumb">
        <i class="fas fa-sushi"></i>
        <span class="project-thumb-label">Food</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">Sushi by Shkiri</h3>
        <p class="project-desc">Modern sushi restaurant website with interactive menu, ordering system, and delivery integration. Built with HTML5, CSS3, and JavaScript for smooth user experience.</p>
        <div class="project-tech">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>Responsive</span>
        </div>
        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-thumb">
        <i class="fas fa-car"></i>
        <span class="project-thumb-label">E-Commerce</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">Makhlouf Rent Car</h3>
        <p class="project-desc">Car rental website with vehicle management, booking system, and customer dashboard. Features search, filtering, and reservation capabilities for seamless car rental experience.</p>
        <div class="project-tech">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>WordPress</span>
        </div>
        <a href="#" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
</section>

<!-- ===== DESIGN WORK ===== -->
<section class="projects" id="design">
  <div class="section-label">Creative Work</div>
  <h2 class="section-title">Design & <span>Graphics</span></h2>
  
  <div class="projects-grid reveal">
    <div class="project-card">
      <div class="project-thumb">
        <i class="fas fa-palette"></i>
        <span class="project-thumb-label">Graphics</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">Infographie & Visual Design</h3>
        <p class="project-desc">Creative infographic designs and visual communications. Includes data visualization, marketing materials, and digital assets created in Adobe Creative Suite.</p>
        <div class="project-tech">
          <span>Photoshop</span>
          <span>Illustrator</span>
          <span>Design</span>
          <span>Infographics</span>
        </div>
        <a href="#" class="project-link">View Portfolio <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-thumb">
        <i class="fas fa-pen-nib"></i>
        <span class="project-thumb-label">Branding</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">Charte Graphique & Brand Identity</h3>
        <p class="project-desc">Complete brand identity systems including logos, color palettes, typography guidelines, and brand style guides for multiple clients and businesses.</p>
        <div class="project-tech">
          <span>Logo Design</span>
          <span>Branding</span>
          <span>Illustrator</span>
          <span>Brand Guidelines</span>
        </div>
        <a href="#" class="project-link">View Portfolio <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-thumb">
        <i class="fas fa-film"></i>
        <span class="project-thumb-label">Motion</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">Motion Graphics & Animation</h3>
        <p class="project-desc">Dynamic motion graphics and animations for web and video. Created using After Effects for promotional videos, intro sequences, and interactive animations.</p>
        <div class="project-tech">
          <span>After Effects</span>
          <span>Animation</span>
          <span>Motion Design</span>
          <span>Video</span>
        </div>
        <a href="#" class="project-link">View Portfolio <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
</section>

<!-- ===== CERTIFICATES ===== -->
<section class="certs" id="certs">
  <div class="section-label">Achievements</div>
  <h2 class="section-title">Certificates & <span>Awards</span></h2>
  <div class="certs-grid reveal">
    <div class="cert-card">
      <div class="cert-icon"><i class="fas fa-award"></i></div>
      <div class="cert-name">Full Stack Web Development Certification</div>
    </div>
    <div class="cert-card">
      <div class="cert-icon"><i class="fas fa-award"></i></div>
      <div class="cert-name">UI/UX Design Fundamentals</div>
    </div>
    <div class="cert-card">
      <div class="cert-icon"><i class="fas fa-award"></i></div>
      <div class="cert-name">Advanced Laravel Development</div>
    </div>
    <div class="cert-card">
      <div class="cert-icon"><i class="fas fa-award"></i></div>
      <div class="cert-name">Responsive Web Design Professional</div>
    </div>
  </div>
</section>

<!-- ===== LEADERSHIP ===== -->
<section class="leadership" id="leadership">
  <div class="section-label">Community Impact</div>
  <h2 class="section-title">Leadership & <span>Roles</span></h2>
  <div class="leadership-grid reveal">
    <div class="lead-card">
      <div class="lead-org">Freelance</div>
      <div class="lead-role">Full Stack Developer & Designer</div>
      <div class="lead-desc">Leading design and development of multiple projects, managing client relationships, and delivering high-quality solutions tailored to specific business needs.</div>
    </div>
    <div class="lead-card">
      <div class="lead-org">Project Management</div>
      <div class="lead-role">Technical Lead</div>
      <div class="lead-desc">Overseeing project architecture, code quality, and technology decisions. Mentoring junior developers and ensuring project timelines and deliverables.</div>
    </div>
    <div class="lead-card">
      <div class="lead-org">Design & UX</div>
      <div class="lead-role">UI/UX Designer</div>
      <div class="lead-desc">Creating intuitive user interfaces, conducting user research, and implementing design systems. Ensuring accessibility and user-centered design principles.</div>
    </div>
  </div>
</section>

<!-- ===== CONTACT ===== -->
<section class="contact" id="contact">
  <div class="section-label">Get In Touch</div>
  <h2 class="section-title">Contact <span>Me</span></h2>
  <div class="contact-grid">
    <div class="contact-info reveal">
      <p class="contact-intro">Have a project in mind or want to collaborate? I'd love to hear from you! Whether it's a web development project, UI/UX design, or something else, feel free to reach out.</p>
      
      <div class="contact-item">
        <div class="contact-item-icon"><i class="fas fa-envelope"></i></div>
        <div>
          <div class="contact-item-label">Email</div>
          <div class="contact-item-value">haythem.aljane@gmail.com</div>
        </div>
      </div>

      <div class="contact-item">
        <div class="contact-item-icon"><i class="fas fa-phone"></i></div>
        <div>
          <div class="contact-item-label">Phone</div>
          <div class="contact-item-value">+216 20 832 737</div>
        </div>
      </div>

      <div class="contact-item">
        <div class="contact-item-icon"><i class="fas fa-map-marker-alt"></i></div>
        <div>
          <div class="contact-item-label">Location</div>
          <div class="contact-item-value">Tataouine, Tunisia</div>
        </div>
      </div>

      <div class="contact-socials">
        <a href="https://www.linkedin.com/in/aljane-haythem-077713193/" target="_blank" class="social-link" title="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/haythemalj" target="_blank" class="social-link" title="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://wa.me/21620832737" target="_blank" class="social-link" title="WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:haythem.aljane@gmail.com" class="social-link" title="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>

    <form class="contact-form reveal">
      @csrf
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Your Name</label>
          <input type="text" class="form-input" name="name" required>
        </div>
        <div class="form-group">
          <label class="form-label">Your Email</label>
          <input type="email" class="form-input" name="email" required>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Subject</label>
        <input type="text" class="form-input" name="subject" required>
      </div>
      <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="form-textarea" name="message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send Message <i class="fas fa-paper-plane"></i></button>
    </form>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer>
  <div class="footer-logo">
    <span style="color: var(--red); font-weight: bold;">© 2025 Haythem Aljane</span>
  </div>
  <div class="footer-copy">
    Designed & Developed with <span>❤️</span> in Tunisia
  </div>
  <div class="footer-links">
    <a href="#" onclick="scrollToSection('hero'); return false;">Home</a>
    <a href="#" onclick="scrollToSection('about'); return false;">About</a>
    <a href="#" onclick="scrollToSection('projects'); return false;">Projects</a>
    <a href="#" onclick="scrollToSection('contact'); return false;">Contact</a>
  </div>
</footer>

<script src="{{ asset('js/portfolio.js') }}"></script>
@endsection
