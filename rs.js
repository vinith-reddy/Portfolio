document.addEventListener('DOMContentLoaded', function () {

  // Animate Logo Text on Load - Horizontal Expansion
  const logoText = document.querySelector('.logo-text');
  if (logoText) {
    logoText.style.overflow = 'hidden';
    logoText.style.whiteSpace = 'nowrap';
    logoText.style.display = 'inline-block';
    logoText.style.width = '30px';

    setTimeout(() => {
      logoText.textContent = 'Vinith Chaduvu';
      logoText.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';

      setTimeout(() => {
        logoText.style.width = '180px'; // Increased width for full name
      }, 100);

      setTimeout(() => {
        logoText.style.width = '30px';
        setTimeout(() => {
          logoText.textContent = 'VC';
        }, 1200);
      }, 3500);
    }, 800);
  }

  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Navbar Background on Scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
      } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      }
    });
  }

  // Active navigation link based on scroll position
  window.addEventListener('scroll', function () {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.project-card, .service-card, .expertise-category, .learning-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Typewriter Effect for Hero Subtitle
  const dynamicText = document.querySelector('.typewriter-dynamic');
  if (dynamicText) {
    const phrases = [
      'Building RAG Systems',
      'Fine-tuning LLMs',
      'Creating AI Agents',
      'Extracting Document Intelligence',
      'Deploying ML Solutions'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
      } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
      }
    };

    setTimeout(typeEffect, 1000);
  }

  // Typing Animation for Hero Title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 500);
  }

  // Cursor Trail Effect
  const createTrail = () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    return trail;
  };

  let trails = [];
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (trails.length < 5) {
      trails.push(createTrail());
    }

    const trail = trails.shift();
    trail.style.left = mouseX + 'px';
    trail.style.top = mouseY + 'px';
    trail.style.opacity = '1';

    setTimeout(() => {
      trail.style.opacity = '0';
    }, 100);

    trails.push(trail);
  });

  // Parallax effect for gradient orbs
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    const orb3 = document.querySelector('.orb-3');

    if (orb1) orb1.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.1}px)`;
    if (orb2) orb2.style.transform = `translate(${-scrolled * 0.1}px, ${-scrolled * 0.15}px)`;
    if (orb3) orb3.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.05}px)`;
  });

  // Magnetic Button Effect
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // Project Card Hover Effects
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Skill Pill Hover Effects
  document.querySelectorAll('.skill-pill').forEach(pill => {
    pill.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05) translateY(-2px)';
    });

    pill.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1) translateY(0)';
    });
  });

  // Resume Download Enhancement
  const resumeBtn = document.querySelector('.resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', function (e) {
      // Add download tracking or confirmation
      showNotification('Resume download started!', 'success');
    });
  }

  // Animate progress bars when they come into view
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const progressFill = entry.target.querySelector('.progress-fill');
        if (progressFill) {
          const width = progressFill.style.width;
          progressFill.style.width = '0';
          setTimeout(() => {
            progressFill.style.width = width;
          }, 100);
        }
        entry.target.dataset.animated = 'true';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.progress-bar').forEach(bar => {
    progressObserver.observe(bar);
  });

  function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 300px;
    `;
    
    // Set background color based on type
    if (type === 'success') {
      notification.style.background = '#10b981';
    } else if (type === 'error') {
      notification.style.background = '#ef4444';
    } else {
      notification.style.background = '#3b82f6';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 5000);
  }

  // Add loading animation for images
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function () {
      this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  });

  // Add scroll progress indicator
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: var(--gradient-primary);
    z-index: 10001;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });

  // Add keyboard navigation support
  document.addEventListener('keydown', function (e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
      if (navMenu && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    }
  });

  // Performance optimization: Debounce scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Apply debouncing to scroll events
  const debouncedScrollHandler = debounce(function () {
    // Scroll-based animations and effects
  }, 10);

  window.addEventListener('scroll', debouncedScrollHandler);
});
