<?php
include "../controladores/conectar.php";

header('content-type:application/json');

if (isset($_POST['isbn2'])) {
    $isbn2 = $_POST['isbn2'];
    $nombre2 = $_POST['nombre2'];
    //$imagen2 = $_POST['imagen2'];
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

    try {
        $res = $conexion->prepare("UPDATE HISTORIETA SET 
                    NombreCategoriaCE=?, Nombre=?, /*Imagen=?,*/ EditOrg=?, Autores=?, Paginas=?, Tamaño=?, Contenido=?, Formato=?, Edad=?, Interior=?, Precio=? 
                    WHERE ISBN=?");
        $reg = $res->execute([$nombrecategoria2, $nombre2, /*$imagen2,*/ $editorg2, $autores2, $paginas2, $tamaño2, $contenido2, $formato2, $edad2, $interior2, $precio2, $isbn2]);

        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}
?>

