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
                <p>Precio: $${product.Precio}</p>
                <img src="./../servicios_admin/${product.Imagen}" alt="${product.Nombre}" class="productimg">
                <button onclick="editProduct(${product.ISBN})">Editar</button>
                <button onclick="deleteProduct(${product.ISBN})">Eliminar</button>
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
loadProducts();