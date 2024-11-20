document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("formLogin");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir la recarga automática del formulario

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#contrasenia").value;

        // Realizar la petición fetch
        fetch("../front/php/login.php", {
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
                    localStorage.setItem("emailUser", data.email);
                    localStorage.setItem("nombreUsuario", data.usuario);
                    localStorage.setItem("tipoUsuario", data.tipo);

                    //--
                    console.log("Usuario guardado:", localStorage.getItem("nombreUsuario"));
                    console.log("Tipo guardado:", localStorage.getItem("tipoUsuario"));

                    actualizarContadorCarrito();
                    window.location.href = "index.html";

                } else {
                    mostrarAlerta('Credenciales incorrectas: ', 'error');
                }
            })
            .catch(error => {
                console.error('Error en la petición:', error);
            });
    });
});
