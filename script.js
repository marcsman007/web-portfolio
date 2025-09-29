// ======================
// Hamburger toggle
// ======================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});

// ======================
// Dark mode toggle
// ======================
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');

[themeToggle, themeToggleMobile].forEach(btn => {
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
});

// ======================
// Fade-in animations with Intersection Observer
// ======================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.2 });

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ======================
// Pre-show hero and about sections to avoid flash
// ======================
window.addEventListener('DOMContentLoaded', () => {
  // Show hero and about immediately
  const immediateSections = document.querySelectorAll('#hero, #about');
  immediateSections.forEach(section => {
    section.classList.add('visible');
  });
});

// ======================
// Smooth scroll for navigation links
// ======================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu on navigation
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      hamburger.classList.remove('open');
    }
  });
});

// ======================
// Resume download notification
// ======================
document.getElementById('downloadResume').addEventListener('click', function() {
  const notification = document.getElementById('resumeNotification');
  notification.classList.remove('hidden');

  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
});
