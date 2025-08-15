// Smooth scroll for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "↑ Top";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark/Light Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Toggle Theme";
toggleBtn.id = "themeToggle";
document.body.appendChild(toggleBtn);

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle and save theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Email Copy to Clipboard
const emailSpan = document.querySelector("#email");
const copyBtn = document.querySelector("#copyEmail");

if (emailSpan && copyBtn) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(emailSpan.textContent)
      .then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy Email"), 1500);
      })
      .catch(err => {
        alert("Failed to copy email: " + err);
      });
  });
}


