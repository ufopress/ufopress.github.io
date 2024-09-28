//document.addEventListener('DOMContentLoaded', function () {

    const regFormBtn = document.getElementById('regFormBtn');
    const result = document.getElementById('result');

    regFormBtn.addEventListener('click', function() {              //id del formulario
        const formData = new FormData(document.getElementById('registrarProdForm'));
        formData.append('registrarProdForm', 'registrarProdForm');
        fetch('./../servicios_admin/agregarProductos.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network Error');
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    result.textContent = 'Producto agregado';

                } else {
                    result.textContent = 'Error';
                }
            });
    });
//});