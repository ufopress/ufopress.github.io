<?php
include "../controladores/conectar.php";

header('content-type:application/json');

$isbn = $_GET['isbn'];

try{
    $stmt = $conexion->prepare("DELETE FROM Historieta WHERE isbn=?");
    $stmt->execute([$isbn]);

    echo json_encode(['success' => 'Producto eliminado correctamente']);

    } catch (PDOException $e) {
    echo json_encode(['error' => 'Acción no válida']);
}

/*
} elseif ($action === 'delete') {
    $id = $_POST['id'];

    $stmt = $pdo_conn->prepare("DELETE FROM productos WHERE id = :id");
    $stmt->bindParam(':id', $id);
    $stmt->execute();

    echo json_encode(['success' => 'Producto eliminado correctamente']);
} else {
    echo json_encode(['error' => 'Acción no válida']);
}*/
?>