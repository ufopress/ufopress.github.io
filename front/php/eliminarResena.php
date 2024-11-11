<?php
include "conectar.php";

// Verificar si se reciben los datos y si se decodifican correctamente
$data = json_decode(file_get_contents('php://input'), true);

if ($data === null || !isset($data['idResena'])) {
    echo json_encode(['error' => 'Datos incompletos o inválidos']);
    exit; // Detener la ejecución si los datos no son válidos
}

$idResena = $data['idResena'];

try {
    $sql = "DELETE FROM RESEÑA WHERE IdReseña = :idResena";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':idResena', $idResena);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al eliminar reseña: ' . $e->getMessage()]);
}
?>
