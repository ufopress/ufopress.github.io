let globalEmail = ''; // Variable global para almacenar el correo

const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const loginOverlay = document.getElementById('loginOverlay');

loginBtn.addEventListener('click', function () {
    const formData = new FormData(loginForm);

    // Realizamos la solicitud fetch
    fetch('./../servicios_admin/loginBack.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json()) // Procesar la respuesta como JSON
        .then(data => {
            console.log(data);

            // Verificar si el login fue exitoso
            if (data.success) {
                globalEmail = formData.get('usermail');  // Guardar el email en la variable global
                window.globalEmail = globalEmail; // Asignar a la variable global en el objeto window
                loginOverlay.style.display = 'none'; // Cerrar el overlay de login
                console.log("Correo electrónico guardado globalmente:", globalEmail);
                document.getElementById('userEmail').textContent = globalEmail;
                // Ahora puedes ejecutar otras funciones que dependen de globalEmail
                Swal.fire({
                    icon: 'success',
                    title: 'Login Exitoso',
                    text: `Bienvenido, ${globalEmail}!`,
                    showConfirmButton: false,  // Muestra el botón para cerrar la alerta
                    timer: 3000, // El temporizador en milisegundos (3 segundos)
                    timerProgressBar: true,  // Muestra una barra de progreso del temporizador
                }).then(() => {
                    // Ejecuta cualquier acción que desees después de que el temporizador termine
                    loadAdmins(); // Llama a la función que necesita acceder a globalEmail
                });
            } else {
                // Si la contraseña es incorrecta, mostrar el error en el campo de contraseña
                const passwordField = document.getElementById('password');

                // Vaciar el valor del campo de contraseña
                passwordField.value = '';  // Esto setea el valor del campo de contraseña a vacío

                // Mostrar "Contraseña incorrecta" en el campo de contraseña
                if (data.error === 'Contraseña incorrecta') {
                    passwordField.setCustomValidity('Contraseña incorrecta');
                    passwordField.reportValidity(); // Muestra el mensaje de validación en el campo
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);

            // En caso de error en la solicitud, mostrar un error genérico en el campo de contraseña
            const passwordField = document.getElementById('password');

            // Vaciar el valor del campo de contraseña
            passwordField.value = '';  // Esto setea el valor del campo de contraseña a vacío

            passwordField.setCustomValidity('Error al procesar la solicitud'); // Mensaje genérico de error
            passwordField.reportValidity(); // Muestra el mensaje de validación en el campo
        });

    // Limpiar el mensaje de error al empezar a escribir en el campo de contraseña
    const passwordField = document.getElementById('password');
    passwordField.addEventListener('input', function () {
        passwordField.setCustomValidity(''); // Elimina el mensaje de error
    });

});

document.addEventListener('DOMContentLoaded', function () {
    fetch('./../servicios_admin/checksesion.php')
        .then(response => response.json()) // Procesar la respuesta como JSON
        .then(data => {
            if (data.success) {
                console.log(data);
                loginOverlay.style.display = 'none';
                window.globalEmail = data.email;
                document.getElementById('userEmail').textContent = window.globalEmail;
            }
            else {
                loginOverlay.style.display = 'block';
            }
        })
});

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', function () {
    fetch('./../servicios_admin/sesiondestroy.php')
    document.location.href = './../vistas/admin.html';
});