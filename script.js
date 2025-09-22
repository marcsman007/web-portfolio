document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     Smooth Scroll for Navigation
  ============================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ============================
     Back to Top Button
  ============================= */
  const backToTopBtn = document.createElement("button");
  backToTopBtn.textContent = "↑ Top";
  backToTopBtn.id = "backToTop";
  backToTopBtn.style.display = "none";
  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ============================
     Dark / Light Mode Toggle
  ============================= */
  const themeToggle = document.createElement("button");
  themeToggle.id = "themeToggle";
  themeToggle.textContent = "🌙 Dark Mode";
  document.body.appendChild(themeToggle);

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
  }

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  /* ============================
     Copy Email to Clipboard
  ============================= */
  const emailSpan = document.querySelector("#email");
  const copyBtn = document.querySelector("#copyEmail");

  if (emailSpan && copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(emailSpan.textContent)
        .then(() => {
          copyBtn.textContent = "Copied!";
          setTimeout(() => (copyBtn.textContent = "Copy Email"), 1500);
        })
        .catch(err => alert("Failed to copy email: " + err));
    });
  }

  /* ============================
     Fade-in Animation on Scroll
  ============================= */
  const fadeElements = document.querySelectorAll("section, header, footer, div");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  fadeElements.forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

});
