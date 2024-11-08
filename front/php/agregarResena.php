<?php
include('conectar.php');

$data = json_decode(json: file_get_contents(filename: 'php://input'), associative: true);
$idCliente = $data['idCliente'] ?? '';
$contenido = $data['contenido'] ?? '';
$fecha = $data['fecha'] ?? '';

try {
    $sql = "INSERT INTO RESEÑA (IdClienteCE, Fecha, Contenido) VALUES (:idCliente, :fecha, :contenido)";
    $stmt = $conexion->prepare(query: $sql);
    $stmt->bindParam(param: ':idCliente', var: $idCliente);
    $stmt->bindParam(param: ':fecha', var: $fecha);
    $stmt->bindParam(param: ':contenido', var: $contenido);

    if ($stmt->execute()) {
        echo json_encode(value: ['success' => true]);
    } else {
        echo json_encode(value: ['success' => false]);
    }
} catch (PDOException $e) {
    echo json_encode(value: ['success' => false, 'error' => $e->getMessage()]);
}
?>
