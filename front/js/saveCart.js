// Función para obtener el carrito y los datos del cliente desde el localStorage
function obtenerDatosCarritoYCliente() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const emailUser = localStorage.getItem('emailUser');
    
    if (!emailUser) {
        return null;
    }

    return { carrito, emailUser };
}

// Función para enviar los datos al archivo PHP
function enviarDatosAlPHP() {
    const datos = obtenerDatosCarritoYCliente();
    
    if (datos === null) return;

    // Configurar los datos a enviar
    const datosAEnviar = {
        email: datos.emailUser,
        carrito: datos.carrito,
        cantidad: datos.cantidad
    };

    // Enviar los datos al PHP usando fetch
    fetch('./front/php/saveCart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosAEnviar) // Enviamos los datos como JSON
    })
    .then(response => response.json()) // Aseguramos que la respuesta sea un JSON
    .then(data => {
        if (data.resultado) {
        } else {
            mostrarAlerta('Error al enviar el carrito: ' + data.mensaje, 'error');
        }        
    })
    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
    });
}