document.addEventListener("DOMContentLoaded", function() {
    // Fetch para obtener la imagen desde PHP
    const DATA_URL = "./front/php/getEmpresa.php";

    fetch(DATA_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
        if (data[0].Logo) {
            const logoContainer = document.getElementById('logoHeader');
            const imgElement = document.createElement('img');
            imgElement.src = "../front/"+data[0].Logo; // Asignar la URL de la imagen
            
            imgElement.alt = "Logo de ComicVerse";
            imgElement.style.maxWidth = '55px';
            
            logoContainer.appendChild(imgElement);

            const logoModal = document.getElementById('logoModal');
            logoModal.src = "../front/"+data[0].Logo; // Asignar la URL de la imagen
            logoModal.alt = "Logo de ComicVerse";
            logoModal.style.maxWidth = '100px'; 
            logoModal.style.height = '100px';
        } else {
            console.error("No se encontró el atributo 'Logo' en la respuesta.");
        }
    })
    .catch(error => {
        console.error('Hubo un problema con la petición fetch:', error);
    });
});