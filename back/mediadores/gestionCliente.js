const gestionarCliente = document.getElementById('gestionarCliente');
const actualizarClientes = document.getElementById('ActualizarClientes');
const actualizarClientForm = document.getElementById('actualizarClientForm');
const clientUpdateBtn = document.getElementById('clientUpdateBtn');


function setupPagination(totalPages, currentPage) {
    paginationContainer3.innerHTML = '';

    // Botón de retroceso
    const prevButton = document.createElement('button');
    prevButton.textContent = '←'; // Flecha izquierda
    prevButton.className = 'pagination-button'; // Añadir clase de estilo
    prevButton.disabled = currentPage === 1; // Deshabilitar si está en la primera página
    prevButton.addEventListener('click', function () {
        loadClients(currentPage - 1);
    });
    paginationContainer3.appendChild(prevButton);

    // Botones de página
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = 'pagination-button'; // Añadir clase de estilo
        if (i === currentPage) {
            pageButton.disabled = true; // Deshabilitar botón de la página actual
        }
        pageButton.addEventListener('click', function () {
            loadClients(i);
        });
        paginationContainer3.appendChild(pageButton);
    }

    // Botón de avance
    const nextButton = document.createElement('button');
    nextButton.textContent = '→'; // Flecha derecha
    nextButton.className = 'pagination-button'; // Añadir clase de estilo
    nextButton.disabled = currentPage === totalPages; // Deshabilitar si está en la última página
    nextButton.addEventListener('click', function () {
        loadClients(currentPage + 1);
    });
    paginationContainer3.appendChild(nextButton);
}

function deleteProduct(cliente) {

    fetch('./../servicios_admin/eliminarCliente.php?idcliente=' + cliente)
        .then(response => response.json())
        .then(data => {
            //alert(data);
            resultDiv3.textContent = data.success;
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv3.textContent = 'Error al eliminar clientes';
        });
}


function eliminar(IdCliente) {   //const elim = document.querySelectorAll(".eliminar");
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
            deleteProduct(IdCliente);
            Swal.fire({
                title: 'Eliminado!',
                text: 'El cliente ha sido eliminado.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
        });
            //document.location.reload();
            setTimeout(loadClients, 500);
        }
    });
}

function actualizar(IdCliente) {
    gestionarCliente.style.display = 'none';
    actualizarClientes.style.display = 'block';

    console.log(IdCliente);

    fetch('./../servicios_admin/recibirDatoCliente.php?IdCliente=' + IdCliente)
    .then(response => response.json())
    .then(data => {
        if (data.cliente) {
            document.getElementById('nombreuser3').value = data.cliente.NombreUser;
            document.getElementById('emailusuario3').value = data.cliente.Email;
            document.getElementById('telefono3').value = data.cliente.NroTelefono;
            document.getElementById('nacionalidad3').value = data.cliente.Nacionalidad;
            document.getElementById('anonacimiento3').value = data.cliente.AñoNacimiento;
        }
    })
};


clientUpdateBtn.addEventListener('click', function () {
    const formData = new FormData(actualizarClientForm); // Usar la constante para el formulario
    formData.append('actualizarClientForm', 'actualizarClientForm');

    fetch('./../servicios_admin/editarDatoCliente.php', {
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
                // Mostrar la sección de gestión y cargar clientes actualizados
                gestionarCliente.style.display = 'block';
                loadClients(); // Recargar los clientes
                // Cerrar la ventana de actualización si es necesario
                actualizarClientes.style.display = 'none';
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



loadClients();

function loadClients(page = 1) {
    fetch(`./../servicios_admin/gestionCliente.php?page=${page}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv3.textContent = 'Error al cargar clientes';
                return;
            }

            productContainer3.innerHTML = '';
            data.clientes.forEach(cliente => {
                const clienteElement = document.createElement('div');
                clienteElement.classList.add('cliente');
                clienteElement.innerHTML = `
                    <div class="text-container">
                        <h3>${cliente.NombreUser}</h3>
                        <p>Email: ${cliente.Email}</p>
                        <p>Teléfono: ${cliente.NroTelefono}</p>
                        <p>Nacionalidad: ${cliente.Nacionalidad}</p>
                        <p>Año de Nacimiento: ${cliente.AñoNacimiento}</p>
                        <div>
                            <button onclick="eliminar(${cliente.IdCliente})">Eliminar</button>
                            <button onclick="actualizar(${cliente.IdCliente})">Actualizar</button>
                        </div>
                    </div>
                `;
                productContainer3.appendChild(clienteElement);
            });

            setupPagination(data.totalPages, data.currentPage);
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv3.textContent = 'Error al cargar clientes';
        });
}
