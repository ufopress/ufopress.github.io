document.addEventListener('DOMContentLoaded', function () {
    // Función para obtener el total de ítems en el carrito
    function actualizarContadorCarrito() {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        document.getElementById('cart-count').textContent = totalItems;
    }

    // Llama a la función para mostrar el total de ítems en el carrito cuando la página cargue
    actualizarContadorCarrito();

    // Función para mostrar el contenido del carrito
    function mostrarCarrito() {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const cartItemsContainer = document.getElementById('cartItemsContainer');

        // Limpiar el contenedor
        cartItemsContainer.innerHTML = '';

        if (carrito.length === 0) {
            cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
            return;
        }

        // Crear la tabla para los productos
        let tableHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
        `;

        carrito.forEach((producto, index) => {
            tableHTML += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.cantidad}</td>
                    <td>$U${producto.precio}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="eliminarProductoDelCarrito(${index})">Eliminar</button>
                        <button class="btn btn-secondary btn-sm" onclick="disminuirCantidad(${index})">-</button>
                        <button class="btn btn-secondary btn-sm" onclick="aumentarCantidad(${index})">+</button>
                    </td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        cartItemsContainer.innerHTML = tableHTML;
    }

    // Mostrar el carrito cuando se abre el modal
    document.getElementById('cartModal').addEventListener('show.bs.modal', mostrarCarrito);

    // Función para agregar productos al carrito
    function agregarProductoAlCarrito(isbn, nombre, precio) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Verificar si el producto ya está en el carrito
        const productoExistente = carrito.find(producto => producto.isbn === isbn);

        if (productoExistente) {
            // Incrementar la cantidad del producto si ya está en el carrito
            productoExistente.cantidad += 1;
        } else {
            // Agregar el nuevo producto al carrito
            carrito.push({ isbn, nombre, precio, cantidad: 1 });
        }

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizar el contador del carrito
        actualizarContadorCarrito();

        alert('Producto agregado al carrito!');
    }

    // Función para vaciar el carrito
    document.getElementById('vaciarCarrito').addEventListener('click', function () {
        localStorage.removeItem('carrito');
        mostrarCarrito();
        actualizarContadorCarrito();
        alert('Carrito vaciado.');
    });

    // Función para eliminar un producto del carrito
    window.eliminarProductoDelCarrito = function (index) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.splice(index, 1); // Eliminar producto
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
        actualizarContadorCarrito();
    };

    // Función para disminuir la cantidad de un producto
    window.disminuirCantidad = function (index) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad -= 1;
        } else {
            carrito.splice(index, 1); // Eliminar el producto si la cantidad es 1
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
        actualizarContadorCarrito();
    };

    // Función para aumentar la cantidad de un producto
    window.aumentarCantidad = function (index) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito[index].cantidad += 1;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
        actualizarContadorCarrito();
    };
});
