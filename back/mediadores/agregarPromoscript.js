const agregarPromocionBtn = document.getElementById('agregarPromocionBtn');

agregarPromocionBtn.addEventListener('click', function() { 
    const formData = new FormData(document.getElementById('registrarPromocionForm')); 
    formData.append('registrarPromocionForm', 'registrarPromocionForm'); 
    
    fetch('./../servicios_admin/agregarPromos.php', { 
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
                title: 'Éxito',
                text: 'Promoción agregada correctamente',
                showConfirmButton: false,
                timer: 1500
            });
        } else { 
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.error,
                showConfirmButton: true
            });
        } 
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un problema: ' + error.message,
            showConfirmButton: true
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Realizamos la petición AJAX para obtener las categorías
    fetch('./../servicios_admin/cargarCategorias.php')
        .then(response => response.json())
        .then(data => {
            if (data.categorias) {
                const categoriaSelect = document.getElementById('nombrecategoriaCE');

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