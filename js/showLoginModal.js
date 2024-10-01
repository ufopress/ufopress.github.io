document.addEventListener('DOMContentLoaded', function() {
    var usuario = localStorage.getItem('nombreUsuario');
    
    // Si no hay un usuario logueado, mostrar el modal de inicio de sesión
    if (!usuario) {
        var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    } else {
        // Si hay un usuario logueado, actualizar el texto del botón "Iniciar sesión"
        var loginListElement = document.getElementById('liALogin');
        if (loginListElement) {
            loginListElement.textContent = usuario;
            loginListElement.setAttribute('href', '#'); // Cambiar el destino del enlace
            loginListElement.removeAttribute('data-bs-toggle'); // Eliminar atributo
            loginListElement.removeAttribute('data-bs-target'); // Eliminar atributo
        }
    }
});