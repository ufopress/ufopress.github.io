document.getElementById('botonGestionarResenas').addEventListener('click', function() {
    // Verificamos si el usuario está logueado
    const nombreUsuario = localStorage.getItem('nombreUsuario');

    if (nombreUsuario) {
        // Si está logueado, abrimos el modal
        $('#gestionarResenasModal').modal('show');
    } else {
        // Si no está logueado, mostramos un mensaje de advertencia
        alert('Por favor, inicia sesión para acceder a la gestión de reseñas.');
    }
});