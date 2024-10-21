const button = document.getElementById("btn");
const isbn = document.getElementById("isbn");
const nombre = document.getElementById("nombre");
const editorg = document.getElementById("editorg");
const autores = document.getElementById("autores");
const paginas = document.getElementById("paginas");
const tamaño = document.getElementById("tamaño");
const contenido = document.getElementById("contenido");
const formato = document.getElementById("formato");
const edad = document.getElementById("edad");
const interior = document.getElementById("interior");
const precio = document.getElementById("precio");

<<<<<<< HEAD
nombre.addEventListener('input', ()=>{
    let historieta = nombre.value;

    if (historieta === '') {
        contenido.innerHTML = ''; // Si el campo está vacío, borra el contenido del contenedor
        return; // Salir de la función
    }

=======
button.addEventListener('click', ()=>{
    let historieta = nombre.value;
>>>>>>> e98a34eea5c3cd589aa973dc4cb2d552ae3dd4d1
    fetch('buscarProductos.php?nombre='+historieta,{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({isbn:historieta})
})
.then (response => response.json())
<<<<<<< HEAD
.then (data => {    
    contenido.innerHTML=`<h2>Resultados de búsqueda:</h2>`;
    data.forEach(element => {
        
        contenido.innerHTML+=`
        <div class="ofert-1 product-text">
                <p>ISBN: ${element.ISBN}</p>
                <p>Nombre: ${element.Nombre}</p>
                <img src="img/${element.ISBN}.jpeg">
                <p>Editorial Original: ${element.EditOrg}</p>
                <p>Autores: ${element.Autores}</p>
                <p>Tamaño: ${element.Tamaño}</p>
                <p>Contenido: ${element.Contenido}</p>
                <p>Formato: ${element.Formato}</p>
                <p>Edad: ${element.Edad}</p>
                <p>Interior: ${element.Interior}</p>
                <p>Precio: ${element.Precio}</p>
                <hr>
        </div>`
=======
.then (data => {
    contenido.innerHTML=``;
    data.forEach(element => {
        contenido.innerHTML+=`<img src='${element.ISBN}.jpg'">`
        contenido.innerHTML+=`<p>ISBN: ${element.ISBN}</p>`
        contenido.innerHTML+=`<p>Nombre: ${element.Nombre}</p>`
        contenido.innerHTML+=`<p>Editorial Original: ${element.EditOrg}</p>`
        contenido.innerHTML+=`<p>Autores: ${element.Autores}</p>`
        contenido.innerHTML+=`<p>Tamaño: ${element.Tamaño}</p>`
        contenido.innerHTML+=`<p>Contenido: ${element.Contenido}</p>`
        contenido.innerHTML+=`<p>Formato: ${element.Formato}</p>`
        contenido.innerHTML+=`<p>Edad: ${element.Edad}</p>`
        contenido.innerHTML+=`<p>Interior: ${element.Interior}</p>`
        contenido.innerHTML+=`<p>Precio: ${element.Precio}</p>`
        contenido.innerHTML+=`<hr>`
>>>>>>> e98a34eea5c3cd589aa973dc4cb2d552ae3dd4d1
    });
})
.catch (error => console.error('Error', error));
});

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;

        if(e.target.classList.contains('borrar')){
            e.target.parentElement.parentElement.remove();
            elemento = e.target.parentElement.parentElement;
            elementoId = elemento.querySelector('a').getAttribute('data-id');
        }
}

function vaciarCarrito() {
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    return false;
}