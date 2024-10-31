const gestionarAdministradores = document.getElementById('gestionarAdministradores');
const actualizarAdministradores = document.getElementById('ActualizarAdministradores');
const actualizarUserForm = document.getElementById('actualizarUserForm');
const userUpdateBtn = document.getElementById('userUpdateBtn'); 

function setupPagination(totalPages, currentPage) {
    const paginationContainer2 = document.getElementById('paginationContainer2');
    paginationContainer2.innerHTML = ''; // Limpiar el contenedor de paginación

    // Botón de retroceso
    const prevButton = document.createElement('button');
    prevButton.textContent = '←'; // Flecha izquierda
    prevButton.className = 'pagination-button'; // Añadir clase de estilo
    prevButton.disabled = currentPage === 1; // Deshabilitar si está en la primera página
    prevButton.addEventListener('click', function () {
        loadAdmins(currentPage - 1);
    });
    paginationContainer2.appendChild(prevButton);

    // Botones de página
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = 'pagination-button'; // Añadir clase de estilo
        if (i === currentPage) {
            pageButton.disabled = true; // Deshabilitar botón de la página actual
        }
        pageButton.addEventListener('click', function () {
            loadAdmins(i);
        });
        paginationContainer2.appendChild(pageButton);
    }

    // Botón de avance
    const nextButton = document.createElement('button');
    nextButton.textContent = '→'; // Flecha derecha
    nextButton.className = 'pagination-button'; // Añadir clase de estilo
    nextButton.disabled = currentPage === totalPages; // Deshabilitar si está en la última página
    nextButton.addEventListener('click', function () {
        loadAdmins(currentPage + 1);
    });
    paginationContainer2.appendChild(nextButton);
}


function deleteProduct(administrador) {

    fetch('./../servicios_admin/eliminarAdmin.php?idusuario=' + administrador)
        .then(response => response.json())
        .then(data => {
            //alert(data);
            resultDiv2.textContent = data.success;
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv2.textContent = 'Error al eliminar administradores';
        });
}


function eliminar(IdUsuario) {   //const elim = document.querySelectorAll(".eliminar");
    //elim.forEach((e) => {


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
            deleteProduct(IdUsuario);
            Swal.fire({
                title: 'Eliminado!',
                text: 'El administrador ha sido eliminado.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
            //document.location.reload();
            setTimeout(loadAdmins, 500);
        }
    });
}
//})    
//})

function actualizar(IdUsuario) {
    gestionarAdministradores.style.display = 'none';
    actualizarAdministradores.style.display = 'block';

    console.log(IdUsuario);

    fetch('./../servicios_admin/recibirDatoAdmin.php?IdUsuario=' + IdUsuario)
        .then(response => response.json())
        .then(data => {
            if (data.admin) {
                document.getElementById('nombreusuario2').value = data.admin.Nombre;
                document.getElementById('apellido2').value = data.admin.Apellido;
                document.getElementById('emailusuario2').value = data.admin.Email;
                document.getElementById('telefono2').value = data.admin.NroTelefono;
                document.getElementById('fechanacimiento2').value = data.admin.FechaNacimiento;
            }
        })
};

userUpdateBtn.addEventListener('click', function () {
    const formData = new FormData(actualizarUserForm); // Usar la constante para el formulario
    formData.append('actualizarUserForm', 'actualizarUserForm');

    fetch('./../servicios_admin/editarDatoAdmin.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Verificar si la respuesta tiene éxito
        if (data.success) {
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Cambios Realizados',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                // Mostrar la sección de gestión y cargar administradores actualizados
                gestionarAdministradores.style.display = 'block';
                loadAdmins(); // Recargar los administradores
                // Cerrar la ventana de actualización si es necesario
                actualizarAdministradores.style.display = 'none';
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message || 'No se pudieron realizar los cambios.',
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al procesar la solicitud.', // Mensaje de error genérico
        });
    });
});

loadAdmins();



function loadAdmins(page = 1) {
    fetch(`./../servicios_admin/gestionAdmin.php?page=${page}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv2.textContent = 'Error al cargar administradores';
                return;
            }

            const productContainer2 = document.getElementById('productContainer2');
            productContainer2.innerHTML = ''; // Limpiar el contenedor de administradores
            data.administradores.forEach(administrador => {
                const administradorElement = document.createElement('div');
                administradorElement.classList.add('administrador');
                administradorElement.innerHTML = `
                    <div class="text-container">
                        <h3>${administrador.Nombre}</h3>
                        <p>${administrador.Apellido}</p>
                        <div>
                            <button onclick="eliminar(${administrador.IdUsuario})">Eliminar</button>
                            <button onclick="actualizar(${administrador.IdUsuario})">Actualizar</button>
                        </div>
                    </div>
                `;
                productContainer2.appendChild(administradorElement);
            });

            setupPagination(data.totalPages, data.currentPage); // Configurar la paginación
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv2.textContent = 'Error al cargar administradores';
        });
}
