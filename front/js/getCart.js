document.addEventListener('DOMContentLoaded', function() {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    if (nombreUsuario) {
        // Obtener el email del localStorage
        const emailUser = localStorage.getItem('emailUser');
        
        fetch('./front/php/getCart.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: emailUser }) // Pasar el email en el cuerpo de la solicitud
        })
        .then(response => response.json())
        .then(data => {
            if (data.resultado === false || !data.carrito) {
                console.log('No se encontraron productos en el carrito.');
                return;
            } else {
                let carritoArray = [];

                // Recorrer el array de productos en el carrito
                data.carrito.forEach(item => {
                    // Crear el objeto historieta para cada producto
                    let historieta = {
                        isbn: item.isbn,      // Obtener ISBN
                        cantidad: item.cantidad  // Obtener cantidad
                    };

                    // Añadir el objeto historieta al array
                    carritoArray.push(historieta);
                });

                // Guardar el array completo en localStorage como una cadena JSON
                localStorage.setItem('carrito', JSON.stringify(carritoArray));
                actualizarContadorCarrito();

                // Verificar si los datos fueron guardados correctamente
                console.log('Carrito guardado:', carritoArray);
            }
        })
        .catch(error => {
            console.error('Error al cargar el carrito:', error);
        });
    }
});
