document.addEventListener('DOMContentLoaded', function () {
    // Función para cargar los productos destacados (al azar)
    function cargarProductosDestacados() {
        fetch('./front/php/getThreeProducts.php') // Reemplaza con la ruta correcta del archivo PHP
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const productosContainer = document.querySelector('#productosDestacados .row');
                    productosContainer.innerHTML = ''; // Limpiar el contenedor

                    // Recorrer los productos y renderizarlos
                    data.forEach(element => {
                        productosContainer.innerHTML += `<div class="col-12 col-md-6 col-lg-4 mb-4">
                                                            <div class="card h-100">
                                                                <img src="../back/vistas/img/${element.Imagen}" class="card-img-top" alt="${element.Nombre}" />
                                                                <div class="card-body">
                                                                    <p class="text-success">Precio: $U${element.Precio}</p>
                                                                    <h5 class="card-title">${element.Nombre}</h5>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <button class="btn btn-warning w-100 mb-1 agregar-carrito" data-isbn="${element.ISBN}">
                                                                        Agregar al carrito
                                                                    </button>
                                                                    <button type="button" class="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#modalProduct" data-isbn="${element.ISBN}">
                                                                        Más información
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>`;
                    });
                    agregarEventosCarrito();
                } else {
                    console.log("No se encontraron productos.");
                }
            })
            .catch(error => console.error('Error al cargar productos:', error));
    }

    // Cargar productos destacados cuando la página cargue
    cargarProductosDestacados();
});
