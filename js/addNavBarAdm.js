document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el tipo de usuario en el localStorage es "ADM" o "VEN"
    verificarAdminMenu();

    // Escuchar el evento de cierre de sesión (modifica esto según tu lógica de cierre de sesión)
    document.getElementById('liLogout').addEventListener('click', function () {
        localStorage.removeItem('tipoUsuario'); // Limpiar tipoUsuario del localStorage
        eliminarAdminMenu(); // Eliminar el menú de administración si existe
    });
});
