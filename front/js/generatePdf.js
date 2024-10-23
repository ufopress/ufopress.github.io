document.getElementById('generatePDF').addEventListener('click', async () => {
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
        const logoBase64 = await loadImageAsBase64(`./front/${logoEmpresa}`);  // Ruta donde se almacena el logo
        if (logoBase64) {
            pdf.addImage(logoBase64, 'PNG', 80, 10, 50, 30);  // Centrar el logo en el PDF
            startY += 0;  // Ajustar la posición inicial de Y después del logo
        }
    }

    // Dibujar la cabecera de la tabla
    pdf.setFontSize(12);
    pdf.text('Imagen', margin + 10, startY);
    pdf.text('Nombre', margin + 60, startY);
    pdf.text('Precio', margin + 140, startY);

    startY += 10;  // Mover la posición hacia abajo para comenzar las filas

    // Recorrer los productos y añadirlos uno por uno
    for (let i = 0; i < historietas.length; i++) {
        const imgBase64 = await loadImageAsBase64(`./front/${historietas[i].Imagen}`); // Obtener la imagen desde la ruta de la historieta

        // Añadir la imagen al PDF
        if (imgBase64) {
            pdf.addImage(imgBase64, 'PNG', margin, startY, 40, 40);  // Imagen en la primera columna
        }

        // Añadir el nombre y precio del producto
        pdf.text(historietas[i].Nombre, margin + 60, startY + 20);  // Nombre del producto
        pdf.text(`$U${historietas[i].Precio}`, margin + 140, startY + 20);  // Precio del producto

        // Verificar si la siguiente fila excede la altura de la página
        startY += rowHeight;
        if (startY + rowHeight > pageHeight) {
            pdf.addPage();  // Añadir una nueva página si se alcanza el límite
            startY = 20;  // Reiniciar la posición Y en la nueva página

            // Redibujar la cabecera de la tabla en la nueva página
            pdf.text('Imagen', margin + 10, startY);
            pdf.text('Nombre', margin + 60, startY);
            pdf.text('Precio', margin + 140, startY);
            startY += 10;  // Espacio para las filas
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
