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
                <button id=${product.ISBN}>Eliminar</button>
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
        pageButton.addEventListener('click', function() {
            loadProducts(i);
        });
        paginationContainer.appendChild(pageButton);
    }
}


function deleteProduct(historieta) {
    
    fetch('./../servicios_administracion/eliminarProductos.php', {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({isbn:historieta})
    })
    .then(response => response.json())
    .then(data => {
        alert(data);
            resultDiv.textContent = data.success;
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.textContent = 'Error al eliminar productos';
        });
    }

            
    const elim = document.getElementsByTagName('button');

    console.log(elim)
    
    elim[0].addEventListener('click', (event) => {
        alert(event.id)
    
    })
    
    




loadProducts();
