window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.querySelector('#sidebarToggle');
    const sidenav = document.querySelector('#layoutSidenav_nav');
    
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
        
        // Solo cerrar si está abierto
        if (!isClickInside && document.body.classList.contains('sb-sidenav-toggled')) {
            toggleSidenav();
        }
    });

    // Cierra el sidenav al hacer clic en los botones específicos
    const actionButtons = document.querySelectorAll('#agregarBtn, #agregarUserBtn');
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (document.body.classList.contains('sb-sidenav-toggled')) {
                toggleSidenav();
            }
        });
    });

    function toggleSidenav() {
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }
});


