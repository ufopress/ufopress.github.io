document.addEventListener('DOMContentLoaded', function () {
    const agregarProductos = document.getElementById('agregarProductos');
    const modificarDatosEmpresa = document.getElementById('modificarDatosEmpresa');
    const gestionarProductos = document.getElementById('gestionarProductos');
    const agregarUsuarios = document.getElementById('agregarUsuarios');
    const actualizarProductos = document.getElementById('actualizarProductos');
    const gestionarAdministradores = document.getElementById('gestionarAdministradores');
    const gestionarCliente = document.getElementById('gestionarCliente');
    const agregarPromocion = document.getElementById('agregarPromocion');
    const gestionarPromo = document.getElementById('gestionarPromo');
    const ActualizarAdministradores = document.getElementById('ActualizarAdministradores');
    const ActualizarClientes = document.getElementById('ActualizarClientes');
    const actualizarPromocion = document.getElementById('actualizarPromocion');
    const gestionarVentas = document.getElementById('gestionarVentas');
    const Bienvenida = document.getElementById('Bienvenida');

    function abrirVentana(ventana) {
        const ventanas = [
            agregarProductos,
            modificarDatosEmpresa,
            gestionarProductos,
            agregarUsuarios,
            actualizarProductos,
            gestionarAdministradores,
            gestionarCliente,
            agregarPromocion,
            gestionarPromo,
            ActualizarAdministradores,
            ActualizarClientes,
            actualizarPromocion,
            gestionarVentas,
            Bienvenida

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
    document.getElementById('agregarPromotionBtn').addEventListener('click', function () {
        abrirVentana(agregarPromocion); 
    });
    document.getElementById('gestionarPromotionBtn').addEventListener('click', function () {
        abrirVentana(gestionarPromo);
    });
    document.getElementById('gestionarSalesBtn').addEventListener('click', function () {
        abrirVentana(gestionarVentas);
    });
    document.getElementById('inicioBtn').addEventListener('click', function () {
    abrirVentana(Bienvenida);
    });
});