const pageSectionLinks = document.querySelectorAll("a[href^='#']");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

pageSectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;

    event.preventDefault();
    targetSection.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  });
});
