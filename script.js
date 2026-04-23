document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("startFormBtn");
    const cover = document.getElementById("formCover");
    const container = document.getElementById('form-container');

    btn.addEventListener("click", () => {
        // 1. Desaparecer la portada
        cover.style.opacity = "0";
        cover.style.pointerEvents = "none";

        // 2. Ejecutar la carga del formulario
        loadForm();
    });

    function loadForm() {
        // Limpiamos el contenedor por si acaso
        container.innerHTML = '';
        
        const params = new URLSearchParams(window.location.search);
        const partner = params.get('partner') || '';
        const locationParam = params.get('location') || '';

        const baseFormUrl = 'https://forms.zohopublic.com/aldobettoni/form/MultiLocationFormTEST/formperma/FzWNb1lmOhqpaKpZGn35vKY4Xk-iFLnUczhBIjXRHTU';
        const finalUrl = `${baseFormUrl}?partner=${encodeURIComponent(partner)}&location=${encodeURIComponent(locationParam)}`;

        const iframe = document.createElement('iframe');
        iframe.src = finalUrl;
        iframe.style.width = "100%";
        iframe.style.height = "520px"; // Ajustado para evitar cortes
        iframe.style.border = "none";
        // HACK: Subimos el iframe para compensar el margen de Zoho
        iframe.style.marginTop = "-45px"; 
        
        iframe.setAttribute('aria-label', 'Multi Location Form TEST');
        container.appendChild(iframe);
    }
});
