document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario está logueado
    const nombreUsuario = localStorage.getItem('nombreUsuario');

    if (nombreUsuario) {
        fetch('./front/php/getCart.php')
        .then(response => response.json())
        .then(data => {
            if (data.resultado === false || !data.carrito) {
                console.log('No se encontraron productos en el carrito.');
                return;
            }else{
                let carritoArray = [];

                // Recorrer el array de productos en el carrito
                data.carrito.forEach(item => {
                    // Crear el objeto historieta para cada producto
                    let historieta = {
                        isbn: item.isbn,     // Obtener ISBN
                        cantidad: item.cantidad  // Obtener cantidad
                    };

                    // Añadir el objeto historieta al array
                    carritoArray.push(historieta);
                });

                // Guardar el array completo en localStorage como una cadena JSON
                localStorage.setItem('carrito', JSON.stringify(carritoArray));

                // Verificar si los datos fueron guardados correctamente
                console.log('Carrito guardado:', carritoArray);

                actualizarContadorCarrito();
            }   
            console.log(data);
        })
        .catch(error => {
            console.error('Error al cargar el carrito:', error);
        });
    } else {
        console.log('No hay usuario logueado, no se cargará el carrito.');
    }
});
