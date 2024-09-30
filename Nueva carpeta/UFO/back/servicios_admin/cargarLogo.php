<?php

include "../controladores/conectar.php";

// Verificar si se envió un archivo
if ($_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
    // Obtener información del archivo
    $nombreArchivo = $_FILES['imagen']['name'];
    $tipoArchivo = $_FILES['imagen']['type'];
    $tamanoArchivo = $_FILES['imagen']['size'];
    $archivoTemp = $_FILES['imagen']['tmp_name'];

    // Directorio donde se almacenarán las imágenes cargadas
    $directorioDestino = 'uploads/';

    // Generar un nombre único para el archivo
    $nombreArchivoFinal = uniqid('img_') . '_' . $nombreArchivo;

    // Ruta completa del archivo en el servidor
    $rutaArchivo = $directorioDestino . $nombreArchivoFinal;

    // Mover el archivo del directorio temporal al destino final
    if (move_uploaded_file($archivoTemp, $rutaArchivo)) {
        // Si la carga del archivo fue exitosa, almacenar la ruta en la base de datos
        // Conexión a la base de datos (ajusta los valores según tu configuración)
        $servername = "localhost";
        $username = "tu_usuario";
        $password = "tu_contraseña";
        $dbname = "tu_base_de_datos";

        // Crear conexión
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verificar la conexión
        if ($conn->connect_error) {
            die("Conexión fallida: " . $conn->connect_error);
        }

        // Preparar los datos para la inserción en la base de datos (escapar datos para prevenir inyección SQL)
        $nombreArchivoFinalEscapado = $conn->real_escape_string($nombreArchivoFinal);
        $tipoArchivoEscapado = $conn->real_escape_string($tipoArchivo);
        $tamanoArchivoEscapado = $tamanoArchivo; // No es necesario escapar, es un número entero

        // Sentencia SQL para insertar la ruta del archivo en la base de datos
        $sql = "INSERT INTO archivos (ruta_archivo, tipo_archivo, tamaño_archivo)
                VALUES ('$nombreArchivoFinalEscapado', '$tipoArchivoEscapado', $tamanoArchivoEscapado)";

        if ($conn->query($sql) === TRUE) {
            echo "Registro de la ruta del archivo en la base de datos exitoso.";
        } else {
            echo "Error al registrar la ruta del archivo en la base de datos: " . $conn->error;
        }

        // Cerrar conexión
        $conn->close();
    } else {
        echo 'Error al mover el archivo al directorio de destino.';
    }
} else {
    echo 'Error al cargar la imagen.';
}
?>