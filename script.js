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

/**
 * SISTEMA DE TRACKING DE LLAMADAS - GA4
 * ------------------------------------
 * Este script utiliza delegación de eventos en fase de captura para asegurar 
 * que el tracking ocurra antes de que cualquier otro script bloquee el clic.
 */

(function() {
    // 1. Verificamos que el DOM esté listo o escuchamos desde el nivel más alto
    document.addEventListener('click', function(event) {
        
        // 2. Usamos .closest() para encontrar el botón aunque el usuario 
        // haga clic en el icono ✆ o en el texto interno.
        const callBtn = event.target.closest('.track-call');

        // Si el elemento clickeado no tiene la clase .track-call, ignoramos el clic
        if (!callBtn) return;

        // 3. Obtenemos el label (navbar, btncontacto, etc.)
        const label = callBtn.dataset.label || 'sin_etiqueta';

        // 4. LOG DE DEPURACIÓN (Aparecerá en tu consola con estilo)
        console.log(
            `%c[GA4 Tracking]%c Evento: click_to_call | Ubicación: ${label}`, 
            "color: white; background: #2196F3; font-weight: bold; padding: 2px 5px; border-radius: 3px;",
            "color: #2196F3; font-weight: bold;"
        );

        // 5. Envío de datos a Google Analytics 4
        if (typeof gtag === 'function') {
            gtag('event', 'click_to_call', {
                'event_category': 'contact',
                'event_label': label, // Esto identifica si fue navbar o contacto
                'transport_type': 'beacon' // Envía el hit incluso si se abre la app de llamadas
            });
        } else {
            console.warn('Google Analytics (gtag) no está cargado aún.');
        }

    }, true); // El 'true' activa la FASE DE CAPTURA (Prioridad máxima)
})();

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
