const gestionarVentas = document.getElementById('gestionarVentas');

function setupPagination5(totalPages, currentPage) {
    paginationContainer5.innerHTML = '';

    const prevButton = document.createElement('button');
    prevButton.textContent = '←';
    prevButton.className = 'pagination-button';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', function () {
        loadTickets(currentPage - 1);
    });
    paginationContainer5.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = 'pagination-button';
        if (i === currentPage) {
            pageButton.disabled = true;
        }
        pageButton.addEventListener('click', function () {
            loadTickets(i);
        });
        paginationContainer5.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = '→';
    nextButton.className = 'pagination-button';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', function () {
        loadTickets(currentPage + 1);
    });
    paginationContainer5.appendChild(nextButton);
}

loadTickets();

function loadTickets(page = 1) {
    fetch(`./../servicios_admin/gestionVenta.php?page=${page}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.error) {
                resultDiv5.textContent = 'Error al cargar los tickets';
                return;
            }

            productContainer5.innerHTML = '';
            data.tickets.forEach(ticket => {
                const ticketElement = document.createElement('div');
                ticketElement.classList.add('ticket');
                ticketElement.innerHTML = `
                    <div class="text-container">
                        <h3>Ticket #${ticket.NroTicket}</h3>
                        <h4>Nombre: ${ticket.NombreUser}</h4>
                        <p>Dirección de Envío: ${ticket.dirEnvio}</p>
                        <p>Fecha: ${ticket.Fecha}</p>
                        <p>Hora: ${ticket.Hora}</p>
                        <p>Producto(s): ${ticket.Contenido}</p>
                        <p>Total: U$ ${ticket.Total}</p>
                    </div>
                `;
                productContainer5.appendChild(ticketElement);
            });

            setupPagination5(data.totalPages, data.currentPage);
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv5.textContent = 'Error al cargar los tickets';
        });
}
