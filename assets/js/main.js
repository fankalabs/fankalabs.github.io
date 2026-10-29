// =========================================================
// Fanka Labs — scripts du site
// Les textes anglais sont dans l'objet EN ci-dessous.
// Le français est directement dans index.html.
// =========================================================

const EN = {
  "nav.mission": "Mission",
  "nav.projects": "Projects",
  "nav.team": "Team",
  "nav.contact": "Contact",

  "hero.eyebrow": "Tech startup · Guinea",
  "hero.title": "The strength to build tech that matters.",
  "hero.lead": "Fanka Labs builds useful digital solutions designed for local realities. Our first project: Karan, an education platform.",
  "hero.cta1": "Discover Karan",
  "hero.cta2": "Contact us",

  "mission.eyebrow": "Our mission",
  "mission.title": "“Fanka” means strength.",
  "mission.text": "We believe technology can give everyone more strength: to learn, to build, to grow. We create simple, accessible and lasting tools to make that happen.",
  "pillar1.title": "Education",
  "pillar1.text": "Making knowledge more accessible through digital tools.",
  "pillar2.title": "Innovation",
  "pillar2.text": "Designing products that fit local needs.",
  "pillar3.title": "Impact",
  "pillar3.text": "Creating lasting value for our communities.",

  "projects.eyebrow": "Our projects",
  "projects.title": "What we are building",
  "karan.status": "In development",
  "karan.tag": "Education platform",
  "karan.text": "Karan supports learners with content and tools designed to help them succeed. More details very soon.",
  "karan.cta": "Get notified at launch",
  "soon.title": "Next project",
  "soon.text": "More solutions are on the way. Stay tuned.",

  "team.eyebrow": "The team",
  "team.title": "Three co-founders, one shared drive",
  "team.role1": "Co-founder · [Role]",
  "team.role2": "Co-founder · [Role]",
  "team.role3": "Co-founder · [Role]",

  "contact.eyebrow": "Contact",
  "contact.title": "Let's talk about your project",
  "contact.text": "A question, a partnership, a wish to join the adventure? Write to us.",
  "contact.phone": "Phone / WhatsApp",
  "contact.location": "Location",
  "contact.city": "[City], Guinea",
  "contact.social": "Social",

  "footer.rights": "All rights reserved.",
  "footer.top": "Back to top ↑"
};

const META = {
  fr: {
    title: "Fanka Labs — La force de bâtir",
    description: "Fanka Labs est une startup technologique guinéenne qui conçoit des solutions numériques utiles, à commencer par Karan, une plateforme éducative."
  },
  en: {
    title: "Fanka Labs — The strength to build",
    description: "Fanka Labs is a Guinean tech startup building useful digital solutions, starting with Karan, an education platform."
  }
};

// ---------- Langue ----------
const nodes = document.querySelectorAll("[data-i18n]");
const FR = {};
nodes.forEach((el) => { FR[el.dataset.i18n] = el.textContent.trim(); });

function setLang(lang) {
  const dict = lang === "en" ? EN : FR;
  nodes.forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.documentElement.lang = lang;
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]').setAttribute("content", META[lang].description);
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
  try { localStorage.setItem("fanka-lang", lang); } catch (e) { /* stockage indisponible */ }
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

let initialLang = "fr";
try {
  const saved = localStorage.getItem("fanka-lang");
  if (saved === "fr" || saved === "en") initialLang = saved;
  else if ((navigator.language || "").toLowerCase().startsWith("en")) initialLang = "en";
} catch (e) { /* ignore */ }
if (initialLang !== "fr") setLang(initialLang);

// ---------- Menu mobile ----------
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});
nav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

// ---------- Année du pied de page ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Apparition au défilement ----------
const revealTargets = document.querySelectorAll(".section h2, .pillar, .project, .member, .contact-list");
if ("IntersectionObserver" in window) {
  revealTargets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach((el) => io.observe(el));
}
