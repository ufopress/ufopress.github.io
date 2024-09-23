//document.addEventListener('DOMContentLoaded', function () {

    const modFormBtn2 = document.getElementById('modFormBtn2');
    const modificarBtn = document.getElementById('modificarBtn');

    modificarBtn.addEventListener('click', function () {

        const nombreempresa = document.getElementById('nombreempresa');
        const direccion = document.getElementById('direccion');
        const rubro = document.getElementById('rubro');
        const logo = document.getElementById('logo');
        const instagram = document.getElementById('instagram');
        const facebook = document.getElementById('facebook');
        const xtwitter = document.getElementById('xtwitter');
        const celular1 = document.getElementById('celular1');
        const celular2 = document.getElementById('celular2');
        const email = document.getElementById('email');

        fetch('./../servicios_admin/recibirDatoEmpresa.php', {
            method: 'GET',
        })
        .then (response => response.json()) 
              
            .then(data => {
                nombreempresa.value = (data[0].NombreEmpresa);
                direccion.value = (data[0].Direccion);
                rubro.value = (data[0].Rubro);
                logo.value = (data[0].Logo);
                instagram.value = (data[0].Instagram);
                facebook.value = (data[0].Facebook);
                xtwitter.value = (data[0].X_Twitter);
                celular1.value = (data[0].Celular1);
                celular2.value = (data[0].Celular2);
                email.value = (data[0].Email);
                /*Cargar datos en cajas de texto*/

            });
    });

    modFormBtn2.addEventListener('click', function () {
        //console.log("No funca");

        const nombreempresa = document.getElementById('nombreempresa').value;
        const direccion = document.getElementById('direccion').value;
        const rubro = document.getElementById('rubro').value;
        const logo = document.getElementById('logo').value;
        const instagram = document.getElementById('instagram').value;
        const facebook = document.getElementById('facebook').value;
        const xtwitter = document.getElementById('xtwitter').value;
        const celular1 = document.getElementById('celular1').value;
        const celular2 = document.getElementById('celular2').value;
        const email = document.getElementById('email').value;

        const formData = new FormData();
        formData.append('nombreempresa', nombreempresa);
        formData.append('direccion', direccion);
        formData.append('rubro', rubro);
        formData.append('logo', logo);
        formData.append('instagram', instagram);
        formData.append('facebook', facebook);
        formData.append('xtwitter', xtwitter);
        formData.append('celular1', celular1);
        formData.append('celular2', celular2);
        formData.append('email', email);


        fetch('./../servicios_admin/editarDatoEmpresa.php', {
            method: 'POST',
            body: formData,
        })
        .then (response => response.json()) 
            .then(data => {
                
                if (data) {
                    result.textContent = 'Cambios Realizados';
                    //console.log(data)
                    // modifi.style.display = 'none';
                    
                } else {
                    //console.log(data)
                    result.textContent = 'Error';
                }
            });
    });
//});