document.addEventListener('DOMContentLoaded', function() {
    var usuario = localStorage.getItem('nombreUsuario');
    const logoutListElement = document.getElementById('liLogout'); // El botón de cerrar sesión
    
    // Si no hay un usuario logueado, mostrar el modal de inicio de sesión
    
    function verificarUsuario(){
        if (!usuario) {
            var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();

            // Si no hay usuario, asegurarse de mostrar "Iniciar sesión" en el botón de login
            if (loginListElement) {
                loginListElement.textContent = "Iniciar sesión";
                loginListElement.setAttribute('href', '#');
                loginListElement.setAttribute('data-bs-toggle', 'modal'); // Volver a agregar atributos
                loginListElement.setAttribute('data-bs-target', '#loginModal');
            }

            // Ocultar el botón de cerrar sesión
            if (logoutListElement) {
                logoutListElement.style.display = 'none';
            }
        } else {
            // Si hay un usuario logueado, actualizar el texto del botón "Iniciar sesión"
            var loginListElement = document.getElementById('liALogin');
            if (loginListElement) {
                loginListElement.textContent = usuario;
                loginListElement.setAttribute('href', '#'); // Cambiar el destino del enlace
                loginListElement.removeAttribute('data-bs-toggle'); // Eliminar atributo
                loginListElement.removeAttribute('data-bs-target'); // Eliminar atributo
            }

            // Mostrar el botón de cerrar sesión
            if (logoutListElement) {
                logoutListElement.style.display = 'block'; // Asegurarse de que se muestre
            }
        }
    }

    verificarUsuario();
});