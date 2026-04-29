document.addEventListener('DOMContentLoaded', () => {

  // =========================
// FORM COVER (INDEX HERO)
// =========================
const startBtn = document.getElementById("startFormBtn");
const cover = document.getElementById("formCover");
const container = document.getElementById('form-container');

if (startBtn && cover && container) {

  startBtn.addEventListener("click", () => {
    // Fade out cover
    cover.style.opacity = "0";
    cover.style.pointerEvents = "none";

    loadForm();
  });

  function loadForm() {
    container.innerHTML = '';

    const params = new URLSearchParams(window.location.search);
    const partner = params.get('partner') || '';
    const locationParam = params.get('location') || '';

    const baseFormUrl = 'https://forms.zohopublic.com/aldobettoni/form/MultiLocationFormTEST/formperma/FzWNb1lmOhqpaKpZGn35vKY4Xk-iFLnUczhBIjXRHTU';

    const finalUrl = `${baseFormUrl}?partner=${encodeURIComponent(partner)}&location=${encodeURIComponent(locationParam)}`;

    const iframe = document.createElement('iframe');
    iframe.src = finalUrl;
    iframe.style.width = "100%";
    iframe.style.height = window.innerWidth < 768 ? "550px" : "520px";
    iframe.style.border = "none";
    iframe.style.marginTop = "-45px";

    container.appendChild(iframe);
  }
}

  // =========================
  // REVEAL ANIMATION
  // =========================
  const items = document.querySelectorAll('.kadence-reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(el => observer.observe(el));
  }

  // =========================
  // GA TRACKING
  // =========================

// Escuchamos en el document para que no importe CUÁNDO cargan los botones
document.addEventListener('click', function(e) {
    // 1. Buscamos el botón más cercano al clic
    const btn = e.target.closest('.track-call');

    // Si no hay botón, no hacemos nada
    if (!btn) return;

    // 2. Extraemos el label específicamente de ESE botón
    const label = btn.getAttribute('data-label') || btn.dataset.label;
    
    // 3. LOG DE CONTROL (Esto DEBE aparecer si el clic llega)
    console.log('%c EVENTO DETECTADO ', 'background: #222; color: #bada55', 'Ubicación:', label);

    // 4. Envío a GA4
    if (typeof gtag === 'function') {
        gtag('event', 'click_to_call', {
            'event_label': label,
            'event_category': 'contact',
            'transport_type': 'beacon'
        });
    } else {
        console.warn('Cuidado: gtag no está definido. Revisa el script de Google Analytics.');
    }
}, true); // El 'true' activa la fase de captura, ganándole a otros scripts

  // =========================
// FORM HANDLING
// =========================
const form = document.getElementById('contactForm');
const btn = document.getElementById('submitBtn');
const successMsg = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // UI loading
    if (btn) {
      btn.classList.add('loading');
      btn.querySelector('.btn-text').style.display = 'none';
      btn.querySelector('.btn-loading').style.display = 'inline';
      btn.disabled = true;
    }

    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      form.style.display = 'none';

      if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth' });
      }

      // Tracking
      if (typeof gtag === 'function') {
        gtag('event', 'form_submit', {
          event_category: 'contact',
          event_label: 'zoho_form'
        });
      }

    } catch (error) {
      alert('Algo falló, intenta de nuevo');
      if (btn) btn.disabled = false;
    }
  });
}

});
