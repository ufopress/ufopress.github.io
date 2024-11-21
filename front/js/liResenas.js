document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('liResenas').addEventListener('click', function (event) {
        // Verifica si la clave 'nombreUsuario' existe en el localStorage
        const usuario = localStorage.getItem('nombreUsuario');

        if (!usuario) {
            // Si no hay usuario, previene la acción predeterminada y muestra la alerta
            event.preventDefault(); // Evita cualquier acción de redirección
            // Mostrar alerta de éxito antes de redirigir
            mostrarAlerta('Inicia sesión para acceder a esta funcionalidad', 'error');
            
            // Redirigir después de unos segundos
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2500); // 2500 milisegundos = 2.5 segundos
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
