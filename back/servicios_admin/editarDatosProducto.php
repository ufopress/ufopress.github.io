<?php
include "../controladores/conectar.php";

header('content-type:application/json');

if (isset($_POST['isbn2'])) {
    $isbn2 = $_POST['isbn2'];
    $nombre2 = $_POST['nombre2'];
    $nombrecategoria2 = $_POST['nombrecategoria2'];
    $editorg2 = $_POST['editorg2'];
    $autores2 = $_POST['autores2'];
    $paginas2 = $_POST['paginas2'];
    $tamaño2 = $_POST['tamaño2'];
    $contenido2 = $_POST['contenido2'];
    $formato2 = $_POST['formato2'];
    $edad2 = $_POST['edad2'];
    $interior2 = $_POST['interior2'];
    $precio2 = $_POST['precio2'];
    $promocionado = $_POST['promocionado'];
    $porcentajedescuento = $_POST['porcentajedescuento'];

    $imagen = null; // Inicializa la variable de imagen

    // Verifica si se ha subido una nueva imagen
    if (isset($_FILES['imagen2']) && $_FILES['imagen2']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = '../vistas/img/';
        
        // Usar el ISBN como nombre de archivo y agregar la extensión .png
        $fileName = $isbn2 . '.png';
        $uploadFile = $uploadDir . $fileName;

        // Mueve el archivo y guarda solo el nombre
        if (move_uploaded_file($_FILES['imagen2']['tmp_name'], $uploadFile)) {
            $imagen = $fileName; // Guarda el nombre de archivo
        } else {
            echo json_encode(['error' => 'Error al subir la imagen']);
            exit;
        }
    }

    try {
        // Prepara la consulta
        $sql = "UPDATE HISTORIETA SET 
                NombreCategoriaCE=?, Nombre=?, EditOrg=?, Autores=?, Paginas=?, Tamaño=?, Contenido=?, Formato=?, Edad=?, Interior=?, Precio=?, Promocionado=?, PorcentajeDescuento=?";

        // Si se subió una nueva imagen, incluirla en la consulta
        if ($imagen) {
            $sql .= ", Imagen=?";
        }

        $sql .= " WHERE ISBN=?";
        $res = $conexion->prepare($sql);

        // Crea el array de parámetros
        $params = [
            $nombrecategoria2,
            $nombre2,
            $editorg2,
            $autores2,
            $paginas2,
            $tamaño2,
            $contenido2,
            $formato2,
            $edad2,
            $interior2,
            $precio2,
            $promocionado,
            $porcentajedescuento
        ];

        // Si hay una nueva imagen, añadirla a los parámetros
        if ($imagen) {
            $params[] = $imagen; // Agrega el nombre de la imagen
        }

        $params[] = $isbn2; // Agrega el ISBN al final

        // Ejecuta la consulta
        $reg = $res->execute($params);

        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}
?>