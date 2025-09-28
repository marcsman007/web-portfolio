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
// Intersection Observer for fade-in animations
// ======================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
        // Fade in nested images or spans inside fade-in elements
        entry.target.querySelectorAll('img, span').forEach(el => el.classList.add('visible'));
      }, delay);
    }
  });
}, { threshold: 0.2 });

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

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
// Skills Section Entry Animation
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll('.skill-card');

  // Staggered fade & pop animation for each icon
  skillCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('loaded'); // Trigger the CSS transition
    }, index * 150); // staggered by 150ms per card
  });
});
