<?php
include "conectar.php";

$data = json_decode(file_get_contents('php://input'), true);
$idResena = $data['idResena'];

try {
    $sql = "DELETE FROM RESEÑA WHERE IdResena = :idResena";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':idResena', $idResena);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al eliminar reseña']);
}
?>
