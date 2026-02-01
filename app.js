// Mobile nav
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu on link click (mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Formspree AJAX helper
async function wireForm(formId, statusId) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (status) status.textContent = "Sending...";

    try {
      const data = new FormData(form);

      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        // Redirect to thanks page
        window.location.href = "thanks.html";
        return;
      }

      const json = await res.json().catch(() => null);
      if (status) status.textContent = json?.error || "Something went wrong. Please try again.";
    } catch (err) {
      if (status) status.textContent = "Network error. Please try again.";
    }
    // Luxury-style header shadow on scroll
// Luxury-style header shadow on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});


  });
}

wireForm("leadForm", "leadStatus");
wireForm("contactForm", "contactStatus");
