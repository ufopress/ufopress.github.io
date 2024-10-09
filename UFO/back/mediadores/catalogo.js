const gestionarProductos = document.getElementById('gestionarProductos');

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
                <h3>${product.Nombre}</h3>
                <p>${product.Contenido}</p>
                <img src="./${product.Imagen}" alt="${product.Nombre}">
                <p>Precio: $${product.Precio}</p>
                <button class='eliminar' id=${product.ISBN}>Eliminar</button>
                <button class='modificar' id=${product.ISBN}>Modificar</button>
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

function setupPagination(totalPages, currentPage) {
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.disabled = true;

        }
        pageButton.addEventListener('click', function () {
            loadProducts(i);
        });
        paginationContainer.appendChild(pageButton);
    }
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


gestionarProductos.addEventListener('click', function (e) {
    //const elim = document.querySelectorAll(".eliminar");
    //elim.forEach((e) => {

        if (e.target.className === "eliminar") {
            const productId = e.target.id;
        
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
                    deleteProduct(productId);
                    loadProducts();
        
                    Swal.fire(
                        'Eliminado!',
                        'El producto ha sido eliminado.',
                        'success'
                    );
                }
            });
        }

    //e.addEventListener("click", ()=>{
    if (e.target.className === "modificar") {
        console.log(e.target.id)
        //deleteProduct(e.target.id)
        loadProducts();
    }
});


//})    

//})







loadProducts();