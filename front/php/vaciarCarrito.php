<?php
// Conexión a la base de datos
include('conectar.php');

// Obtener los datos enviados
$data = json_decode(file_get_contents('php://input'), true);
$idCarrito = $data['idCarrito'] ?? '';

if (!$idCarrito) {
    echo json_encode(['success' => false, 'message' => 'ID del carrito no proporcionado.']);
    exit;
}

try {
    // Eliminar todos los productos del carrito específico
    $sql = "DELETE FROM AGREGA WHERE IdCarritoCE = :idCarrito";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':idCarrito', $idCarrito, PDO::PARAM_INT);
    $stmt->execute();

    echo json_encode(['success' => true, 'message' => 'Carrito vaciado con éxito.']);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
