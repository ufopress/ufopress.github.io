document.addEventListener('DOMContentLoaded', function () {
    const formResena = document.getElementById('formResena');
    const resenasLista = document.getElementById('resenasLista');

    // Cargar reseñas al abrir el modal
    document.getElementById('modalResenas').addEventListener('show.bs.modal', cargarResenas);

    // Función para cargar reseñas del cliente
    function cargarResenas() {
        const email = localStorage.getItem('emailUser');
        fetch('./front/php/gestionarResena.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(response => response.json())
            .then(data => {
                // Verificamos si el response tiene `success` como `true`
                if (data.success && data.data.length > 0) {
                    let html = '<ul class="list-group">';
                    data.data.forEach(resena => {
                        html += `
                            <li class="list-group-item">
                                <p><strong>${resena.Fecha}</strong>: ${resena.Contenido}</p>
                                <button class="btn btn-sm btn-primary" onclick="editarResena(${resena.IdReseña}, '${resena.Contenido}')">Editar</button>
                                <button class="btn btn-sm btn-danger" onclick="eliminarResena(${resena.IdReseña})">Eliminar</button>
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
                    mostrarAlerta('Reseña guardada exitosamente!', 'success');

                    // Redirigir después de unos segundos
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500); // 1500 milisegundos = 1.5 segundos
                } else {
                    mostrarAlerta('Error al guardar reseña: ', 'error');
                }
            })
            .catch(error => console.error('Error:', error));
    });

    // Función para editar una reseña
    window.editarResena = function (idResena, contenido) {
        // Pedir al usuario que confirme el nuevo contenido para la reseña
        const nuevoContenido = prompt("Editar contenido de la reseña:", contenido);

        if (nuevoContenido !== null) { // Si el usuario confirma la edición
            fetch('./front/php/editarResena.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idResena, contenido: nuevoContenido })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        mostrarAlerta('Reseña actualizada correctamente!', 'success');

                        // Redirigir después de unos segundos
                        setTimeout(() => {
                            window.location.href = 'index.html';
                        }, 1500); // 1500 milisegundos = 1.5 segundos
                    } else {
                        mostrarAlerta('Error al actualizar la reseña', 'error');
                    }
                })
                .catch(error => console.error('Error al actualizar la reseña:', error));
        }
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
                        mostrarAlerta('Reseña eliminada correctamente!', 'success');

                        // Redirigir después de unos segundos
                        setTimeout(() => {
                            window.location.href = 'index.html';
                        }, 1500); // 1500 milisegundos = 1.5 segundos
                    } else {
                        mostrarAlerta('Error al eliminar reseña', 'error');
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    };
});
