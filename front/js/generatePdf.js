document.getElementById('generatePDF').addEventListener('click', async () => {

    mostrarAlerta('Su descarga comenzara en unos segundos!');

    // Crear el PDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Variable para llevar la posición en Y del PDF
    let startY = 60;  // Ajusta el espacio inicial después del logo
    let pageHeight = pdf.internal.pageSize.height;  // Altura de la página
    let rowHeight = 60;  // Altura de cada fila
    const margin = 10;

    // Obtener el logo de la empresa
    let logoEmpresa = '';
    await fetch(`./front/php/getEmpresa.php`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                logoEmpresa = data[0].Logo;  // Asignar el logo
            } else {
                console.error('No se encontró el logo de la empresa.');
            }
        })
        .catch(error => {
            console.error('Error al cargar el logo de la empresa:', error);
        });

    // Obtener productos (historietas)
    let historietas = [];
    await fetch(`./front/php/getAllProducts.php`)
        .then(response => response.json())
        .then(data => {
            historietas = data;  // Asignar los productos
        })
        .catch(error => {
            console.error('Error al cargar productos:', error);
        });

    // Añadir el logo de la empresa centrado si existe
    if (logoEmpresa) {
        const logoBase64 = await loadImageAsBase64(`../front/${logoEmpresa}`);  // Ruta donde se almacena el logo
        if (logoBase64) {
            pdf.addImage(logoBase64, 'PNG', 80, 10, 50, 30);  // Centrar el logo en el PDF
        }
    }

    startY += 10;  // Mover la posición hacia abajo para comenzar las filas

    // Recorrer los productos y añadirlos uno por uno
    for (let i = 0; i < historietas.length; i++) {
        const imgBase64 = await loadImageAsBase64(`../back/vistas/img/${historietas[i].Imagen}`); // Obtener la imagen desde la ruta de la historieta

        // Añadir la imagen al PDF
        if (imgBase64) {
            pdf.addImage(imgBase64, 'AVIF', margin, startY, 40, 40);  // Imagen en la primera columna
        }

        // Añadir el nombre y precio del producto
        const lineHeight = 10; // Altura entre líneas
        pdf.text(historietas[i].Nombre, margin + 60, startY + 20);  // Nombre del producto
        pdf.text(`$U${historietas[i].Precio}`, margin + 60, startY + 20 + lineHeight);  // Precio debajo

        // Verificar si la siguiente fila excede la altura de la página
        startY += rowHeight;
        if (startY + rowHeight > pageHeight && i < historietas.length - 1) { // Solo agregar página si hay más productos
            pdf.addPage();  // Añadir una nueva página si se alcanza el límite y aún hay productos por mostrar
            startY = 20;  // Reiniciar la posición Y en la nueva página
        }
    }

    // Guardar el PDF
    pdf.save('catalogo_historietas.pdf');
});

// Función para convertir imágenes en base64 desde una ruta
function loadImageAsBase64(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';  // Evitar problemas de CORS
        img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/png'));  // Convertir a base64
        };
        img.onerror = function () {
            resolve('');  // Si hay error, devuelve una cadena vacía
        };
        img.src = url;
    });
}
