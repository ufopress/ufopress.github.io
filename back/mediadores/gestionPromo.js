const gestionarPromo = document.getElementById('gestionarPromo');
const actualizarPromocion = document.getElementById('actualizarPromocion');
const actualizarPromocionForm = document.getElementById('actualizarPromocionForm');
const actualizarPromocionBtn = document.getElementById('actualizarPromocionBtn');
const gestionarPromotionBtn = document.getElementById('gestionarPromotionBtn');

gestionarPromotionBtn.addEventListener('click', function() {
    loadPromo(); 
});

function setupPagination4(totalPages, currentPage) {
    paginationContainer4.innerHTML = '';

    // Botón de retroceso
    const prevButton = document.createElement('button');
    prevButton.textContent = '←'; // Flecha izquierda
    prevButton.className = 'pagination-button'; // Añadir clase de estilo
    prevButton.disabled = currentPage === 1; // Deshabilitar si está en la primera página
    prevButton.addEventListener('click', function () {
        loadPromo(currentPage - 1);
    });
    paginationContainer4.appendChild(prevButton);

    // Botones de página
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = 'pagination-button'; // Añadir clase de estilo
        if (i === currentPage) {
            pageButton.disabled = true; // Deshabilitar botón de la página actual
        }
        pageButton.addEventListener('click', function () {
            loadPromo(i);
        });
        paginationContainer4.appendChild(pageButton);
    }

    // Botón de avance
    const nextButton = document.createElement('button');
    nextButton.textContent = '→'; // Flecha derecha
    nextButton.className = 'pagination-button'; // Añadir clase de estilo
    nextButton.disabled = currentPage === totalPages; // Deshabilitar si está en la última página
    nextButton.addEventListener('click', function () {
        loadPromo(currentPage + 1);
    });
    paginationContainer4.appendChild(nextButton);
}

function deletePromotion(NombreCategoriaCE, FechaInicio, FechaFin) {
    fetch(`./../servicios_admin/eliminarPromo.php?nombreCategoriaCE=${NombreCategoriaCE}&fechaInicio=${FechaInicio}&fechaFin=${FechaFin}`)
        .then(response => response.json())
        .then(data => {
            resultDiv4.textContent = data.success; 
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv4.textContent = 'Error al eliminar promoción';
        });
}

function eliminar4(NombreCategoriaCE, FechaInicio, FechaFin) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            deletePromotion(NombreCategoriaCE, FechaInicio, FechaFin);
            Swal.fire({
                title: 'Eliminado!',
                text: 'La promoción ha sido eliminada.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(loadPromo, 500);
        }
    });
}

function actualizar4(nombreCategoriaCE, fechaInicio, fechaFin) {
    gestionarPromo.style.display = 'none';
    actualizarPromocion.style.display = 'block';

    fetch('./../servicios_admin/recibirDatoPromo.php?nombreCategoriaCE=' + nombreCategoriaCE + '&fechaInicio=' + fechaInicio + '&fechaFin=' + fechaFin)
        .then(response => response.json())
        .then(data => {
            if (data.promocion) {
                document.getElementById('nombrecategoriaCE2').value = data.promocion.NombreCategoriaCE;
                document.getElementById('nombrepromocion2').value = data.promocion.NombrePromocion;
                document.getElementById('porcentaje2').value = data.promocion.Procentaje;
                document.getElementById('fechainicio2').value = data.promocion.FechaInicio;
                document.getElementById('fechafin2').value = data.promocion.FechaFin;
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Promoción no encontrada.',
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al cargar los datos de la promoción.',
            });
        });
}

actualizarPromocionBtn.addEventListener('click', function () {
    const formData = new FormData(actualizarPromocionForm);
    formData.append('actualizarPromocionForm', 'actualizarPromocionForm');
    fetch('./../servicios_admin/editarDatoPromo.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'Promoción actualizada correctamente',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    gestionarPromo.style.display = 'block';
                    loadPromo(); // Aquí deberías tener la función para recargar las promociones
                    actualizarPromocion.style.display = 'none';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: data.error || 'No se pudieron realizar los cambios.',
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al procesar la solicitud.',
            });
        });
});


loadPromo();

function loadPromo(page = 1) {
    fetch(`./../servicios_admin/gestionPromo.php?page=${page}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv4.textContent = 'Error al cargar promociones';
                return;
            }

            productContainer4.innerHTML = '';
            data.promociones.forEach(promos => {
                const promosElement = document.createElement('div');
                promosElement.classList.add('promos');
                promosElement.innerHTML = `
                    <div class="text-container">
                        <h3>${promos.NombrePromocion}</h3>
                        <p>Nombre de Categoría: ${promos.NombreCategoriaCE}</p>
                        <p>Fecha de Inicio: ${promos.FechaInicio}</p>
                        <p>Fecha de Fin: ${promos.FechaFin}</p>
                        <div>
                            <button onclick="eliminar4('${promos.NombreCategoriaCE}', '${promos.FechaInicio}', '${promos.FechaFin}')">Eliminar</button>
                            <button onclick="actualizar4('${promos.NombreCategoriaCE}', '${promos.FechaInicio}', '${promos.FechaFin}')">Actualizar</button>
                        </div>
                    </div>
                `;
                productContainer4.appendChild(promosElement);
            });

            setupPagination4(data.totalPages, data.currentPage);
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv4.textContent = 'Error al cargar promos';
        });
}