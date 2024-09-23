document.addEventListener('DOMContentLoaded', function () {

    const regFormBtn = document.getElementById('regFormBtn');
    const result = document.getElementById('result');

    regFormBtn.addEventListener('click', function () {
        const isbn = document.getElementById('isbn').value;
        const nombre = document.getElementById('nombre').value;
        const nombrecategoria = document.getElementById('nombrecategoria').value;
        const editorg = document.getElementById('editorg').value;
        const autores = document.getElementById('autores').value;
        const paginas = document.getElementById('paginas').value;
        const tamaño = document.getElementById('tamaño').value;
        const contenido = document.getElementById('contenido').value;
        const formato = document.getElementById('formato').value;
        const edad = document.getElementById('edad').value;
        const interior = document.getElementById('interior').value;
        const precio = document.getElementById('precio').value;


        const formData = new FormData();
        formData.append('isbn', isbn);
        formData.append('nombre', nombre);
        formData.append('nombrecategoria', nombrecategoria);
        formData.append('editorg', editorg);
        formData.append('autores', autores);
        formData.append('paginas', paginas);
        formData.append('tamaño', tamaño);
        formData.append('contenido', contenido);
        formData.append('formato', formato);
        formData.append('edad', edad);
        formData.append('interior', interior);
        formData.append('precio', precio);
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
});