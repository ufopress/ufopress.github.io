//document.addEventListener('DOMContentLoaded', function () {
    const agregarProductos = document.getElementById('agregarProductos');
    const regFormBtn = document.getElementById('regFormBtn');
    const result = document.getElementById('result');
    
    regFormBtn.addEventListener('click', function() {
        const formData = new FormData(registrarProdForm);
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
                    Swal.fire({
                        icon: 'success',
                        title: '¡Éxito!',
                        text: 'Producto agregado correctamente',
                        showConfirmButton: false,
                        timer: 1500  // 1.5 segundos
                    }).then(() => {
                        // Cambiar display de agregarProductos a 'none'
                        agregarProductos.style.display = 'none';
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.error || 'No se pudo agregar el producto',
                        showConfirmButton: false,
                        timer: 1500  // 1.5 segundos
                    });
                }
            })            
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al agregar el producto',
                    showConfirmButton: false,
                    timer: 1500  // 1.5 segundos
                });
            });
    });
//});

document.addEventListener("DOMContentLoaded", function() {
    // Realizamos la petición AJAX para obtener las categorías
    fetch('./../servicios_admin/cargarCategorias.php')
        .then(response => response.json())
        .then(data => {
            if (data.categorias) {
                const categoriaSelect = document.getElementById('nombrecategoria');

                data.categorias.forEach(categoria => {
                    const option = document.createElement('option');
                    option.value = categoria.NombreCategoria;
                    option.textContent = categoria.NombreCategoria;
                    categoriaSelect.appendChild(option);
                });
            } else {
                console.error("Error al cargar las categorías");
            }
        })
        .catch(error => console.error('Error al realizar la petición:', error));
});

document.addEventListener("DOMContentLoaded", function() {
    // Realizamos la petición AJAX para obtener las categorías
    fetch('./../servicios_admin/cargarCategorias.php')
        .then(response => response.json())
        .then(data => {
            if (data.categorias) {
                const categoriaSelect = document.getElementById('nombrecategoria2');

                data.categorias.forEach(categoria => {
                    const option = document.createElement('option');
                    option.value = categoria.NombreCategoria;
                    option.textContent = categoria.NombreCategoria;
                    categoriaSelect.appendChild(option);
                });
            } else {
                console.error("Error al cargar las categorías");
            }
        })
        .catch(error => console.error('Error al realizar la petición:', error));
});