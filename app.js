// Renders the current tour's header, RSVP buttons, and stop cards
// using data/current-tour.js + data/stops.js. No build step needed —
// just edit the data files and reload.

const LANTERN_SVG = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3">
    <path d="M12 2v3M9 5h6l1.5 3h-9L9 5z"/>
    <path d="M7.5 8h9l-1 10.5a2 2 0 0 1-2 1.8h-3a2 2 0 0 1-2-1.8L7.5 8z"/>
    <path d="M12 11v6M9.5 21h5"/>
  </svg>`;

function placeholderCard(filename, label) {
  return `
    <div class="stop-placeholder">
      ${LANTERN_SVG}
      <span>${label || 'Photo needed'}</span>
      <span class="fname">images/${filename}</span>
    </div>`;
}

function renderHero() {
  const img = document.getElementById('hero-image');
  img.src = `images/${TOUR_INFO.headerImage}`;
  img.alt = TOUR_INFO.headerImageAlt;
  document.title = `${TOUR_INFO.tourName} — SLC Walking Ghost Tour`;
}

function renderRsvpButtons() {
  const spots = document.querySelectorAll('[data-rsvp]');
  spots.forEach((el) => {
    if (RSVP_URL) {
      el.innerHTML = `<a class="btn btn-lantern" href="${RSVP_URL}" target="_blank" rel="noopener">RSVP for the ${TOUR_INFO.tourName}</a>`;
    } else {
      el.innerHTML = `
        <span class="btn btn-ghost" aria-disabled="true">
          <span class="flicker">&#9670;</span> RSVP opens soon
        </span>`;
    }
  });
}

function renderRouteInfo() {
  const el = document.getElementById('route-info');
  el.textContent = `${TOUR_INFO.date} · ${TOUR_INFO.time} · ${TOUR_INFO.meetingSpot}`;
}

function renderStops() {
  const grid = document.getElementById('stops-grid');
  grid.innerHTML = '';
  TOUR_STOP_SLUGS.forEach((slug, i) => {
    const stop = STOPS[slug];
    if (!stop) {
      console.warn(`No stop found in data/stops.js for slug "${slug}"`);
      return;
    }
    const card = document.createElement('article');
    card.className = 'stop-card';
    card.innerHTML = `
      <span class="stop-number">${i + 1}</span>
      <div class="stop-photo">
        <img src="images/${stop.image}" alt="${stop.title}" loading="lazy">
      </div>
      <div class="stop-body">
        <div class="stop-neighborhood">${stop.neighborhood}</div>
        <h3>${stop.title}</h3>
        <p>${stop.blurb}</p>
      </div>`;
    grid.appendChild(card);
    const photoWrap = card.querySelector('.stop-photo');
    const img = photoWrap.querySelector('img');
    img.addEventListener('error', () => {
      photoWrap.innerHTML = placeholderCard(stop.image);
    });
  });
}

function openLightbox(src, alt) {
  let overlay = document.getElementById('lightbox');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'lightbox';
    overlay.innerHTML = '<img id="lightbox-img" src="" alt="">';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  }
  overlay.querySelector('#lightbox-img').src = src;
  overlay.querySelector('#lightbox-img').alt = alt;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const years = [
    { year: '2025 — Haunted State Street', file: 'gallery/2025-01.jpg' },
    { year: '2025 — Haunted State Street', file: 'gallery/2025-02.jpg' },
    { year: '2024 — Haunted South Temple', file: 'gallery/2024-01.jpg' },
    { year: '2024 — Haunted South Temple', file: 'gallery/2024-02.jpg' },
    { year: '2023 — Salt Lake City Cemetery', file: 'gallery/2023-01.jpg' },
    { year: '2022 — Haunted SLC History', file: 'gallery/2022-01.jpg' },
    { year: '2021 — Haunted Downtown', file: 'gallery/2021-01.jpg' },
    { year: '2020 — The First Tour', file: 'gallery/2020-01.jpg' }
  ];
  grid.innerHTML = '';
  years.forEach(({ year, file }) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.innerHTML = `
      <img src="images/${file}" alt="${year}" loading="lazy">
      <div class="gallery-year">${year}</div>`;
    grid.appendChild(card);
    const img = card.querySelector('img');
    img.addEventListener('error', () => {
      img.outerHTML = placeholderCard(file, 'Photo needed');
    });
    img.addEventListener('load', () => {
      card.style.cursor = 'zoom-in';
      card.addEventListener('click', () => openLightbox(img.src, year));
    });
  });
}

renderHero();
renderRsvpButtons();
renderRouteInfo();
renderStops();
renderGallery();
