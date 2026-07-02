const header = document.querySelector("[data-header]");

function syncHeaderState() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 18);
}

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });
