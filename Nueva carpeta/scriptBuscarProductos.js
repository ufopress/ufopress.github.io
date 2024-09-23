const button = document.getElementById("btn");
const nombre = document.getElementById("nombre");
const contenido = document.getElementById("contenido");

button.addEventListener('click', ()=>{
    let producto = nombre.value;
    fetch('buscarProductos.php',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({nombre:producto})
})
.then (response => response.json())
.then (data => {
    contenido.innerHTML=`<h2>Resultados de la búsqueda:</h2>`;
    const numberID = 99;
    data.forEach(element => {
        contenido.innerHTML+=`
            <div class="ofert-1">
                <div class="product-text">
                    Nombre: ${element["Nombre"]}
                    <a href="#" class="agregar-carrito btn-3" data-id="${numberID}">Agregar</a>
                </div>
            </div>`
    });
})
.catch (error => console.error('Error', error));
});
