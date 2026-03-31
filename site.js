(() => {
  const menu = document.querySelector("[data-nav-menu]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const page = document.body.getAttribute("data-page");
  const navLinks = document.querySelectorAll("[data-page-link]");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    if (link.getAttribute("data-page-link") === page) {
      link.classList.add("active");
    }
  });

  const hashAlias = {
    "#qwen-generator": "#concept-image",
    "#qwen-editor": "#multi-image-edit",
    "#wan22": "#smart-video",
    "#digital-human": "#digital-human-video",
    "#ai-image": "#concept-image",
    "#image-edit": "#multi-image-edit",
    "#image-generate": "#smart-video",
    "#digital-human": "#digital-human-video"
  };

  if (hashAlias[window.location.hash]) {
    const next = hashAlias[window.location.hash];
    window.history.replaceState(null, "", next);
  }

  const params = new URLSearchParams(window.location.search);
  const toolId = params.get("tool");
  const map = {
    "1": "smart-video",
    "2": "multi-image-edit",
    "3": "concept-image",
    "4": "digital-human-video"
  };

  if (toolId && map[toolId]) {
    const target = document.getElementById(map[toolId]);
    if (target) {
      target.classList.add("highlight-card");
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
    }
  }
})();

function openWorkspace(toolId) {
  const value = [1, 2, 3, 4].includes(toolId) ? `?tool=${toolId}` : "";
  window.open(`http://localhost:8502${value}`, "_blank");
}
