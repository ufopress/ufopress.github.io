const regUserBtn = document.getElementById('regUserBtn');

regUserBtn.addEventListener('click', function() {              
    const formData2 = new FormData(document.getElementById('registrarUserForm'));
    formData2.append('registrarUserForm', 'registrarUserForm');
    fetch('./../servicios_admin/agregarUsuarios.php', {
        method: 'POST',
        body: formData2,
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Swal.fire({
                    title: 'Éxito',
                    text: 'Usuario agregado',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                });
            } else {
                Swal.fire({
                    title: 'Error',
                    text: data.error || 'No se pudo agregar el usuario',
                    icon: 'error',
                });
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            Swal.fire({
                title: 'Error',
                text: 'Error en la solicitud',
                icon: 'error',
            });
        });
});
