paginaActual = 1;
productosPorPagina = 3;
totalPaginas = 0;

document.addEventListener('DOMContentLoaded', function () {
    // Función para cargar los productos promocionados
    function cargarProductosPromocionados() {
        fetch('./front/php/promocionados.php')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    productos = data; // Usamos la variable productos global ya declarada en otro lugar
                    totalPaginas = Math.ceil(productos.length / productosPorPagina); // Calcular total de páginas
                    mostrarProductosPorPagina(); // Mostrar productos de la página actual
                    crearPaginacion(); // Crear la paginación
                } else {
                    console.log("No se encontraron productos promocionados.");
                }
            })
            .catch(error => console.error('Error al cargar productos promocionados:', error));
    }

    // Cargar productos promocionados cuando el modal se abra
    const mostrarPromocionadosModal = document.getElementById('mostrarPromocionadosModal');
    mostrarPromocionadosModal.addEventListener('show.bs.modal', function () {
        cargarProductosPromocionados();
    });

    // Función para mostrar los productos de la página actual
    function mostrarProductosPorPagina() {
        const productosContainer = document.getElementById('productList2');
        productosContainer.innerHTML = ''; // Limpiar el contenedor de productos

        // Calcular el índice de inicio y fin de los productos a mostrar
        const inicio = (paginaActual - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;

        // Recorrer los productos de la página actual y mostrarlos
        const productosPagina = productos.slice(inicio, fin);
        productosPagina.forEach(element => {
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
        agregarEventosModal();
    }

    // Función para crear los controles de paginación
    function crearPaginacion() {
        const paginacionContainer = document.getElementById('paginacionContainer');
        paginacionContainer.innerHTML = ''; // Limpiar la paginación existente

        // Crear el contenedor de paginación
        const paginacionRow = document.createElement('div');
        paginacionRow.classList.add('d-flex', 'justify-content-center', 'flex-wrap');

        // Límite de páginas visibles
        const rangoPagina = 2; // Cuántas páginas mostrar a la izquierda y a la derecha de la actual
        let start = Math.max(1, paginaActual - rangoPagina);
        let end = Math.min(totalPaginas, paginaActual + rangoPagina);

        // Si estamos cerca del principio, mostrar la primera página
        if (paginaActual > rangoPagina + 1) {
            const botonPrimera = document.createElement('button');
            botonPrimera.classList.add('btn', 'btn-outline-warning', 'm-1');
            botonPrimera.textContent = '<<';
            botonPrimera.addEventListener('click', () => {
                paginaActual = 1;
                mostrarProductosPorPagina();
                crearPaginacion();
            });
            paginacionRow.appendChild(botonPrimera);
        }

        // Crear los botones de las páginas dentro del rango
        for (let i = start; i <= end; i++) {
            const botonPagina = document.createElement('button');
            botonPagina.classList.add('btn', 'btn-outline-warning', 'm-1');
            botonPagina.textContent = i;

            // Marcar la página actual
            if (i === paginaActual) {
                botonPagina.classList.add('active');
            }

            botonPagina.addEventListener('click', () => {
                paginaActual = i;
                mostrarProductosPorPagina();
                crearPaginacion();
            });

            paginacionRow.appendChild(botonPagina);
        }

        // Si estamos cerca del final, mostrar la última página
        if (paginaActual < totalPaginas - rangoPagina) {
            const botonUltima = document.createElement('button');
            botonUltima.classList.add('btn', 'btn-outline-warning', 'm-1');
            botonUltima.textContent = '>>';
            botonUltima.addEventListener('click', () => {
                paginaActual = totalPaginas;
                mostrarProductosPorPagina();
                crearPaginacion();
            });
            paginacionRow.appendChild(botonUltima);
        }

        // Agregar los controles de paginación al contenedor
        paginacionContainer.appendChild(paginacionRow);
    }
});
