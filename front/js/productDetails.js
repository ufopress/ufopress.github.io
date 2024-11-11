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
                        productosContainer.innerHTML += `
                            <div class="col">
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
                                        <button type="button" class="btn btn-secondary w-100 btn-info" data-bs-toggle="modal" data-bs-target="#modalProduct" data-isbn="${element.ISBN}">
                                            Más información
                                        </button>
                                    </div>
                                </div>
                            </div>`;
                    });
                    agregarEventosModal();
                } else {
                    console.log("No se encontraron productos.");
                }
            })
            .catch(error => console.error('Error al cargar productos:', error));
    }

    // Llamada para cargar productos cuando la página cargue
    cargarProductosDestacados();

    // Función para agregar eventos de clic a los botones de "Más información"
    function agregarEventosModal() {
        // Seleccionamos todos los botones con la clase .btn-info
        const botonesInfo = document.querySelectorAll('.btn-info');

        botonesInfo.forEach(boton => {
            boton.addEventListener('click', function () {
                const isbn = boton.getAttribute('data-isbn');
                cargarDetallesProducto(isbn);
            });
        });
    }

    // Función para cargar los detalles del producto en el modal
    function cargarDetallesProducto(isbn) {
        // Realizar la solicitud fetch para obtener los detalles del producto
        fetch(`./front/php/getProductDetails.php?isbn=${isbn}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    // Llenar el modal con los datos del producto
                    const modalContent = document.querySelector('#modalContent');
                    modalContent.innerHTML = `
                        <h5>${data.Nombre}</h5>
                        <img src="../back/vistas/img/${data.Imagen}" class="img-fluid" alt="${data.Nombre}">
                        <p><strong>Precio:</strong> $U${data.Precio}</p>
                        <p><strong>Autores:</strong> ${data.Autores}</p>
                        <p><strong>Páginas:</strong> ${data.Paginas}</p>
                        <p><strong>Contenido:</strong> ${data.Contenido}</p>
                        <p><strong>Edad recomendada:</strong> ${data.Edad}</p>
                        <p><strong>Formato:</strong> ${data.Formato}</p>
                        <p><strong>Editorial:</strong> ${data.EditOrg}</p>
                        <p><strong>Interior:</strong> ${data.Interior}</p>
                    `;
                }
            })
            .catch(error => console.error('Error al cargar los detalles del producto:', error));
    }
});
