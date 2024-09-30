// Mostrar el modal automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
});

// Agregar funcionalidad al formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    
    // Aquí puedes hacer la validación o enviar los datos al servidor con fetch()
    console.log("Email:", email, "Password:", password);
    alert("Iniciar sesión: " + email);
    
    // Después del login, podrías cerrar el modal (opcional)
    var loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    loginModal.hide();
});