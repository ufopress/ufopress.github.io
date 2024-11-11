document.addEventListener('DOMContentLoaded', function () {
    const formResena = document.getElementById('formResena');
    const resenasLista = document.getElementById('resenasLista');

    // Cargar reseñas al abrir el modal
    document.getElementById('modalResenas').addEventListener('show.bs.modal', cargarResenas);

    // Función para cargar reseñas del cliente
    function cargarResenas() {
        const email = localStorage.getItem('emailUser');
        fetch('./front/php/obtenerResenas.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    let html = '<ul class="list-group">';
                    data.forEach(resena => {
                        html += `
                            <li class="list-group-item">
                                <p><strong>${resena.Fecha}</strong>: ${resena.Contenido}</p>
                                <button class="btn btn-sm btn-primary" onclick="editarResena(${resena.IdResena}, '${resena.Contenido}')">Editar</button>
                                <button class="btn btn-sm btn-danger" onclick="eliminarResena(${resena.IdResena})">Eliminar</button>
                            </li>`;
                    });
                    html += '</ul>';
                    resenasLista.innerHTML = html;
                } else {
                    resenasLista.innerHTML = '<p>No hay reseñas disponibles.</p>';
                }
            })
            .catch(error => console.error('Error al cargar reseñas:', error));
    }

    // Función para agregar o modificar una reseña
    formResena.addEventListener('submit', function (event) {
        event.preventDefault();
        const idResena = document.getElementById('idResena').value;
        const contenido = document.getElementById('contenidoResena').value;
        const email = localStorage.getItem('emailUser');

        fetch('./front/php/gestionarResena.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idResena, contenido, email })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Reseña guardada exitosamente.');
                    formResena.reset(); // Limpiar formulario
                    cargarResenas(); // Recargar lista de reseñas
                } else {
                    alert('Error al guardar reseña.');
                }
            })
            .catch(error => console.error('Error:', error));
    });

    // Función para editar una reseña
    window.editarResena = function (idResena, contenido) {
        document.getElementById('idResena').value = idResena;
        document.getElementById('contenidoResena').value = contenido;
    };

    // Función para eliminar una reseña
    window.eliminarResena = function (idResena) {
        if (confirm('¿Estás seguro de que deseas eliminar esta reseña?')) {
            fetch('./front/php/eliminarResena.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idResena })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Reseña eliminada.');
                        cargarResenas(); // Recargar lista de reseñas
                    } else {
                        alert('Error al eliminar reseña.');
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    };
});
