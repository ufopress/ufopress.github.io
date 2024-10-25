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
    
                    // Agregar eventos de click a los botones de "Agregar al carrito"
                    agregarEventosCarrito();
                })
                .catch(error => {
                    console.error('Error al cargar los productos:', error);
                });
        });
    });
}

