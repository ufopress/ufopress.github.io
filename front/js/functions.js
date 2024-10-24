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

// Función para eliminar el menú de administración cuando se cierra sesión
function eliminarAdminMenu() {
    const adminDropdown = document.getElementById('adminDropdownMenu');
    if (adminDropdown) {
        adminDropdown.remove(); // Remueve el menú de administración
    }
}

// Función para verificar y agregar el menú de administración si el usuario es ADM o VEN
function verificarAdminMenu() {
    const tipoUsuario = localStorage.getItem('tipoUsuario');
    const navBar = document.getElementById('navbarSupportedContent');
    let adminDropdown = document.getElementById('adminDropdownMenu');

    // Si existe un menú de administración anterior, eliminarlo primero
    if (adminDropdown) {
        adminDropdown.remove(); // Elimina el menú de administración si ya existe
    }

    if (tipoUsuario === 'ADM' || tipoUsuario === 'VEN') {
        // Hacer que te redirija al html del backend
    }
}

// Función para cargar productos desde el servidor
function cargarProductos() {
    const productosContainer = document.getElementById('productosContainer');

    // Mostrar mensaje de carga mientras se obtienen los productos
    productosContainer.innerHTML = 'Cargando productos...';

    fetch(`./front/php/getAllProducts.php`)
        .then(response => response.json())
        .then(data => {
            if (data.resultado === false) {
                productosContainer.innerHTML = 'No se encontraron productos.';
                return;
            }

            productosContainer.innerHTML = ''; // Limpiar el contenedor de productos

            // Recorrer los productos y mostrarlos
            data.forEach(element => {
                productosContainer.innerHTML += `
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
                </div>
                `;
            });

            // Añadir eventos a los botones de "Agregar al carrito"
            agregarEventosCarrito();
        })
        .catch(error => {
            productosContainer.innerHTML = 'Error al cargar productos.';
            console.error('Error:', error);
        });
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

// Función para agregar un producto al carrito
function agregarProductoAlCarrito(isbn) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((producto) => producto.isbn === isbn);
    
    if (productoExistente) {
        // Incrementar la cantidad del producto si ya está en el carrito
        productoExistente.cantidad += 1;
    } else {
        // Agregar el nuevo producto al carrito
        carrito.push({ isbn, cantidad: 1 });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    alert('Producto agregado al carrito!');
}

function getProductsForCategory() {
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', function () {
            const categoriaSeleccionada = this.getAttribute('data-category'); // Obtener la categoría

            // Enviar la categoría al PHP usando fetch y el método POST
            fetch('./front/php/getProductsByCategory.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ categoria: categoriaSeleccionada }) // Enviar la categoría en el cuerpo de la solicitud
            })
                .then(response => response.json())
                .then(data => {
                    if (data.resultado === false) {
                        productosContainer.innerHTML = 'No se encontraron productos.';
                        return;
                    }

                    productosContainer.innerHTML = ''; // Limpiar el contenedor de productos

                    // Recorrer los productos y mostrarlos
                    data.forEach(element => {
                        productosContainer.innerHTML += `
                        <div class="col">
                            <div class="card h-100">
                                <img src="./front/${element.Imagen}" class="card-img-top" alt="${element.Nombre}" />
                                <div class="card-body">
                                    <p class="text-success">Precio: $U${element.Precio}</p>
                                    <h5 class="card-title">${element.Nombre}</h5>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-warning w-100 mb-1">
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
                })
                .catch(error => {
                    console.error('Error al cargar los productos:', error);
                });
        });
    });
}

