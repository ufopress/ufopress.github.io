<?php
// Conexión a la base de datos
include('conectar.php');

// Obtener los datos enviados
$data = json_decode(file_get_contents('php://input'), true);
$idCliente = $data['idCliente'] ?? '';

try {
    // Obtener idCarrito
    $sql = "SELECT IdCarrito FROM CARRITO WHERE IdClienteCE = :idCliente";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':idCliente', $idCliente, PDO::PARAM_INT);
    $stmt->execute();
    $carrito = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($carrito) {
        echo json_encode(['success' => true, 'idCarrito' => $carrito['IdCarrito']]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Carrito no encontrado para el cliente especificado']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
