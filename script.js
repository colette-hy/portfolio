document.getElementById("year").textContent = new Date().getFullYear();

const panels = document.querySelectorAll(".tab-panel");
const tabLinks = document.querySelectorAll(".tab-link");
const subnavBar = document.getElementById("subnav-bar");

function showTab(name) {
  panels.forEach((p) => {
    p.hidden = p.id !== name;
  });
  tabLinks.forEach((l) => {
    l.classList.toggle("active", l.dataset.tab === name);
  });
  if (subnavBar) subnavBar.hidden = name !== "work";
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function getTabFromHash() {
  const hash = window.location.hash.replace("#", "");
  const valid = ["intro", "credential", "work"];
  return valid.includes(hash) ? hash : "intro";
}

document.querySelectorAll("[data-tab]").forEach((el) => {
  el.addEventListener("click", (e) => {
    const target = el.dataset.tab;
    if (!target) return;
    e.preventDefault();
    history.pushState(null, "", "#" + target);
    showTab(target);
  });
});

window.addEventListener("popstate", () => showTab(getTabFromHash()));
showTab(getTabFromHash());

/* CASE STUDY SUB-TABS (in secondary nav bar) */
const subnavLinks = document.querySelectorAll(".subnav-link");
const subPanels = document.querySelectorAll(".subtab-panel");

function showSubtab(name) {
  subPanels.forEach((p) => {
    p.hidden = p.dataset.subpanel !== name;
  });
  subnavLinks.forEach((l) => {
    l.classList.toggle("active", l.dataset.subtab === name);
  });
}

subnavLinks.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSubtab(btn.dataset.subtab);
  });
});

