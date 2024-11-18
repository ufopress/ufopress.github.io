<?php
include "../controladores/conectar.php";

header('content-type:application/json');

$idCliente = $_GET['idcliente'];

try {
    $stmt = $conexion->prepare("DELETE FROM Cliente WHERE idcliente = ?");
    $stmt->execute([$idCliente]);

    echo json_encode(['success' => 'Cliente eliminado correctamente']);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Acción no válida']);
}
?>