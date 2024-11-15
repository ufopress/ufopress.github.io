document.getElementById('irConfirmarPago').addEventListener('click', function() {
    // Obtener el carrito de compras desde localStorage
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length > 0) {
        var productosDetalles = [];
        var totalCompra = 0;  // Variable para almacenar el total de la compra
        var valorFinal = 0;    // Variable para almacenar el valor final de la compra (con impuestos/descuentos)

        // Realizar la solicitud para cada producto del carrito
        carrito.forEach(function(producto) {
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
document.getElementById('confirmarPago').addEventListener('click', function() {
    // Obtener los datos del formulario
    var direccionEnvio = document.getElementById('direccionEnvio').value;
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var totalCompra = parseFloat(document.getElementById('totalCompra').value);
    var valorFinal = parseFloat(document.getElementById('valorFinal').value);
    
    if (!direccionEnvio) {
        alert('Por favor, ingresa una dirección de envío');
        return;
    }

    // Enviar los datos al servidor para crear el ticket
    fetch('./front/php/ticket.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            carrito: carrito,
            direccionEnvio: direccionEnvio,
            total: valorFinal
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.resultado === true) {
            alert('Pago confirmado. Tu número de ticket es: ' + data.nroTicket);
            // Opcional: Limpiar el carrito después de la compra
            localStorage.removeItem('carrito');
            actualizarContadorCarrito();
            // Cerrar el modal
            var confirmModal = bootstrap.Modal.getInstance(document.getElementById('modalConfirmarPago'));
            confirmModal.hide();
        } else {
            alert('Hubo un problema al procesar tu pago. Intenta nuevamente.');
        }
    })
    .catch(error => {
        console.error('Error al crear el ticket:', error);
        alert('Hubo un error. Intenta nuevamente.');
    });
});
