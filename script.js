const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href*='#']");
  if (!link) return;

  const url = new URL(link.href, window.location.href);
  const samePage =
    url.origin === window.location.origin &&
    url.pathname === window.location.pathname;

  if (!samePage || !url.hash || url.hash === "#") return;

  const targetSection = document.querySelector(url.hash);
  if (!targetSection) return;

  event.preventDefault();

  const navOffset =
    Number.parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--nav-height"),
      10
    ) || 0;
  const targetY = targetSection.getBoundingClientRect().top + window.scrollY - navOffset;

  window.scrollTo({
    top: targetY,
    behavior: reduceMotion ? "auto" : "smooth",
  });
  history.replaceState(null, "", url.hash);
});
