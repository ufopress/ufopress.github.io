document.getElementById('irConfirmarPago').addEventListener('click', function () {
    const lengthCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (lengthCarrito.length === 0) {
        mostrarAlerta('Añade productos para poder finalizar la compra', 'error')
        return; // No hace nada si el carrito está vacío
    }

    const modalCarrito = document.getElementById('cartModal');

    if (!modalCarrito.hidden) {
        modalCarrito.hidden = true; // Esto oculta el modal
    }

    // Obtener el carrito de compras desde localStorage
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length > 0) {
        var productosDetalles = [];
        var totalCompra = 0;  // Variable para almacenar el total de la compra
        var valorFinal = 0;    // Variable para almacenar el valor final de la compra (con impuestos/descuentos)

        // Realizar la solicitud para cada producto del carrito
        carrito.forEach(function (producto) {
            // Realizar una solicitud a PHP para obtener los detalles de la historieta con el ISBN
            fetch('./front/php/getProductByISBN.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isbn: producto.isbn })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.resultado !== false) {
                        // Calcular el precio total de este producto (precio * cantidad)
                        var precioTotalProducto = parseFloat(data[0].Precio) * parseInt(producto.cantidad);
                        totalCompra += precioTotalProducto;  // Sumar el precio al total
                        productosDetalles.push({
                            Nombre: data[0].Nombre,
                            Precio: data[0].Precio,
                            Cantidad: producto.cantidad,
                            PrecioTotal: precioTotalProducto
                        });
                    } else {
                        alert(data.mensaje);  // Mostrar mensaje si no se encuentran productos
                    }

                    // Una vez que hemos obtenido todos los detalles, mostrar el modal
                    if (productosDetalles.length === carrito.length) {
                        var productosLista = document.getElementById('productosLista');
                        productosLista.innerHTML = ''; // Limpiar el contenido previo

                        // Mostrar los productos con nombre, cantidad y precio
                        productosDetalles.forEach(producto => {
                            productosLista.innerHTML += `
                            <div>
                                <h5>${producto.Nombre}</h5>
                                <p>Cantidad: ${producto.Cantidad}</p>
                                <p>Precio unitario: $${producto.Precio}</p>
                                <p>Total: $${producto.PrecioTotal}</p>
                            </div>
                        `;
                        });

                        // Mostrar el total de la compra
                        document.getElementById('totalCompra').value = totalCompra.toFixed(2);  // Mostrar el total en el modal

                        document.getElementById('valorFinal').value = totalCompra.toFixed(2);  // Mostrar el valor final en el modal

                        // Mostrar el modal de confirmación
                        var confirmModal = new bootstrap.Modal(document.getElementById('modalConfirmarPago'));
                        confirmModal.show();
                    }
                })
                .catch(error => {
                    console.error('Error al obtener los productos:', error);
                });
        });
    } else {
        alert('El carrito está vacío');
    }
});

// Cuando el usuario confirma el pago
document.getElementById('confirmarPago').addEventListener('click', function () {

    var direccionEnvio = document.getElementById('direccionEnvio').value;
    const nombreUser = localStorage.getItem('nombreUsuario');
    const email = localStorage.getItem('emailUser');
    obtenerIdCarrito(nombreUser, email);

    if (!direccionEnvio) {
        localStorage.removeItem('idCarrito');
        alert('Por favor, ingresa una dirección de envío');
        return;
    }

    // Obtener los datos del formulario
    const idCarrito = localStorage.getItem('idCarrito');
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var totalCompra = parseFloat(document.getElementById('totalCompra').value);
    var valorFinal = parseFloat(document.getElementById('valorFinal').value);

    // Enviar los datos al servidor para crear el ticket
    fetch('./front/php/ticket.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            carrito: carrito,
            direccionEnvio: direccionEnvio,
            total: valorFinal,
            idCarrito: idCarrito
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.resultado === true) {
                mostrarAlerta('Pago confirmado. Tu número de ticket es: ' + data.nroTicket, 'success');
                // Opcional: Limpiar el carrito después de la compra
                localStorage.removeItem('carrito');
                vaciarCarrito(localStorage.getItem('idCarrito'));
                actualizarContadorCarrito();

                // Redirigir después de unos segundos
                setTimeout(() => {
                    localStorage.removeItem('idCarrito');
                    window.location.href = 'index.html';
                }, 3000); // 3000 milisegundos = 3 segundos
            } else {
                localStorage.removeItem('idCarrito');
                mostrarAlerta('Hubo un problema al procesar tu pago. Intenta nuevamente.', 'error');
            }
        })
        .catch(error => {
            localStorage.removeItem('idCarrito');
            console.error('Error al crear el ticket:', error);
            alert('Hubo un error. Intenta nuevamente.');
        });
});
