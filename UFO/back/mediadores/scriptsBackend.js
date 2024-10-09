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
        gestionarProductos.style.display = 'none';
        agregarUsuarios.style.display = 'none';
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
        gestionarProductos.style.display = 'none';
        agregarUsuarios.style.display = 'none';
    });

});

document.addEventListener('DOMContentLoaded', function () {


    const gestionarProductos = document.getElementById('gestionarProductos');
    const gestionarBtn = document.getElementById('gestionarBtn');

    function abrirGestionar() {
        gestionarProductos.style.display = 'block';
    }

    function cerrarGestionar() {
        gestionarProductos.style.display = 'none';
    }


    gestionarBtn.addEventListener('click', function () {
        abrirGestionar();
        agregarProductos.style.display = 'none';
        modificarDatosEmpresa.style.display = 'none';
        agregarUsuarios.style.display = 'none';
        
    });

});

document.addEventListener('DOMContentLoaded', function () {

    const agregarUsuarios = document.getElementById('agregarUsuarios');
    const agregarUserBtn = document.getElementById('agregarUserBtn');

    function abrirRegWindow() {
        agregarUsuarios.style.display = 'block';
    }

    function cerrarRegWindow() {
        agregarUsuarios.style.display = 'none';
    }


    agregarUserBtn.addEventListener('click', function () {
        abrirRegWindow();
        agregarProductos.style.display = 'none';
        modificarDatosEmpresa.style.display = 'none';
        gestionarProductos.style.display = 'none';
    });

});