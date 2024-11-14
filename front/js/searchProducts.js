document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const contenido = document.getElementById('productList');
    const carrouselContainer = document.getElementById('carrouselContainer');
    const productosDestacados = document.getElementById('productosDestacados');
    const reseñasContainer = document.getElementById('reseñasContainer');
    const informacionSobreFamosos = document.getElementById('informacionSobreFamosos');
    const paginationContainer = document.getElementById('paginationContainer'); // Contenedor para los botones de paginación

    const itemsPorPagina = 3;
    let paginaActual = 1;
    let productos = [];

    // Escuchar el evento de entrada en el campo de búsqueda
    searchInput.addEventListener('input', function () {
        let producto = searchInput.value;

        // Limpiar el contenido si el campo de búsqueda está vacío
        if (producto.trim() === '') {
            contenido.innerHTML = '';
            reseñasContainer.style.display = 'block';
            carrouselContainer.style.display = 'block';
            productosDestacados.style.display = 'block';
            informacionSobreFamosos.style.display = 'block';
            paginationContainer.innerHTML = ''; // Limpia los botones de paginación
            return;
        }

        // Ocultar el carrusel y los productos destacados cuando se realiza una búsqueda
        carrouselContainer.style.display = 'none';
        productosDestacados.style.display = 'none';
        reseñasContainer.style.display = 'none';
        informacionSobreFamosos.style.display = 'none';

        fetch('./front/php/getProducts.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre: producto })
        })
            .then(response => response.json())
            .then(data => {
                productos = data;
                paginaActual = 1; // Reinicia a la primera página en cada nueva búsqueda
                actualizarVista();
                actualizarPaginacion();
            })
            .catch(error => console.error('Error:', error));
    });

    function actualizarVista() {
        contenido.innerHTML = ''; // Limpia el contenido anterior

        const inicio = (paginaActual - 1) * itemsPorPagina;
        const fin = inicio + itemsPorPagina;
        const productosPagina = productos.slice(inicio, fin);

        if (productosPagina.length > 0) {
            contenido.innerHTML =  
            `<div class="text-center mb-4 w-100 container mt-5">
                <h2 class="text-center mb-4 destacado">Resultados de la búsqueda:</h2>
            </div>`;

            productosPagina.forEach(element => {
                contenido.innerHTML += 
                    `<div class="col-12 col-md-6 col-lg-4 mb-4">
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

            contenido.innerHTML += `</div><br><br>`;

            // Agregar eventos de click a los botones de "Agregar al carrito"
            agregarEventosCarrito();
            agregarEventosModal();
        } else {
            contenido.innerHTML =  
            `<div class="text-center mb-4 w-100 container mt-5">
                <h2 class="text-center mb-4 destacado">No hay historietas con ese nombre</h2>
            </div>`;
        }
    }

    function actualizarPaginacion() {
        paginationContainer.innerHTML = ''; // Limpia la paginación anterior
        const totalPaginas = Math.ceil(productos.length / itemsPorPagina);

        // Límite de páginas visibles
        const rangoPagina = 2; // Cuántas páginas mostrar a la izquierda y a la derecha de la actual
        let start = Math.max(1, paginaActual - rangoPagina);
        let end = Math.min(totalPaginas, paginaActual + rangoPagina);

        // Si estamos cerca del principio, mostrar la primera página
        if (paginaActual > rangoPagina + 1) {
            const botonPrimera = document.createElement('button');
            botonPrimera.classList.add('btn', 'btn-outline-secondary', 'm-1', 'bg-light');
            botonPrimera.textContent = '<<';
            botonPrimera.addEventListener('click', () => {
                paginaActual = 1;
                actualizarVista();
                actualizarPaginacion();
            });
            paginationContainer.appendChild(botonPrimera);
        }

        // Crear los botones de las páginas dentro del rango
        for (let i = start; i <= end; i++) {
            const botonPagina = document.createElement('button');
            botonPagina.classList.add('btn', 'btn-outline-warning', 'm-1', 'bg-light');
            botonPagina.textContent = i;

            // Marcar la página actual
            if (i === paginaActual) {
                botonPagina.classList.add('active');
            }

            botonPagina.addEventListener('click', () => {
                paginaActual = i;
                actualizarVista();
                actualizarPaginacion();
            });

            paginationContainer.appendChild(botonPagina);
        }

        // Si estamos cerca del final, mostrar la última página
        if (paginaActual < totalPaginas - rangoPagina) {
            const botonUltima = document.createElement('button');
            botonUltima.classList.add('btn', 'btn-outline-warning', 'm-1', 'bg-light');
            botonUltima.textContent = '>>';
            botonUltima.addEventListener('click', () => {
                paginaActual = totalPaginas;
                actualizarVista();
                actualizarPaginacion();
            });
            paginationContainer.appendChild(botonUltima);
        }
    }
});
