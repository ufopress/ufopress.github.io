document.addEventListener('DOMContentLoaded', function () {
    const formResena = document.getElementById('formResena');
    const enviarResenaBtn = document.getElementById('enviarResena');

    // Validación de campos no vacíos y envío de reseña
    enviarResenaBtn.addEventListener('click', function () {
        let nombreUser = '';
        let email = '';

        try {
            nombreUser = localStorage.getItem('nombreUsuario') || '';
            email = localStorage.getItem('emailUser') || '';
        } catch (error) {
            console.error('Error al acceder a localStorage:', error);
            nombreUser = ''; // Si hay un error, asigna una cadena vacía
        }

        console.log('Nombre de usuario:', nombreUser);
        console.log('Email de usuario:', email);

        const contenido = document.getElementById('contenido').value.trim();

        if (nombreUser === '') {
            alert('Por favor, inicia sesión para realizar una reseña');
            return;
        } else if (contenido === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const fechaActual = new Date();
        const fechaActual1 = fechaActual.toISOString().split('T')[0]; //YYYY-MM-DD
        const hora = fechaActual.toTimeString().split(' ')[0]; // "HH:MM:SS"

        // Enviar los datos al PHP usando fetch
        fetch('./front/php/agregarResena.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                nombreUser: nombreUser,
                contenido: contenido,
                fecha: `${fechaActual1} ${hora}`
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Reseña agregada exitosamente.');
                    formResena.reset(); // Limpiar formulario
                    $('#modalResena').modal('hide'); // Cerrar modal
                } else {
                    alert('Error al agregar reseña.');
                }
            })
            .catch(error => console.error('Error:', error));
    });
});
