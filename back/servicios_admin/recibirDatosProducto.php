<?php
include "../controladores/conectar.php";

header('content-type:application/json');

    $isbn = $_GET['ISBN'];
    $res=$conexion->prepare("SELECT * FROM HISTORIETA WHERE ISBN = ?");
    //$stmt->bindParam(':ISBN', $isbn);
    /*stmt->bindParam('NombreCategoriaCE', $nombrecategoria);
    $stmt->bindParam('Nombre', $nombre);
    $stmt->bindParam('Imagen', $imagen);
    $stmt->bindParam('EditOrg', $editorg);
    $stmt->bindParam('Autores', $autores);
    $stmt->bindParam('Paginas', $paginas);
    $stmt->bindParam('Tamaño', $tamaño);
    $stmt->bindParam('Contenido', $contenido);
    $stmt->bindParam('Formato', $formato);
    $stmt->bindParam('Edad', $edad);
    $stmt->bindParam('Interior', $interior);
    $stmt->bindParam('Precio', $precio);*/
    $res->execute([$isbn]);
    $product = $res->fetch(PDO::FETCH_ASSOC);
    
    
    if ($product) {
        echo json_encode(['product' => $product]);
    } else {
        echo json_encode(['error' => 'Producto no encontrado']);
    }
        
?>