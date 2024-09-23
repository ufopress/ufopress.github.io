//document.addEventListener('DOMContentLoaded', function () {

    const modFormBtn2 = document.getElementById('modFormBtn2');
    const result = document.getElementById('result');

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
                if (data.success) {
                    result.textContent = 'Cambios Realizados';
                    // modifi.style.display = 'none';

                } else {
                    result.textContent = 'Error';
                }
            });
        });
    //});