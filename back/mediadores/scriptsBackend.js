document.addEventListener('DOMContentLoaded', function () {
    const agregarProductos = document.getElementById('agregarProductos');
    const modificarDatosEmpresa = document.getElementById('modificarDatosEmpresa');
    const gestionarProductos = document.getElementById('gestionarProductos');
    const agregarUsuarios = document.getElementById('agregarUsuarios');
    const actualizarProductos = document.getElementById('actualizarProductos');
    const gestionarAdministradores = document.getElementById('gestionarAdministradores');
    const gestionarCliente = document.getElementById('gestionarCliente');
    const actualizarAdministradores = document.getElementById('ActualizarAdministradores');
    const actualizarClientes = document.getElementById('ActualizarClientes');

    function abrirVentana(ventana) {
        const ventanas = [
            agregarProductos,
            modificarDatosEmpresa,
            gestionarProductos,
            agregarUsuarios,
            actualizarProductos,
            gestionarAdministradores,
            gestionarCliente,
            actualizarAdministradores,
            actualizarClientes
        ];

        ventanas.forEach(v => {
            v.style.display = "none";
        });

        ventana.style.display = 'block';
    }

    document.getElementById('agregarBtn').addEventListener('click', function () {
        abrirVentana(agregarProductos);
    });
    document.getElementById('modificarBtn').addEventListener('click', function () {
        abrirVentana(modificarDatosEmpresa);
    });
    document.getElementById('gestionarBtn').addEventListener('click', function () {
        abrirVentana(gestionarProductos);
    });
    document.getElementById('agregarUserBtn').addEventListener('click', function () {
        abrirVentana(agregarUsuarios);
    });
    document.getElementById('regUpdateBtn').addEventListener('click', function () {
        abrirVentana(actualizarProductos);
    });
    document.getElementById('gestionarAdminBtn').addEventListener('click', function () {
        abrirVentana(gestionarAdministradores);
    });
    document.getElementById('gestionarClienteBtn').addEventListener('click', function () {
        abrirVentana(gestionarCliente);
    });
    document.getElementById('actualizarAdminBtn').addEventListener('click', function () {
        abrirVentana(actualizarAdministradores);
    });
    document.getElementById('actualizarClientBtn').addEventListener('click', function () {
        abrirVentana(actualizarClientes);
    });
});
