document.addEventListener('DOMContentLoaded', function () {
    const emailUser = localStorage.getItem('emailUser'); // Obtener el valor de 'emailUser' del localStorage
    const linkCompras = document.getElementById('liCompras'); // Seleccionar el enlace dentro del li
    
    linkCompras.addEventListener('click', event => {
        if (!emailUser) {
            // Si no hay usuario, eliminar los atributos relacionados con el modal
            linkCompras.removeAttribute('data-bs-toggle');
            linkCompras.removeAttribute('data-bs-target');

            // Mostrar alerta de éxito antes de redirigir
            mostrarAlerta('Inicia sesión para acceder a esta funcionalidad', 'error');
            
            // Redirigir después de unos segundos
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2500); // 2500 milisegundos = 2.5 segundos
        } else {
            // Si hay usuario, agregar los atributos para habilitar el modal
            linkCompras.setAttribute('data-bs-toggle', 'modal');
            linkCompras.setAttribute('data-bs-target', '#modalTickets');
        }
    });
});
