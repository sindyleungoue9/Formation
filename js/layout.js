// ── Shared layout ─────────────────────────────────────────────────────────────
const NAV_HTML = `
<nav class="navbar-bootcamp">
  <div class="container">
    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="brand">GÉNIE<span>LOGICIEL</span></a>
      <button class="navbar-toggler d-md-none border-0 bg-transparent text-white p-0"
              type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span style="font-size:1.5rem">☰</span>
      </button>
      <div class="collapse navbar-collapse d-md-flex align-items-center gap-1" id="navMenu">
        <a href="index.html" class="nav-link">Accueil</a>
        <a href="formations.html" class="nav-link">Formations</a>
        <a href="tarifs.html" class="nav-link">Tarifs</a>
        <a href="admission.html" class="nav-link">Admission</a>
        <a href="admission.html" class="nav-link btn-nav ms-2">S'inscrire</a>
      </div>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="row align-items-start g-4">
      <div class="col-md-4">
        <div class="brand mb-2">GÉNIE<span>LOGICIEL</span></div>
        <p style="font-size:.85rem;max-width:280px;line-height:1.6">
          Bootcamp intensif en développement logiciel — De la théorie à la pratique.
        </p>
        <div class="d-flex gap-2 mt-3">
          <span class="footer-badge">📞 +33 7 45 91 90 28</span>
        </div>
        <div class="mt-2">
          <span class="footer-badge">💬 WhatsApp uniquement</span>
        </div>
      </div>
      <div class="col-md-4">
        <h6 style="color:var(--white);font-weight:700;margin-bottom:1rem">Navigation</h6>
        <div class="d-flex flex-column gap-2">
          <a href="index.html" style="color:rgba(255,255,255,.6);font-size:.875rem">Accueil</a>
          <a href="formations.html" style="color:rgba(255,255,255,.6);font-size:.875rem">Formations</a>
          <a href="tarifs.html" style="color:rgba(255,255,255,.6);font-size:.875rem">Tarifs & Paiement</a>
          <a href="admission.html" style="color:rgba(255,255,255,.6);font-size:.875rem">Admission</a>
        </div>
      </div>
      <div class="col-md-4">
        <h6 style="color:var(--white);font-weight:700;margin-bottom:1rem">Nos garanties</h6>
        <div class="d-flex flex-wrap gap-3">
          <div class="footer-icon">
            <div class="icon-circle">👨‍🏫</div>Formateurs<br>expérimentés
          </div>
          <div class="footer-icon">
            <div class="icon-circle">💻</div>Projets<br>concrets
          </div>
          <div class="footer-icon">
            <div class="icon-circle">🎓</div>Certificat<br>reconnu
          </div>
          <div class="footer-icon">
            <div class="icon-circle">🤝</div>Accompagnement<br>personnalisé
          </div>
        </div>
      </div>
    </div>
    <hr class="footer-divider">
    <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
      <p class="tagline-footer mb-0">★ APPRENEZ. PRATIQUEZ. RÉALISEZ. ÉVOLUEZ. ★</p>
      <p style="font-size:.75rem;color:rgba(255,255,255,.35);margin:0">
        © 2026 Bootcamp Génie Logiciel. Tous droits réservés.
      </p>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navTarget = document.getElementById('navbar-placeholder');
  const footTarget = document.getElementById('footer-placeholder');
  if (navTarget)  navTarget.innerHTML  = NAV_HTML;
  if (footTarget) footTarget.innerHTML = FOOTER_HTML;

  // Active link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-bootcamp .nav-link').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
});
