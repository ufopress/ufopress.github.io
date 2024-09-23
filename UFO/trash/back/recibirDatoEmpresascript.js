/*document.addEventListener('DOMContentLoaded', function () {*/

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
            headers:{
                'content-type':'application/json'
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network Error');
                }
                return response.json();
            })
            .then(data => {
                nombreempresa.value=(data[0].NombreEmpresa);
                direccion.value=(data[0].Direccion);
                rubro.value=(data[0].Rubro);
                logo.value=(data[0].Logo);
                instagram.value=(data[0].Instagram);
                facebook.value=(data[0].Facebook);
                xtwitter.value=(data[0].X_Twitter);
                celular1.value=(data[0].Celular1);
                celular2.value=(data[0].Celular2);
                email.value=(data[0].Email);
                /*Cargar datos en cajas de texto*/

        });
    });
/*});*/