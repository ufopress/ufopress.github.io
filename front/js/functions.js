function verificarUsuario() {
    const usuario = localStorage.getItem('nombreUsuario');
    const loginListElement = document.getElementById('liALogin'); // El botón de iniciar sesión
    const logoutListElement = document.getElementById('liLogout'); // El botón de cerrar sesión

    if (!usuario) {
        // Mostrar el modal de inicio de sesión
        var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();

        // Asegurarse de que el enlace de "Iniciar sesión" esté configurado correctamente
        if (loginListElement) {
            loginListElement.textContent = "Iniciar Sesión";
            loginListElement.setAttribute('href', '#');
            loginListElement.setAttribute('data-bs-toggle', 'modal');
            loginListElement.setAttribute('data-bs-target', '#loginModal');
        }

        // Ocultar el botón de "Cerrar sesión"
        if (logoutListElement) {
            logoutListElement.classList.add('d-none');
        }
    } else {
        // Actualizar el enlace de "Iniciar sesión" para mostrar el nombre del usuario
        if (loginListElement) {
            loginListElement.textContent = usuario;
            loginListElement.setAttribute('href', '#');
            loginListElement.removeAttribute('data-bs-toggle');
            loginListElement.removeAttribute('data-bs-target');
        }

        // Mostrar el botón de "Cerrar sesión"
        if (logoutListElement) {
            logoutListElement.classList.remove('d-none');
        }
    }
}

function actualizarContadorCarrito() {// Función para obtener el total de ítems en el carrito
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Sumar todas las cantidades, convirtiendo cada una a número
    let totalItems = carrito.reduce((acc, item) => acc + Number(item.cantidad), 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Variables globales para la paginación
let productosPorPagina = 3;
let paginaActual = 1;
let totalPaginas = 1;
let productos = [];

// Función para cargar productos desde el servidor
function cargarProductos() {
    const productosContainer = document.getElementById('productosContainer');
    const paginacionContainer = document.getElementById('paginacionContainer');

    // Mostrar mensaje de carga mientras se obtienen los productos
    productosContainer.innerHTML = 'Cargando productos...';

    fetch(`./front/php/getAllProducts.php`)
        .then(response => response.json())
        .then(data => {
            if (data.resultado === false) {
                productosContainer.innerHTML = 'No se encontraron productos.';
                return;
            }

            productos = data; // Guardar todos los productos
            totalPaginas = Math.ceil(productos.length / productosPorPagina);
            paginaActual = 1; // Reiniciar la página actual
            mostrarProductosPorPagina(); // Mostrar los productos de la primera página
            crearPaginacion(); // Crear los controles de paginación
        })
        .catch(error => {
            productosContainer.innerHTML = 'Error al cargar productos.';
            console.error('Error:', error);
        });
}

// Función para mostrar los productos de la página actual
function mostrarProductosPorPagina() {
    const productosContainer = document.getElementById('productosContainer');
    productosContainer.innerHTML = ''; // Limpiar el contenedor de productos

    // Calcular el índice de inicio y fin de los productos a mostrar
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;

    // Recorrer los productos de la página actual y mostrarlos
    const productosPagina = productos.slice(inicio, fin);
    productosPagina.forEach(element => {
        productosContainer.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 mb-4">
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
            </div>
        `;
    });

    // Añadir eventos a los botones de "Agregar al carrito"
    agregarEventosCarrito();
    agregarEventosModal();
}

// Función para crear los controles de paginación general con un rango dinámico
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

// Función para agregar eventos a los botones de "Agregar al carrito"
function agregarEventosCarrito() {
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

    botonesAgregarCarrito.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const isbnProducto = e.target.getAttribute('data-isbn');
            agregarProductoAlCarrito(isbnProducto);
        });
    });
}

function agregarProductoAlCarrito(isbn, nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.isbn === isbn);

    if (productoExistente) {
        // Asegurarse de que la cantidad sea un número y sumarle 1
        productoExistente.cantidad = Number(productoExistente.cantidad) + 1;
    } else {
        // Agregar el nuevo producto al carrito
        carrito.push({ isbn, nombre, precio, cantidad: 1 });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador del carrito
    enviarDatosAlPHP();
    actualizarContadorCarrito();

    // Redirigir después de unos segundos
    setTimeout(() => {
        mostrarAlerta('Agregado correctamente al carrito!')
    }, 1500); // 1500 milisegundos = 1.5 segundos
}

function obtenerProductoPorISBN(isbn) {
    fetch('./front/php/getProductByISBN.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isbn: isbn })  // Enviar el ISBN al servidor
    })
        .then(response => response.json())
        .then(data => {
            if (data.resultado === false) {
                console.error('Error:', data.mensaje);
            } else {
                const producto = data[0];  // Primer producto
                console.log('Nombre:', producto.Nombre);
                console.log('Precio: $U', producto.Precio);
            }
        })
        .catch(error => console.error('Error en el fetch:', error));
}

// Función para obtener el idCliente usando los datos del localStorage
function obtenerIdCliente() {
    const nombreUser = localStorage.getItem('nombreUsuario');
    const email = localStorage.getItem('emailUser');

    if (!nombreUser || !email) {
        return;
    }

    // Datos para enviar al PHP
    const datos = {
        nombreUser: nombreUser,
        email: email
    };

    // Fetch para obtener el idCliente
    fetch('./front/php/obtenerIdCliente.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Llamar a la función que obtiene el idCarrito con el idCliente
                obtenerIdCarrito(data.idCliente);
            } else {
                console.error('Error al obtener el ID del cliente:', data.message);
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
}

function obtenerIdCarrito(nombreUser, email) {
    // Paso 1: Obtener IdCliente
    fetch('./front/php/obtenerIdCliente.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombreUser: nombreUser, email: email }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const idCliente = data.idCliente;

                // Paso 2: Obtener IdCarrito con el IdCliente obtenido
                fetch('./front/php/obtenerIdCarrito.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ idCliente: idCliente }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            // Guardar en localStorage
                            localStorage.setItem('idCarrito', data.idCarrito);
                        } else {
                            console.error('Error al obtener el IdCarrito:', data.message);
                        }
                    })
                    .catch(error => console.error('Error en la consulta del carrito:', error));
            } else {
                console.error('Error al obtener el IdCliente:', data.message);
            }
        })
        .catch(error => console.error('Error en la consulta del cliente:', error));
}

// Función para vaciar el carrito usando el idCarrito
function vaciarCarrito(idCarrito) {
    fetch('./front/php/vaciarCarrito.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idCarrito })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
            } else {
                console.error("Error al vaciar el carrito:", data.message);
            }
        })
        .catch(error => console.error("Error en la solicitud:", error));
}

// Variables de paginación
let productosPorPaginaCategoria = 3;
let paginaActualCategoria = 1;
let totalPaginasCategoria = 1;
let productosCategoria = [];

// Función para cargar productos por categoría y aplicar paginación
function cargarProductosPorCategoria(categoria) {
    fetch('./front/php/getForCategory.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ categoria: categoria })
    })
        .then(response => response.json())
        .then(data => {
            const productosCategoriaContainer = document.getElementById('productosCategoriaContainer');
            const paginacionCategoriaContainer = document.getElementById('paginacionCategoriaContainer');

            productosCategoriaContainer.innerHTML = ''; // Limpiar el contenido anterior
            paginacionCategoriaContainer.innerHTML = ''; // Limpiar la paginación anterior

            if (data.length > 0) {
                // Guardar productos y calcular el total de páginas
                productosCategoria = data;
                totalPaginasCategoria = Math.ceil(productosCategoria.length / productosPorPaginaCategoria);
                paginaActualCategoria = 1;

                // Mostrar los productos de la primera página y crear paginación
                mostrarProductosPorPaginaCategoria();
                crearPaginacionCategoria();
            } else {
                productosCategoriaContainer.innerHTML = '<p>No se encontraron productos para esta categoría.</p>';
            }
        })
        .catch(error => console.error('Error al cargar productos por categoría:', error));
}

// Función para mostrar los productos de la página actual en el modal
function mostrarProductosPorPaginaCategoria() {
    const productosCategoriaContainer = document.getElementById('productosCategoriaContainer');
    productosCategoriaContainer.innerHTML = '';

    const inicio = (paginaActualCategoria - 1) * productosPorPaginaCategoria;
    const fin = inicio + productosPorPaginaCategoria;
    const productosPagina = productosCategoria.slice(inicio, fin);

    productosPagina.forEach(element => {
        productosCategoriaContainer.innerHTML += `
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
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
            </div>
        `;
    });

    agregarEventosCarrito();
    agregarEventosModal();
}

// Función para crear los controles de paginación por categoría con un rango dinámico
function crearPaginacionCategoria() {
    const paginacionCategoriaContainer = document.getElementById('paginacionCategoriaContainer');
    paginacionCategoriaContainer.innerHTML = ''; // Limpiar la paginación anterior

    // Crear el contenedor de paginación
    const paginacionRow = document.createElement('div');
    paginacionRow.classList.add('d-flex', 'justify-content-center', 'flex-wrap');

    // Límite de páginas visibles
    const rangoPagina = 2; // Cuántas páginas mostrar a la izquierda y a la derecha de la actual
    let start = Math.max(1, paginaActualCategoria - rangoPagina);
    let end = Math.min(totalPaginasCategoria, paginaActualCategoria + rangoPagina);

    // Si estamos cerca del principio, mostrar la primera página
    if (paginaActualCategoria > rangoPagina + 1) {
        const botonPrimera = document.createElement('button');
        botonPrimera.classList.add('btn', 'btn-outline-warning', 'm-1');
        botonPrimera.textContent = '<<';
        botonPrimera.addEventListener('click', () => {
            paginaActualCategoria = 1;
            mostrarProductosPorPaginaCategoria();
            crearPaginacionCategoria();
        });
        paginacionRow.appendChild(botonPrimera);
    }

    // Crear los botones de las páginas dentro del rango
    for (let i = start; i <= end; i++) {
        const botonPagina = document.createElement('button');
        botonPagina.classList.add('btn', 'btn-outline-warning', 'm-1');
        botonPagina.textContent = i;

        // Marcar la página actual
        if (i === paginaActualCategoria) {
            botonPagina.classList.add('active');
        }

        botonPagina.addEventListener('click', () => {
            paginaActualCategoria = i;
            mostrarProductosPorPaginaCategoria();
            crearPaginacionCategoria();
        });

        paginacionRow.appendChild(botonPagina);
    }

    // Si estamos cerca del final, mostrar la última página
    if (paginaActualCategoria < totalPaginasCategoria - rangoPagina) {
        const botonUltima = document.createElement('button');
        botonUltima.classList.add('btn', 'btn-outline-warning', 'm-1');
        botonUltima.textContent = '>>';
        botonUltima.addEventListener('click', () => {
            paginaActualCategoria = totalPaginasCategoria;
            mostrarProductosPorPaginaCategoria();
            crearPaginacionCategoria();
        });
        paginacionRow.appendChild(botonUltima);
    }

    // Agregar los controles de paginación al contenedor
    paginacionCategoriaContainer.appendChild(paginacionRow);
}

function mostrarAlerta(mensaje, tipo = 'success') {
    Swal.fire({
        icon: tipo, // 'success' para éxito, 'error' para errores, etc.
        title: mensaje,
        showConfirmButton: false,
        timer: 1500, // Tiempo en milisegundos antes de que desaparezca
        timerProgressBar: true,
        position: 'center', // Opcional: 'center', 'top-end', 'bottom-end', etc.
        toast: false, // Si quieres una alerta en formato de toast, coloca esto en true
    });
}