document.addEventListener('DOMContentLoaded', () => {
   const btn = document.getElementById("startFormBtn");

btn.addEventListener("click", () => {
  const cover = document.querySelector(".form-cover");
  cover.style.opacity = "0";
  cover.style.pointerEvents = "none";

  loadForm();
});
	
    // 1. Capturar los parámetros de la URL de la landing
    const params = new URLSearchParams(window.location.search);
    const partner = params.get('partner') || '';
    const locationParam = params.get('location') || '';

    // 2. Mostrar feedback visual (opcional)
    const output = document.getElementById('output');
    if (partner || locationParam) {
        output.textContent = `Detectado: Partner ${partner} en Locación ${locationParam}`;
    }

    // 3. Construir la URL de Zoho con los parámetros
    // El formato debe ser: URL_DEL_FORM?AliasCampo1=Valor1&AliasCampo2=Valor2
    const baseFormUrl = 'https://forms.zohopublic.com/aldobettoni/form/MultiLocationFormTEST/formperma/FzWNb1lmOhqpaKpZGn35vKY4Xk-iFLnUczhBIjXRHTU';
    const finalUrl = `${baseFormUrl}?partner=${encodeURIComponent(partner)}&location=${encodeURIComponent(locationParam)}`;

    // 4. Crear e inyectar el iframe dinámicamente
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', finalUrl);
    iframe.setAttribute('style', 'height:500px;width:99%;border:none;');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('aria-label', 'Multi Location Form TEST');

    document.getElementById('form-container').appendChild(iframe);
	
});


