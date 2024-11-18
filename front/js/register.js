// Función para validar los campos antes de enviar el formulario
document.getElementById('formRegister').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe inmediatamente

    const nombreUser = document.getElementById('nombreUser').value.trim();
    const email = document.getElementById('emailR').value.trim();
    const contrasenia = document.getElementById('contraseniaR').value.trim();
    const nroTelefono = document.getElementById('nroTelefono').value.trim();
    const nacionalidad = document.getElementById('nacionalidad').value.trim();
    const anioNacimiento = document.getElementById('anioNacimiento').value.trim();

    // Validación de campos
    if (!nombreUser || !email || !contrasenia || !nroTelefono || !nacionalidad || !anioNacimiento) {
        mostrarAlerta('Todos los campos son obligatorios. Por favor, rellene todos los campos', 'error');
        return;
    }

    // Validación de formato de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        mostrarAlerta('Por favor, ingrese un email válido', 'error');
        return;
    }

    // Validación de número de teléfono (solo números)
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(nroTelefono)) {
        mostrarAlerta('El número de teléfono debe contener solo números', 'error');
        return;
    }

    // Enviar los datos al servidor mediante fetch
    const formData = new FormData(this);

    fetch('./front/php/register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.resultado) {
            // Mostrar alerta de éxito antes de redirigir
            mostrarAlerta('¡Registro exitoso!', 'success');
            
            // Redirigir después de unos segundos
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000); // 3000 milisegundos = 3 segundos
        } else {
            mostrarAlerta('Error al enviar el carrito: ' + data.mensaje, 'error');
        }  
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        mostrarAlerta('Hubo un problema al procesar el registro.', 'error');
    });
});
