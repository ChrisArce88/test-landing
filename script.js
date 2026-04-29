document.addEventListener('DOMContentLoaded', () => {

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
  // FORM HANDLING
  // =========================
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // UI loading
    btn.classList.add('loading');
    btn.querySelector('.btn-text').style.display = 'none';
    btn.querySelector('.btn-loading').style.display = 'inline';
    btn.disabled = true;

    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      // Mostrar éxito
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
      btn.disabled = false;
    }
  });

  gtag('event', 'conversion', {
  event_category: 'lead',
  event_label: 'zoho_success'
});

});
