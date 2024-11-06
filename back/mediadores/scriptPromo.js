document.getElementById('promocionado').addEventListener('change', function () {
    var promocionadoValue = this.value;  // Obtener el valor seleccionado
    var porcentajeInput = document.getElementById('porcentajedescuento');

    // Si el valor de "Promoción" es '1' (Sí), habilitar el campo de porcentaje
    if (promocionadoValue == '1' || promocionadoValue == 1) {
        porcentajeInput.disabled = false; // Habilitar el campo
    } else {
        porcentajeInput.disabled = true; // Deshabilitar el campo
        porcentajeInput.value = 0; // Establecer el valor del porcentaje a 0
    }
});

// Llamar a la función para que se ejecute al cargar la página
// Esto asegura que el estado inicial se configure correctamente según el valor seleccionado de "Promoción"
document.getElementById('promocionado').dispatchEvent(new Event('change'));

// Opción para actualizar valores cuando el usuario haga clic en el botón "Actualizar"
document.getElementById('regUpdateBtn').addEventListener('click', function() {
    var promocionadoValue = document.getElementById('promocionado').value;
    var porcentajeInput = document.getElementById('porcentajedescuento');

    // Si promocionado es '0', se asegura que porcentajeDescuento sea 0
    if (promocionadoValue == '0') {
        porcentajeInput.value = 0; // Establecer valor a 0 cuando la promoción está deshabilitada
    }
});