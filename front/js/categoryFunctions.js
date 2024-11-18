document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos de categoría dentro del dropdown
    const categoryItems = document.querySelectorAll('.dropdown-item.no-link');

    // Agrega un evento de clic a cada elemento de categoría
    categoryItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Evita el comportamiento por defecto de redireccionar

            // Obtiene el valor de la categoría del atributo data-category
            const categoria = item.getAttribute('data-category');

            cargarProductosPorCategoria(categoria);
        });
    });
});