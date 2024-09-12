document.addEventListener('DOMContentLoaded', function () {

    const agregarProductos = document.getElementById('agregarProductos');
    const agregarBtn = document.getElementById('agregarBtn');

    function abrirRegWindow() {
        agregarProductos.style.display = 'block';
    }

    function cerrarRegWindow() {
        agregarProductos.style.display = 'none';
    }


    agregarBtn.addEventListener('click', function () {
        abrirRegWindow();
    });

});
