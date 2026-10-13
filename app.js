// Builds the page from content.js. You shouldn't need to edit this file.
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const HUES = { Environment: 200, Props: 28, Materials: 280, Blueprints: 150, Game: 350 };

  function placeholder(p) {
    const h = HUES[p.category] ?? 210;
    return `<div class="ph" style="background:
      radial-gradient(circle at 30% 30%, hsl(${h} 60% 30%), transparent 60%),
      linear-gradient(135deg, hsl(${h} 40% 14%), hsl(${(h + 40) % 360} 35% 8%))">${esc(p.category)}</div>`;
  }
  const media = (p) => (p.cover ? `<img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy">` : placeholder(p));

  // --- static text ---
  document.title = `${SITE.name} — ${SITE.role}`;
  $("brand").textContent = SITE.name;
  $("hero-name").textContent = SITE.name;
  $("hero-role").textContent = SITE.role;
  $("hero-tagline").textContent = SITE.tagline;
  if (!SITE.available) $("badge").style.display = "none";
  $("about-text").innerHTML = SITE.about.map((t) => `<p>${esc(t)}</p>`).join("");
  $("skills").innerHTML = SITE.skills.map((s) => `<li>${esc(s)}</li>`).join("");
  $("email").textContent = SITE.email;
  $("email").href = `mailto:${SITE.email}`;
  $("contact-location").textContent = SITE.location;
  $("footer").textContent = `© ${new Date().getFullYear()} ${SITE.name} · ${SITE.location}`;

  const LABELS = { artstation: "ArtStation", fab: "Fab store", github: "GitHub", youtube: "YouTube", linkedin: "LinkedIn", cv: "CV" };
  $("links").innerHTML = Object.entries(SITE.links)
    .filter(([, url]) => url)
    .map(([k, url]) => `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">${LABELS[k] || k}</a>`)
    .join("");

  // --- cards ---
  function card(p, i, showPrice) {
    return `<button class="card" data-i="${i}">
      <div class="thumb">${media(p)}
        <span class="tag">${esc(p.category)}</span>
        ${p.placeholder ? '<span class="tag wip">WIP</span>' : ""}
      </div>
      <div class="card-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${showPrice && p.price ? `<p class="price">${esc(p.price)}</p>` : ""}
      </div>
    </button>`;
  }

  let filter = "All";
  function renderWork() {
    const list = PROJECTS.map((p, i) => [p, i]).filter(([p]) => filter === "All" || p.category === filter);
    $("cards").innerHTML = list.map(([p, i]) => card(p, i)).join("");
  }
  const cats = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  $("filters").innerHTML = cats.map((c) => `<button data-c="${esc(c)}" class="${c === "All" ? "on" : ""}">${esc(c)}</button>`).join("");
  $("filters").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    filter = b.dataset.c;
    [...$("filters").children].forEach((x) => x.classList.toggle("on", x === b));
    renderWork();
  });
  renderWork();

  const forSale = PROJECTS.map((p, i) => [p, i]).filter(([p]) => p.fab);
  $("store-cards").innerHTML = forSale.map(([p, i]) => card(p, i, true)).join("");
  // Hide the store section and its nav link until something is listed on Fab.
  if (!forSale.length) { $("store").style.display = "none"; $("store-link").style.display = "none"; }

  // --- modal ---
  const modal = $("modal");
  function open(i) {
    const p = PROJECTS[i];
    const top = p.clip
      ? `<video src="${esc(p.clip)}" poster="${esc(p.cover)}" autoplay loop muted playsinline controls></video>`
      : p.video
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(p.video)}" allowfullscreen title="${esc(p.title)}"></iframe>`
      : media(p);
    $("modal-body").innerHTML = `
      <div class="m-media">${top}</div>
      <div class="m-body">
        <h2>${esc(p.title)}</h2>
        <div class="m-meta">${esc(p.category)} · ${esc(p.year)} · ${(p.tools || []).map(esc).join(", ")}</div>
        <p>${esc(p.description)}</p>
        ${p.fab ? `<a class="btn primary" href="${esc(p.fab)}" target="_blank" rel="noopener">Get it on Fab${p.price ? " — " + esc(p.price) : ""}</a>` : ""}
        ${(p.gallery || []).length ? `<div class="m-gallery">${p.gallery.map((g) => `<a href="${esc(g)}" target="_blank"><img src="${esc(g)}" alt="" loading="lazy"></a>`).join("")}</div>` : ""}
      </div>`;
    modal.showModal();
  }
  document.addEventListener("click", (e) => {
    const c = e.target.closest(".card");
    if (c) open(+c.dataset.i);
  });
  $("close").onclick = () => modal.close();
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", () => ($("modal-body").innerHTML = "")); // stops video playing
})();
