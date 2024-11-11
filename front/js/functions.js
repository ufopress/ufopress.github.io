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
                        <button type="button" class="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#modalProduct">
                            Más información
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    // Añadir eventos a los botones de "Agregar al carrito"
    agregarEventosCarrito();
}

// Función para crear los controles de paginación
function crearPaginacion() {
    const paginacionContainer = document.getElementById('paginacionContainer');
    paginacionContainer.innerHTML = ''; // Limpiar la paginación existente

    // Crear los botones de paginación
    for (let i = 1; i <= totalPaginas; i++) {
        const boton = document.createElement('input');
        boton.type = 'radio';
        boton.name = 'page';
        boton.value = i;
        boton.id = `page-${i}`;
        boton.classList.add('btn-check');

        const label = document.createElement('label');
        label.htmlFor = `page-${i}`;
        label.classList.add('btn', 'btn-outline-warning', 'mx-1');
        label.textContent = i;

        if (i === paginaActual) {
            boton.checked = true;
        }

        // Agregar evento para cambiar de página
        boton.addEventListener('change', () => {
            paginaActual = i;
            mostrarProductosPorPagina();
        });

        paginacionContainer.appendChild(boton);
        paginacionContainer.appendChild(label);
    }
}

function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById('cart-count').textContent = totalItems;
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

function agregarProductoAlCarrito(isbn) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Hacer una consulta al servidor para obtener nombre y precio por ISBN
    fetch(`./front/php/getProductByISBN.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isbn: isbn })
    })
        .then(response => {
            // Verificar si la respuesta es JSON válida
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.resultado === false) {
                alert(data.mensaje || 'Producto no encontrado.');
                return;
            }

            const { Nombre, Precio } = data;

            // Verificar si el producto ya está en el carrito
            const productoExistente = carrito.find(producto => producto.isbn === isbn);

            if (productoExistente) {
                // Incrementar la cantidad del producto si ya está en el carrito
                productoExistente.cantidad += 1;
            } else {
                // Agregar el nuevo producto al carrito
                carrito.push({ isbn, Nombre, precio: Precio, cantidad: 1 });
            }

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Actualizar el contador del carrito
            actualizarContadorCarrito();

            alert('Producto agregado al carrito!');
        })
        .catch(error => {
            console.error('Error al agregar el producto al carrito:', error);
            alert('Error al agregar el producto al carrito.');
        });
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
                        <button type="button" class="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="#modalProduct">
                            Más información
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Función para crear los controles de paginación
function crearPaginacionCategoria() {
    const paginacionCategoriaContainer = document.getElementById('paginacionCategoriaContainer');
    paginacionCategoriaContainer.innerHTML = '';

    for (let i = 1; i <= totalPaginasCategoria; i++) {
        const botonPagina = document.createElement('button');
        botonPagina.classList.add('btn', 'btn-outline-secondary', 'm-1');
        botonPagina.textContent = i;
        
        if (i === paginaActualCategoria) {
            botonPagina.classList.add('active');
        }

        botonPagina.addEventListener('click', () => {
            paginaActualCategoria = i;
            mostrarProductosPorPaginaCategoria();
            crearPaginacionCategoria();
        });

        paginacionCategoriaContainer.appendChild(botonPagina);
    }
}




