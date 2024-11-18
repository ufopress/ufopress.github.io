document.addEventListener('DOMContentLoaded', function () {
    const formResena = document.getElementById('formResena');
    const enviarResenaBtn = document.getElementById('enviarResena');

    enviarResenaBtn.addEventListener('click', function () {
        let nombreUser = localStorage.getItem('nombreUsuario') || '';
        let email = localStorage.getItem('emailUser') || '';

        const contenido = document.getElementById('contenido').value.trim();

        if (nombreUser === '' || contenido === '') {
            mostrarAlerta('Por favor, completa todos los campos o inicia sesión.', 'error');
            return;
        }

        const fechaActual = new Date();
        const fecha = `${fechaActual.toISOString().split('T')[0]} ${fechaActual.toTimeString().split(' ')[0]}`;

        // Paso 1: Obtener el IdCliente
        fetch('./front/php/obtenerIdCliente.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombreUser, email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Paso 2: Insertar la reseña usando IdCliente
                return fetch('./front/php/agregarResena.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        idCliente: data.idCliente,
                        contenido,
                        fecha
                    })
                });
            } else {
                throw new Error('Usuario no encontrado');
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                mostrarAlerta('Reseña agregada exitosamente!', 'success');
            
                // Redirigir después de unos segundos
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500); // 1500 milisegundos = 1.5 segundos
            } else {
                mostrarAlerta('Error al agregar reseña', 'error');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
