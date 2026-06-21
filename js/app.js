/**
 * app.js
 * Main application logic:
 *  - Sticky nav scroll effect
 *  - Active nav link on scroll
 *  - Mobile hamburger toggle
 *  - Scroll-reveal animations
 *  - Smooth scroll for nav links
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ── */
  const navbar = document.getElementById('navbar');
  const scrollThreshold = 40;

  function onScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
    revealElements();
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  /* ── Mobile hamburger ── */
  const hamburger = document.getElementById('nav-hamburger');
  const navLinksContainer = document.querySelector('.nav-links');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
      const isOpen = navLinksContainer.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    navLinksContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navLinksContainer.classList.remove('open');
      }
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Intersection Observer: scroll reveal ── */
  function revealElements() {
    const reveals = document.querySelectorAll('.reveal:not(.visible)');
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  // Also use IntersectionObserver as backup
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    // Observe after all renderers have run (slight delay)
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      revealElements(); // Catch elements already in view
    }, 100);
  }

  /* ── Initial calls ── */
  onScroll();
  revealElements();

  /* ── Year in footer ── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Console easter egg for fellow devs ── */
  console.log(
    '%c🤖 Abhishek Biswas — Gen AI Engineer\n%cBuilt with vanilla HTML/CSS/JS · Skeuomorphic Dark Theme\ngithub.com/AbhishekBiswas-github',
    'color:#e94560;font-size:1.2rem;font-weight:bold;',
    'color:#a8b2d8;font-size:0.85rem;'
  );
});
