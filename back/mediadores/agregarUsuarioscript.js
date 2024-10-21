const regUserBtn = document.getElementById('regUserBtn');
const result2 = document.getElementById('result');

regUserBtn.addEventListener('click', function() {              //id del formulario
    const formData2 = new FormData(document.getElementById('registrarUserForm'));
    formData2.append('registrarUserForm', 'registrarUserForm');
    fetch('./../servicios_admin/agregarUsuarios.php', {
        method: 'POST',
        body: formData2,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network Error');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                result2.textContent = 'Usuario agregado';

            } else {
                result2.textContent = data.error;
            }
        });
});