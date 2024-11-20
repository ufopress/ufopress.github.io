let ticketsGlobal = []; // Almacena todos los tickets
let paginaActualTickets = 1; // Página inicial
const ticketsPorPagina = 10; // Máximo de tickets por página
let totalPaginasTickets = 1; // Inicializamos con 1 página, esto se actualizará después

// Función para cargar los tickets
function cargarTickets() {
    fetch('./front/php/getTickets.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: localStorage.getItem('emailUser') }),
    })
        .then((response) => response.json())
        .then((data) => {
            const ticketsLista = document.getElementById('ticketsLista');
            const paginacionContainerTickets = document.getElementById('paginacionContainerTickets');
            ticketsLista.innerHTML = ''; // Limpiar contenido previo
            paginacionContainerTickets.innerHTML = ''; // Limpiar la paginación

            if (data.success && data.tickets.length > 0) {
                ticketsGlobal = data.tickets; // Guardar tickets globalmente
                totalPaginasTickets = Math.ceil(ticketsGlobal.length / ticketsPorPagina); // Calcular el total de páginas
                paginaActualTickets = 1; // Reiniciar a la primera página
                mostrarTicketsPorPagina(); // Mostrar los tickets de la primera página
                crearPaginacionTickets(); // Crear botones de paginación
            } else {
                ticketsLista.innerHTML = '<tr><td colspan="7" class="text-center">No se encontraron tickets.</td></tr>';
            }
        })
        .catch((error) => console.error('Error al cargar los tickets:', error));
}

// Función para mostrar los tickets de la página actual
function mostrarTicketsPorPagina() {
    const ticketsLista = document.getElementById('ticketsLista');
    ticketsLista.innerHTML = ''; // Limpiar contenido previo

    // Calcular el índice de inicio y fin
    const inicio = (paginaActualTickets - 1) * ticketsPorPagina;
    const fin = inicio + ticketsPorPagina;

    // Filtrar los tickets de la página actual
    const ticketsPagina = ticketsGlobal.slice(inicio, fin);

    // Renderizar los tickets
    ticketsPagina.forEach((ticket) => {
        ticketsLista.innerHTML += `
            <tr>
                <td>${ticket.NroTicket}</td>
                <td>${ticket.Fecha}</td>
                <td>${ticket.Hora}</td>
                <td>$U${ticket.Total}</td>
                <td>${ticket.Contenido}</td>
                <td>${ticket.dirEnvio}</td>
                <td>
                    <button class="btn btn-outline-warning btn-sm" onclick="verDetallesTicket(${ticket.NroTicket})">Detalles</button>
                </td>
            </tr>
        `;
    });
}

// Función para crear los controles de paginación con un rango dinámico
function crearPaginacionTickets() {
    const paginacionContainerTickets = document.getElementById('paginacionContainerTickets');
    paginacionContainerTickets.innerHTML = ''; // Limpiar la paginación anterior

    // Crear el contenedor de paginación
    const paginacionRow = document.createElement('div');
    paginacionRow.classList.add('d-flex', 'justify-content-center', 'flex-wrap');

    // Límite de páginas visibles
    const rangoPagina = 2; // Cuántas páginas mostrar a la izquierda y a la derecha de la actual
    let start = Math.max(1, paginaActualTickets - rangoPagina);
    let end = Math.min(totalPaginasTickets, paginaActualTickets + rangoPagina);

    // Si estamos cerca del principio, mostrar la primera página
    if (paginaActualTickets > rangoPagina + 1) {
        const botonPrimera = document.createElement('button');
        botonPrimera.classList.add('btn', 'btn-outline-warning', 'm-1');
        botonPrimera.textContent = '<<';
        botonPrimera.addEventListener('click', () => {
            paginaActualTickets = 1;
            mostrarTicketsPorPagina();
            crearPaginacionTickets();
        });
        paginacionRow.appendChild(botonPrimera);
    }

    // Crear los botones de las páginas dentro del rango
    for (let i = start; i <= end; i++) {
        const botonPagina = document.createElement('button');
        botonPagina.classList.add('btn', 'btn-outline-warning', 'm-1');
        botonPagina.textContent = i;

        // Marcar la página actual
        if (i === paginaActualTickets) {
            botonPagina.classList.add('active');
        }

        botonPagina.addEventListener('click', () => {
            paginaActualTickets = i;
            mostrarTicketsPorPagina();
            crearPaginacionTickets();
        });

        paginacionRow.appendChild(botonPagina);
    }

    // Si estamos cerca del final, mostrar la última página
    if (paginaActualTickets < totalPaginasTickets - rangoPagina) {
        const botonUltima = document.createElement('button');
        botonUltima.classList.add('btn', 'btn-outline-warning', 'm-1');
        botonUltima.textContent = '>>';
        botonUltima.addEventListener('click', () => {
            paginaActualTickets = totalPaginasTickets;
            mostrarTicketsPorPagina();
            crearPaginacionTickets();
        });
        paginacionRow.appendChild(botonUltima);
    }

    // Agregar los controles de paginación al contenedor
    paginacionContainerTickets.appendChild(paginacionRow);
}

// Llamar a la función cuando se abra el modal
document.getElementById('modalTickets').addEventListener('show.bs.modal', cargarTickets);
