document.addEventListener("DOMContentLoaded", function() {
    const formLogin = document.getElementById("formLogin");

    formLogin.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir la recarga automática del formulario

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#contrasenia").value;

        // Realizar la petición fetch
        fetch("./php/login.php", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ email: email, contrasenia: password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Guardar el nombre y tipo de usuario en localStorage
                localStorage.setItem("nombreUsuario", data.usuario);
                localStorage.setItem("tipoUsuario", data.tipo);

                /* Mostrar para verificar que se guarda correctamente
                console.log("Usuario guardado:", localStorage.getItem("nombreUsuario"));
                console.log("Tipo guardado:", localStorage.getItem("tipoUsuario"));*/
                
                // Redirigir a la página correspondiente
                if (data.tipo === "ADM") {
                    window.location.href = "panel_admin.html"; // Redirigir al panel de admin
                } else if (data.tipo === "CLI") {
                    window.location.href = "index.html"; // Redirigir a otra página
                }
            } else {
                alert("Credenciales incorrectas");
            }
        })
        .catch(error => {
            console.error('Error en la petición:', error);
        });
    });
});
