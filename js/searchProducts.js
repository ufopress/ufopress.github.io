document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('btnNavSearch');
    const productList = document.getElementById('productList');
    const modalTitle = document.querySelector('#modalProduct .modal-title');
    const modalBody = document.querySelector('#modalProduct .modal-body');

    // Escuchar el evento de entrada en el campo de búsqueda
    searchInput.addEventListener('input', function() {
        console.log("HOLA")
    });
});
