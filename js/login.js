document.addEventListener("DOMContentLoaded", function() {
    // Fetch para obtener la imagen desde PHP
    const DATA_URL = "php/login.php";

    fetch(DATA_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
        console.log("Se pudo");
    })
    .catch(error => {
        console.error('No se pudo', error);
    });
});