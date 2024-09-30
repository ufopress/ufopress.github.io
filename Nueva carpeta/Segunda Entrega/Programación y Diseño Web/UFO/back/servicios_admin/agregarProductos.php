<?php
include "../controladores/conectar.php";

header('content-type:application/json');

$isbn = $_POST['isbn'];
$nombre = $_POST['nombre'];
$imagen = '';
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
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }
    $uploadFile = $uploadDir . basename($_FILES['imagen']['name']);
    if (move_uploaded_file($_FILES['imagen']['tmp_name'], $uploadFile)) {
        $imagen = $uploadFile;
    } else {
        echo json_encode(['error' => 'Error al subir la imagen']);
        exit;
    }
} elseif (isset($_FILES['imagen']) && $_FILES['imagen']['error'] !== UPLOAD_ERR_NO_FILE) {
    echo json_encode(['error' => 'Error al subir la imagen']);
    exit;
}

$stmt = $conexion->prepare("INSERT INTO HISTORIETA (ISBN, Nombre, Imagen, NombreCategoriaCE, EditOrg, Autores, Paginas, Tamaño, Contenido, Formato, Edad, Interior, Precio) VALUES (:isbn, :nombre, :imagen, :nombrecategoria, :editorg, :autores, :paginas, :tamaño, :contenido, :formato, :edad, :interior, :precio)");

$stmt->bindParam(':isbn', $isbn);
$stmt->bindParam(':nombre', $nombre);
$stmt->bindParam(':imagen', $imagen);
$stmt->bindParam(':nombrecategoria', $nombrecategoria);
$stmt->bindParam(':editorg', $editorg);
$stmt->bindParam(':autores', $autores);
$stmt->bindParam(':paginas', $paginas);
$stmt->bindParam(':tamaño', $tamaño);
$stmt->bindParam(':contenido', $contenido);
$stmt->bindParam(':formato', $formato);
$stmt->bindParam(':edad', $edad);
$stmt->bindParam(':interior', $interior);
$stmt->bindParam(':precio', $precio);

try {
    $stmt->execute();
    echo json_encode(['success' => 'Producto creado correctamente']);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al ejecutar la consulta: ' . $e->getMessage()]);
}
?>

