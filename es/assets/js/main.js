/* ==================================
   LISTIO main.js (from zero)
   - Mobile drawer menu (overlay)
   - Fixes anchor links on /blog/*
   - Close on ESC / overlay / link click
   ================================== */

(function () {
  const btn = document.querySelector('[data-mobile-toggle]');
  const menuMount = document.getElementById('mobileMenu');

  if (!btn || !menuMount) return;

  // Ensure hamburger middle bar exists (no HTML change required)
  if (!btn.querySelector('.hamburger-mid')) {
    const mid = document.createElement('span');
    mid.className = 'hamburger-mid';
    mid.setAttribute('aria-hidden', 'true');
    btn.appendChild(mid);
  }

  // Fix anchors for blog pages: "#faq" -> "/#faq"
  // (so you don't need to change the HTML if you don't want)
  const isBlog = window.location.pathname.includes('/blog/');
  if (isBlog) {
    menuMount.querySelectorAll('a[href^="#"]').forEach((a) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) a.setAttribute('href', '/' + href);
    });
  }

  // Build overlay + drawer and move menu content into it
  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';

  const drawer = document.createElement('aside');
  drawer.className = 'mobile-drawer';
  drawer.setAttribute('aria-hidden', 'true');

  // Move all current children into drawer
  while (menuMount.firstChild) {
    drawer.appendChild(menuMount.firstChild);
  }

  // Mount overlay + drawer inside the existing #mobileMenu (keeps your structure)
  menuMount.appendChild(overlay);
  menuMount.appendChild(drawer);

  function openMenu() {
    document.body.classList.add('mobile-nav-open');
    btn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    document.body.classList.remove('mobile-nav-open');
    btn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }

  btn.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('mobile-nav-open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  drawer.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Safety: close if resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });
})();
(function () {
  const btn = document.querySelector('[data-mobile-toggle]');
  const menuMount = document.getElementById('mobileMenu');
  if (!btn || !menuMount) return;

  // Guard: evita montar duas vezes
  if (menuMount.dataset.mounted === "true") return;
  menuMount.dataset.mounted = "true";

  // Garante a barrinha do meio do hamburger
  if (!btn.querySelector('.hamburger-mid')) {
    const mid = document.createElement('span');
    mid.className = 'hamburger-mid';
    mid.setAttribute('aria-hidden', 'true');
    btn.appendChild(mid);
  }

  // Corrige anchors no blog (#faq -> /#faq)
  const isBlog = window.location.pathname.includes('/blog/');
  if (isBlog) {
    menuMount.querySelectorAll('a[href^="#"]').forEach((a) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) a.setAttribute('href', '/' + href);
    });
  }

  // Monta overlay + drawer
  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';

  const drawer = document.createElement('aside');
  drawer.className = 'mobile-drawer';
  drawer.setAttribute('aria-hidden', 'true');

  // Move conteúdo do menu para dentro do drawer
  while (menuMount.firstChild) {
    drawer.appendChild(menuMount.firstChild);
  }

  // Insere overlay + drawer no mount
  menuMount.appendChild(overlay);
  menuMount.appendChild(drawer);

  function openMenu() {
    document.body.classList.add('mobile-nav-open');
    btn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    document.body.classList.remove('mobile-nav-open');
    btn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }

  btn.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('mobile-nav-open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  drawer.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });
})();
(function () {
  const btn = document.querySelector('[data-mobile-toggle]');
  const mount = document.getElementById('mobileMenu');

  if (!btn || !mount) return;

  // Guard para não montar duas vezes
  if (mount.dataset.mounted === "true") return;
  mount.dataset.mounted = "true";

  // hamburger mid (se não existir)
  if (!btn.querySelector('.hamburger-mid')) {
    const mid = document.createElement('span');
    mid.className = 'hamburger-mid';
    mid.setAttribute('aria-hidden', 'true');
    btn.appendChild(mid);
  }

  // Corrige anchors dentro do blog
  const isBlog = location.pathname.includes('/blog/');
  if (isBlog) {
    mount.querySelectorAll('a[href^="#"]').forEach((a) => {
      const href = a.getAttribute('href');
      if (href) a.setAttribute('href', '/' + href);
    });
  }

  // cria overlay e drawer
  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';

  const drawer = document.createElement('aside');
  drawer.className = 'mobile-drawer';
  drawer.setAttribute('aria-hidden', 'true');

  // move conteúdo para drawer
  while (mount.firstChild) drawer.appendChild(mount.firstChild);

  // monta
  mount.appendChild(overlay);
  mount.appendChild(drawer);

  function openMenu() {
    document.body.classList.add('mobile-nav-open');
    btn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    document.body.classList.remove('mobile-nav-open');
    btn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = document.body.classList.contains('mobile-nav-open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  drawer.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });
})();
