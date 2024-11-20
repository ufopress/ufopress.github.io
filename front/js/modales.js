document.addEventListener('DOMContentLoaded', () => {
    const modalConfirmarPago = document.getElementById('modalConfirmarPago');
    const modalCarrito = document.getElementById('cartModal');

    // Restaurar el foco al cerrar los modales
    modalConfirmarPago.addEventListener('hidden.bs.modal', () => {
        document.body.removeAttribute('inert'); // Si usaste `inert`, asegúrate de limpiarlo
        modalConfirmarPago.removeAttribute('aria-hidden');
    });

    modalCarrito.addEventListener('hidden.bs.modal', () => {
        document.body.removeAttribute('inert');
        modalCarrito.removeAttribute('aria-hidden');
    });

    // Mover el foco dentro del modal cuando se abra
    modalConfirmarPago.addEventListener('shown.bs.modal', () => {
        modalConfirmarPago.querySelector('#direccionEnvio').focus();
    });

    modalCarrito.addEventListener('shown.bs.modal', () => {
        modalCarrito.querySelector('#cartItemsContainer').focus();
    });
});
