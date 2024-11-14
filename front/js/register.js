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
        alert('Todos los campos son obligatorios. Por favor, rellene todos los campos.');
        return;
    }

    // Validación de formato de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingrese un email válido.');
        return;
    }

    // Validación de número de teléfono (solo números)
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(nroTelefono)) {
        alert('El número de teléfono debe contener solo números.');
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
                alert('¡Registro exitoso!');
                window.location.href = 'index.html'; // Redirigir a index.html
            } else {
                alert(data.mensaje); // Mostrar mensaje de error desde el servidor
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            alert('Hubo un problema al procesar el registro.');
        });
});
