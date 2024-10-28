document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const contenido = document.getElementById('productList');
    const carrouselContainer = document.getElementById('carrouselContainer');
    const productosDestacados = document.getElementById('productosDestacados');
    const reseñasContainer = document.getElementById('reseñasContainer');

    // Escuchar el evento de entrada en el campo de búsqueda
    searchInput.addEventListener('input', function () {
        let producto = searchInput.value;

        // Limpiar el contenido si el campo de búsqueda está vacío
        if (producto.trim() === '') {
            contenido.innerHTML = '';

            // Mostrar el carrusel y los productos destacados nuevamente
            reseñasContainer.style.display = 'block';
            carrouselContainer.style.display = 'block';
            productosDestacados.style.display = 'block';

            return; // No continuar con el resto del código
        }

        // Ocultar el carrusel y los productos destacados cuando se realiza una búsqueda
        carrouselContainer.style.display = 'none';
        productosDestacados.style.display = 'none';
        reseñasContainer.style.display = 'none';

        fetch('./front/php/getProducts.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre: producto })
        })
            .then(response => response.json())
            .then(data => {
                // Limpiar el contenido anterior
                contenido.innerHTML = ''; // Limpia el contenido anterior

                // Verificar si hay productos en los resultados
                if (data.length > 0) {
                    contenido.innerHTML = ` 
                <div class="text-center mb-4 w-100 container mt-5"> <!-- Div que ocupa el total del ancho -->
                    <h2 class="text-center mb-4 destacado">Resultados de la búsqueda:</h2> <!-- Título centrado -->
                </div>`;

                data.forEach(element => {
                    contenido.innerHTML += `
                    <div class="col">
                        <div class="card h-100">
                            <img src="./front/${element.Imagen}" class="card-img-top" alt="${element.Nombre}" />
                            <div class="card-body">
                                <p class="text-success">Precio: $U${element.Precio}</p>
                                <h5 class="card-title">${element.Nombre}</h5>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-warning w-100 mb-1 agregar-carrito" data-isbn="${element.ISBN}">
                                    Agregar al carrito
                                </button>
                                <button type="button" class="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#modalProduct">
                                    Más información
                                </button>
                            </div>
                        </div>
                    </div>`;
                });

                contenido.innerHTML += `
                </div> <!-- row -->
                </div> <!-- container -->
                <br><br>`;

                // Agregar eventos de click a los botones de "Agregar al carrito"
                agregarEventosCarrito();
                } else {
                    contenido.innerHTML = ` 
                <div class="text-center mb-4 w-100 container mt-5"> <!-- Div que ocupa el total del ancho -->
                    <h2 class="text-center mb-4 destacado">No hay historietas con ese nombre</h2> <!-- Título centrado -->
                </div>`;
                }
            })
            .catch(error => console.error('Error:', error));
    });
});