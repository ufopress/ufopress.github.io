<?php
include "../controladores/conectar.php";

header('content-type:application/json');

$isbn = $_POST['isbn'];
$nombre = $_POST['nombre'];
$imagen = '1';
$nombrecategoria = $_POST['nombrecategoria'];
$editorg = $_POST['editorg'];
$autores = $_POST['autores'];
$paginas = $_POST['paginas'];
$tamaño = $_POST['tamaño'];
$contenido = $_POST['contenido'];
$formato = $_POST['formato'];
$edad = $_POST['edad'];
$interior = $_POST['interior'];
$precio = $_POST['precio'];

if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = '../vistas/img/';
    $fileName = $isbn . '.png';
    $uploadFile = $uploadDir . $fileName;

    if (move_uploaded_file($_FILES['imagen']['tmp_name'], $uploadFile)) {
        // Guarda solo el nombre de la imagen
        $imagen = $fileName;
        // Puedes retornar $imagen si lo necesitas
    } else {
        echo json_encode(['error' => 'Error al subir la imagen']);
        exit;
    }
} elseif (isset($_FILES['imagen']) && $_FILES['imagen']['error'] !== UPLOAD_ERR_NO_FILE) {
    echo json_encode(['error' => 'Error al subir la imagen']);
    exit;
}

try {

$stmt = $conexion->prepare("INSERT INTO HISTORIETA 
(ISBN, Nombre, NombreCategoriaCE, Imagen, EditOrg, Autores, Paginas, Tamaño, Contenido, Formato, Edad, Interior, Precio) VALUES
(?,?,?,?,?,?,?,?,?,?,?,?,?)");
/*
$stmt->bindParam(':isbn', );
$stmt->bindParam(':nombre', );
$stmt->bindParam(':nombrecategoria', );
$stmt->bindParam(':imagen', );
$stmt->bindParam(':editorg', );
$stmt->bindParam(':autores', );
$stmt->bindParam(':paginas', );
$stmt->bindParam(':tamaño', );
$stmt->bindParam(':contenido', );
$stmt->bindParam(':formato', );
$stmt->bindParam(':edad', );
$stmt->bindParam(':interior', );
$stmt->bindParam(':precio', );
*/
    $stmt->execute([$isbn, $nombre, $nombrecategoria, $imagen, $editorg, $autores, $paginas, $tamaño, $contenido, $formato, $edad, $interior, $precio]);
    echo json_encode(['success' => 'Producto creado correctamente']);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al ejecutar la consulta: ' . $e->getMessage() . $imagen]);
}
?>