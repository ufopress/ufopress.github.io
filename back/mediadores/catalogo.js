const gestionarProductos = document.getElementById('gestionarProductos');


function setupPagination(totalPages, currentPage) {
    paginationContainer.innerHTML = '';

    // Botón de retroceso
    const prevButton = document.createElement('button');
    prevButton.textContent = '←'; // Flecha izquierda
    prevButton.className = 'pagination-button'; // Añadir clase de estilo
    prevButton.disabled = currentPage === 1; // Deshabilitar si está en la primera página
    prevButton.addEventListener('click', function () {
        loadProducts(currentPage - 1);
    });
    paginationContainer.appendChild(prevButton);

    // Botones de página
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = 'pagination-button'; // Añadir clase de estilo
        if (i === currentPage) {
            pageButton.disabled = true; // Deshabilitar botón de la página actual
        }
        pageButton.addEventListener('click', function () {
            loadProducts(i);
        });
        paginationContainer.appendChild(pageButton);
    }

    // Botón de avance
    const nextButton = document.createElement('button');
    nextButton.textContent = '→'; // Flecha derecha
    nextButton.className = 'pagination-button'; // Añadir clase de estilo
    nextButton.disabled = currentPage === totalPages; // Deshabilitar si está en la última página
    nextButton.addEventListener('click', function () {
        loadProducts(currentPage + 1);
    });
    paginationContainer.appendChild(nextButton);
}



function deleteProduct(historieta) {

    fetch('./../servicios_admin/eliminarProductos.php?isbn=' + historieta)
        .then(response => response.json())
        .then(data => {
            //alert(data);
            resultDiv.textContent = data.success;
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.textContent = 'Error al eliminar productos';
        });
}


function eliminar(ISBN) {   //const elim = document.querySelectorAll(".eliminar");
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
            deleteProduct(ISBN);
            Swal.fire(
                'Eliminado!',
                'El producto ha sido eliminado.',
                'success'
            );
            //document.location.reload();
            setTimeout(loadProducts, 500);
        }
    });
}




//})    

//})
const regUpdateBtn = document.getElementById('regUpdateBtn');//Boton de actualizar
// const gestionarProductos = document.getElementById('gestionarProductos');div de catalogo de productos
const actualizarProdForm = document.getElementById('actualizarProdForm');// formulario dentro del div de actualizacion de productos

const actualizarProductos = document.getElementById('actualizarProductos');// div de actualizacion de productos
const modificarDatosEmpresa = document.getElementById('modificarDatosEmpresa');
const agregarUsuarios = document.getElementById('agregarUsuarios');

function actualizar(ISBN) {
    const formData = new FormData(document.getElementById('actualizarProdForm'));
    formData.append('actualizarProdForm', 'actualizarProdForm');
    actualizarProductos.style.display = 'block';
    modificarDatosEmpresa.style.display = 'none';
    gestionarProductos.style.display = 'none';
    agregarUsuarios.style.display = 'none';

    console.log(ISBN)

    fetch('./../servicios_admin/recibirDatosProducto.php?ISBN=' + ISBN)
        .then(response => response.json())
        .then(data => {
            if (data.product) {
                document.getElementById('isbn2').value = data.product.ISBN;
                document.getElementById('nombre2').value = data.product.Nombre;
                //document.getElementById('imagen2').value = data.product.Imagen;
                document.getElementById('nombrecategoria2').value = data.product.NombreCategoriaCE;
                document.getElementById('editorg2').value = data.product.EditOrg;
                document.getElementById('autores2').value = data.product.Autores;
                document.getElementById('paginas2').value = data.product.Paginas;
                document.getElementById('tamaño2').value = data.product.Tamaño;
                document.getElementById('contenido2').value = data.product.Contenido;
                document.getElementById('formato2').value = data.product.Formato;
                document.getElementById('edad2').value = data.product.Edad;
                document.getElementById('interior2').value = data.product.Interior;
                document.getElementById('precio2').value = data.product.Precio;
            }
        })
};

regUpdateBtn.addEventListener('click', function () { // id del formulario
    const formData = new FormData(document.getElementById('actualizarProdForm'));
    formData.append('actualizarProdForm', 'actualizarProdForm');

    fetch('./../servicios_admin/editarDatosProducto.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Verificar si la respuesta tiene éxito
        if (data.success) {
            result.textContent = 'Cambios Realizados'; // Mensaje de éxito
            loadProducts();
        } else {
            result.textContent = 'Error'; // Mensaje de error genérico
        }
    });
});


loadProducts();



function loadProducts(page = 1) {
    fetch(`./../servicios_admin/catalogo.php?page=${page}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.textContent = 'Error al cargar productos';
                return;
            }

            productContainer.innerHTML = '';
            data.productos.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
        <img src="./${product.Imagen}" alt="${product.Nombre}">
        <div class="text-container">
            <h3>${product.Nombre}</h3>
            <p>${product.Contenido}</p>
            <p>Precio: $${product.Precio}</p>
            <div>
                <button onclick="eliminar(${product.ISBN})">Eliminar</button>
                <button onclick="actualizar(${product.ISBN})">Actualizar</button>
            </div>
        </div>
    `;
                productContainer.appendChild(productElement);
            });


            setupPagination(data.totalPages, data.currentPage);
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.textContent = 'Error al cargar productos';
        });
}