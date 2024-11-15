document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('liResenas').addEventListener('click', function (event) {
        // Verifica si la clave 'nombreUsuario' existe en el localStorage
        const usuario = localStorage.getItem('nombreUsuario');

        if (!usuario) {
            // Si no hay usuario, previene la acción predeterminada y muestra la alerta
            event.preventDefault(); // Evita cualquier acción de redirección
            mostrarAlerta('Inicia sesión para poder ingresar aquí', 'error');
        }
        // Si hay usuario, no hace nada y permite la acción
    });

    // Función para mostrar la alerta con SweetAlert
    function mostrarAlerta(mensaje, tipo) {
        Swal.fire({
            text: mensaje,
            icon: tipo,
            confirmButtonText: 'Aceptar',
            timer: 3000, // Duración de la alerta en milisegundos
            timerProgressBar: true,
            position: 'center'
        });
    }
});
