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
        modificarDatosEmpresa.style.display = 'none';
        eliminarProductos.style.display = 'none';
    });

});

document.addEventListener('DOMContentLoaded', function () {


    const modificarDatosEmpresa = document.getElementById('modificarDatosEmpresa');
    const modificarBtn = document.getElementById('modificarBtn');

    function abrirModificar() {
        modificarDatosEmpresa.style.display = 'block';
    }

    function cerrarModificar() {
        modificarDatosEmpresa.style.display = 'none';
    }


    modificarBtn.addEventListener('click', function () {
        abrirModificar();
        agregarProductos.style.display = 'none';
        eliminarProductos.style.display = 'none';
    });

});

document.addEventListener('DOMContentLoaded', function () {


    const eliminarProductos = document.getElementById('eliminarProductos');
    const eliminarBtn = document.getElementById('eliminarBtn');

    function abrirEliminar() {
        eliminarProductos.style.display = 'block';
    }

    function cerrarEliminar() {
        eliminarProductos.style.display = 'none';
    }


    eliminarBtn.addEventListener('click', function () {
        abrirEliminar();
        agregarProductos.style.display = 'none';
        modificarDatosEmpresa.style.display = 'none';
        
    });

});
