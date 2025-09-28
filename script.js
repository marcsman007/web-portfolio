// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');

[themeToggle, themeToggleMobile].forEach(btn => {
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
});

// Intersection Observer for fade-in animations with stagger
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
        // Fade in nested images
        entry.target.querySelectorAll('img, span').forEach(el => el.classList.add('visible'));
      }, delay);
    }
  });
}, { threshold: 0.2 });

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scroll for navigation links
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
// Skills Section Chessboard Animation with fade-in
// ======================
const skillsGrid = document.querySelector('#skills .grid');
if (skillsGrid) {
  const skillCards = skillsGrid.querySelectorAll('.skill-card');

  // Initial state: straight line + opacity 0
  skillCards.forEach(card => {
    card.style.marginTop = '0px';
    card.style.opacity = 0;
    card.style.transition = 'all 0.7s ease';
  });

  // Fade-in stagger
  skillCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = 1;
    }, index * 150); // stagger 150ms each
  });

  // After all cards appear, apply chessboard alternation
  setTimeout(() => {
    skillCards.forEach((card, index) => {
      if (index % 2 !== 0) {
        card.style.marginTop = '150px'; // alternate vertical offset
      }
    });
  }, skillCards.length * 150 + 500); // slight delay after fade-in
}
