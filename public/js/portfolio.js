// Portfolio JavaScript - Interactivity and animations

document.addEventListener('DOMContentLoaded', function () {
  // Typing animation
  const typedText = document.getElementById('typed-text');
  const phrases = [
    'Freelance Developer',
    'UI/UX Designer',
    'Full Stack Developer',
    'Problem Solver'
  ];
  let phraseIndex = 0;
  let charIndex = 0;

  function typePhrase() {
    const currentPhrase = phrases[phraseIndex];
    
    if (charIndex < currentPhrase.length) {
      typedText.textContent += currentPhrase[charIndex];
      charIndex++;
      setTimeout(typePhrase, 100);
    } else {
      setTimeout(erasePhrase, 2000);
    }
  }

  function erasePhrase() {
    const currentPhrase = phrases[phraseIndex];
    
    if (charIndex > 0) {
      typedText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erasePhrase, 50);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typePhrase, 500);
    }
  }

  typePhrase();

  // Smooth scroll to sections
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      const element = document.getElementById(section);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Update active nav link
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Scroll to section function for footer links
  window.scrollToSection = function (sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Update active nav link
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
          link.classList.add('active');
        }
      });
    }
  };

  // Highlight active section on scroll
  window.addEventListener('scroll', function () {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  });

  // Reveal animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-fill');
  const skillObserverOptions = {
    threshold: 0.5
  };

  const skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        skillObserver.unobserve(entry.target);
      }
    });
  }, skillObserverOptions);

  skillBars.forEach(bar => {
    skillObserver.observe(bar);
  });

  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Show success message
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i>Message Sent!';
      btn.disabled = true;
      
      // Reset after 3 seconds
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        this.reset();
      }, 3000);
      
      // Log form data (in production, send to server)
      console.log('Form submitted:', data);
    });
  }

  // Mobile menu toggle
  const navMobToggle = document.querySelector('.nav-mob-toggle');
  const leftnav = document.getElementById('leftnav');
  
  if (navMobToggle) {
    navMobToggle.addEventListener('click', function () {
      leftnav.classList.toggle('active');
    });
  }

  // Close mobile menu when link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      if (leftnav) {
        leftnav.classList.remove('active');
      }
    });
  });
});
