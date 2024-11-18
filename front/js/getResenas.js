document.addEventListener('DOMContentLoaded', async () => {
    const reseñasCarouselInner = document.getElementById('reseñasCarouselInner');

    try {
        // Realiza el fetch para obtener las reseñas
        const response = await fetch('./front/php/getResenas.php');
        const reseñas = await response.json();

        if (reseñas.length > 0) {
            const chunkSize = 3;  // Número de reseñas por slide
            for (let i = 0; i < reseñas.length; i += chunkSize) {
                const reseñasChunk = reseñas.slice(i, i + chunkSize);
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (i === 0) carouselItem.classList.add('active');  // La primera slide debe ser activa

                // Crear una fila de tres columnas para las reseñas
                let row = '<div class="row">';
                reseñasChunk.forEach(reseña => {
                    row += `
                        <div class="col-md-4">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">${reseña.NombreUser}</h5>
                                    <p class="card-text">${reseña.Contenido}</p>
                                </div>
                                <div class="card-footer text-end">
                                    <small class="text-muted">${reseña.Fecha}</small>
                                </div>
                            </div>
                        </div>
                    `;
                });
                row += '</div>';

                // Añadir la fila a la diapositiva del carrusel
                carouselItem.innerHTML = row;
                reseñasCarouselInner.appendChild(carouselItem);
            }
        } else {
            reseñasCarouselInner.innerHTML = '<p class="text-center">No hay reseñas disponibles.</p>';
        }
    } catch (error) {
        console.error('Error al cargar las reseñas:', error);
        reseñasCarouselInner.innerHTML = '<p class="text-center">Error al cargar las reseñas.</p>';
    }
});
