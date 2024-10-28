window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.querySelector('#sidebarToggle');
    const sidenav = document.querySelector('#layoutSidenav_nav');
    const body = document.body;

    // Toggle the side navigation
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            toggleSidenav();
        });
    }

    // Cierra el sidenav al hacer clic fuera de él
    document.addEventListener('click', event => {
        const isClickInside = sidenav.contains(event.target) || sidebarToggle.contains(event.target);
        if (!isClickInside && body.classList.contains('sb-sidenav-toggled')) {
            toggleSidenav();
        }
    });

    // Cierra el sidenav al hacer clic en los botones específicos
    const actionButtons = document.querySelectorAll('#agregarBtn, #gestionarBtn, #modificarBtn, #sliderBtn, #agregarUserBtn, #regFormBtn');
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (body.classList.contains('sb-sidenav-toggled')) {
                toggleSidenav();
            }
        });
    });

    function toggleSidenav() {
        body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', body.classList.contains('sb-sidenav-toggled'));
    }
});