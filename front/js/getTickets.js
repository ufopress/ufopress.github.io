function cargarTickets() {
    fetch('./front/php/getTickets.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: localStorage.getItem('emailUser') }) // Enviar el email del usuario
    })
        .then(response => response.json())
        .then(data => {
            const ticketsLista = document.getElementById('ticketsLista');
            ticketsLista.innerHTML = ''; // Limpiar contenido previo

            if (data.success && data.tickets.length > 0) {
                data.tickets.forEach(ticket => {
                    ticketsLista.innerHTML += `
                <tr>
                    <td>${ticket.NroTicket}</td>
                    <td>${ticket.Fecha}</td>
                    <td>${ticket.Hora}</td>
                    <td>$U${ticket.Total}</td>
                    <td>${ticket.Contenido}</td>
                    <td>${ticket.dirEnvio}</td>
                    <td>
                    <button class="btn btn-info btn-sm" onclick="verDetallesTicket(${ticket.NroTicket})">Detalles</button>
                    </td>
                </tr>
            `;
                });
            } else {
                ticketsLista.innerHTML = '<tr><td colspan="7" class="text-center">No se encontraron tickets.</td></tr>';
            }
        })
        .catch(error => console.error('Error al cargar los tickets:', error));
}

// Llamar a la función cuando se abra el modal
document.getElementById('modalTickets').addEventListener('show.bs.modal', cargarTickets);
