window.addEventListener("load", (event) => {
    fetch('cargarProductos.php', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Manipulación del DOM aquí, dentro del segundo then
        const contenido = document.querySelector('#lista-2'); // Asumiendo que #contenido es el contenedor donde se mostrarán los productos
        
        contenido.style.display = "grid";
        contenido.innerHTML = '<h2>Productos:</h2><br><div class="product-content"></div>'; // Inicializar el contenedor product-content

        const productContent = document.querySelector('.product-content'); // Seleccionar el contenedor de productos
        data.forEach(element => {
            let productHtml = `
                <div class="ofert-1">
                    <img src="img/${element.ISBN}.webp">
                    <div class="product-txt">
                        <h3>Nombre: ${element.ISBN}</h3>
                        <p>Edad: ${element.Edad}</p>
                        <p class="precio">$U650</p>
                        <a href="#" class="agregar-carrito btn-3" id="${element.ISBN}">Agregar</a>
                    </div>
                </div>
            `;

            productContent.innerHTML += productHtml;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});