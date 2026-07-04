const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const bookingForm = document.querySelector(".booking-form");
const revealTargets = document.querySelectorAll(".reveal, .reveal-item");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-solid", window.scrollY > 8);
};

const closeMenu = () => {
  if (!menuButton || !siteNav) return;
  siteNav.classList.remove("is-open");
  document.body.classList.remove("is-locked");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "メニューを開く");
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    document.body.classList.toggle("is-locked", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const group = entry.target.parentElement?.querySelectorAll(".reveal-item");
      if (entry.target.classList.contains("reveal-item") && group) {
        const index = Array.from(group).indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.max(index, 0) * 80}ms`;
      }
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = bookingForm.querySelector(".form-status");
    if (!status) return;
    status.textContent = "相談内容を確認しました。現在はInstagram DMからのご相談をお願いします。";
  });
}
