const projectsLink = document.querySelector("a[href='#projects']");
if (projectsLink) {
  projectsLink.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
}
