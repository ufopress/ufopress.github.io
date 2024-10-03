document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el tipo de usuario en el localStorage es "ADM" o "VEN"
    const tipoUsuario = localStorage.getItem('tipoUsuario');

    if (tipoUsuario === 'ADM' || tipoUsuario === "VEN") {
        // Seleccionar el navbar donde se agregarán las opciones
        const navBar = document.getElementById('navbarSupportedContent');

        // Crear un nuevo elemento de lista (li) para las opciones de administración
        const adminDropdown = document.createElement('li');
        adminDropdown.classList.add('nav-item', 'dropdown');

        // Crear el enlace del dropdown para "Administración" con el submenú a la derecha
        adminDropdown.innerHTML = `
            <a class="nav-link dropdown-toggle" href="#" id="adminDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administración
            </a>
            <ul class="dropdown-menu" aria-labelledby="adminDropdown">
                <li><a class="dropdown-item" href="#" id="gestionUsuarios">Gestión de Usuarios</a></li>

                <li class="dropdown-submenu"> <!-- Usamos una clase personalizada para manejar el submenú -->
                    <a class="dropdown-item dropdown-toggle" href="#" id="gestionProductos" aria-expanded="false">
                        Gestión de Productos
                    </a>
                    <ul class="dropdown-menu submenu" aria-labelledby="gestionProductos" style="display: none; position: absolute; left: 100%; top: 0;">
                        <li><a class="dropdown-item" href="#">Agregar producto</a></li>
                        <li><a class="dropdown-item" href="#">Eliminar producto</a></li>
                        <li><a class="dropdown-item" href="#">Modificar producto</a></li>
                    </ul>
                </li>

                <li><a class="dropdown-item" href="#">Reportes</a></li>
            </ul>
        `;

        // Agregar el dropdown al navbar
        navBar.querySelector('ul').appendChild(adminDropdown);

        // Evento para desplegar el submenú a la derecha cuando se pasa el mouse
        const gestionProductosLink = adminDropdown.querySelector('#gestionProductos');
        const productosSubmenu = adminDropdown.querySelector('.submenu');

        // Mostrar el submenú cuando el mouse esté sobre "Gestión de Productos"
        gestionProductosLink.addEventListener('mouseenter', function () {
            productosSubmenu.style.display = 'block';
        });

        // Ocultar el submenú cuando el mouse salga de "Gestión de Productos"
        gestionProductosLink.addEventListener('mouseleave', function () {
            productosSubmenu.style.display = 'none';
        });

        // Mantener el submenú visible si el mouse está sobre él
        productosSubmenu.addEventListener('mouseenter', function () {
            productosSubmenu.style.display = 'block';
        });

        productosSubmenu.addEventListener('mouseleave', function () {
            productosSubmenu.style.display = 'none';
        });
    }
});
