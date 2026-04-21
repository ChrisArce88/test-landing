// Esperamos a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtenemos la cadena de parámetros de la URL actual
    const params = new URLSearchParams(window.location.search);

    // 2. Extraemos los valores específicos
    const partnerValue = params.get('partner');
    const locationValue = params.get('location');

    // 3. Referenciamos los inputs del formulario
    const partnerInput = document.getElementById('partner');
    const locationInput = document.getElementById('location');

    // 4. Asignamos los valores si existen en la URL
    if (partnerValue && partnerInput) {
        partnerInput.value = partnerValue;
    }

    if (locationValue && locationInput) {
        locationInput.value = locationValue;
    }
});
