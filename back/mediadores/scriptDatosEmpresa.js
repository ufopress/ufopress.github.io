//document.addEventListener('DOMContentLoaded', function () {

const modFormBtn2 = document.getElementById('modFormBtn2');
const modificarBtn = document.getElementById('modificarBtn');

modificarBtn.addEventListener('click', function () {
    const nombreempresa = document.getElementById('nombreempresa');
    const rubro = document.getElementById('rubro');
    const logo = document.getElementById('logo');
    const instagram = document.getElementById('instagram');
    const facebook = document.getElementById('facebook');
    const xtwitter = document.getElementById('xtwitter');
    const celular1 = document.getElementById('celular1');
    const celular2 = document.getElementById('celular2');
    const email = document.getElementById('email');
    const calle = document.getElementById('calle');
    const numero = document.getElementById('numero');

    // Fetch data from the backend
    fetch('./../servicios_admin/recibirDatoEmpresa.php', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error(data.error);
            return;
        }

        // Assume the data structure includes the three tables
        const empresaData = data.empresa[0]; // First entry from DATOS_EMPRESA
        const contactoData = data.contacto[0]; // First entry from DATOS_EMPRESA_CONTACTO
        const direccionData = data.direccion[0]; // First entry from DATOS_EMPRESA_DIRECCION

        // Load data into form fields
        nombreempresa.value = empresaData.NombreEmpresa;
        rubro.value = empresaData.Rubro;
        logo.value = empresaData.Logo;
        email.value = empresaData.Email;

        instagram.value = contactoData.Instagram;
        facebook.value = contactoData.Facebook;
        xtwitter.value = contactoData.X_Twitter;
        celular1.value = contactoData.Celular1;
        celular2.value = contactoData.Celular2;

        calle.value = direccionData.Calle;
        numero.value = direccionData.Numero;
    })
    .catch(error => console.error('Error al cargar datos:', error));
});


modFormBtn2.addEventListener('click', function () {
    const nombreempresa = document.getElementById('nombreempresa').value;
    const rubro = document.getElementById('rubro').value;
    const logo = document.getElementById('logo').value;
    const instagram = document.getElementById('instagram').value;
    const facebook = document.getElementById('facebook').value;
    const xtwitter = document.getElementById('xtwitter').value;
    const celular1 = document.getElementById('celular1').value;
    const celular2 = document.getElementById('celular2').value;
    const email = document.getElementById('email').value;
    const calle = document.getElementById('calle').value;
    const numero = document.getElementById('numero').value;

    const formData = new FormData();
    formData.append('nombreempresa', nombreempresa);
    formData.append('rubro', rubro);
    formData.append('logo', logo);
    formData.append('instagram', instagram);
    formData.append('facebook', facebook);
    formData.append('xtwitter', xtwitter);
    formData.append('celular1', celular1);
    formData.append('celular2', celular2);
    formData.append('email', email);
    formData.append('calle', calle);
    formData.append('numero', numero);

    fetch('./../servicios_admin/editarDatoEmpresa.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            Swal.fire({
                title: 'Éxito',
                text: 'Cambios Realizados',
                icon: 'success',
            }).then(() => {
                modificarDatosEmpresa.style.display = 'none'; // Cambia el display a none si es necesario
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: data.error || 'No se pudieron realizar los cambios',
                icon: 'error',
            });
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        Swal.fire({
            title: 'Error',
            text: 'Error en la solicitud',
            icon: 'error',
        });
    });
});

//});