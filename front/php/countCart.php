<?php
include "conectar.php";
header('Content-Type: application/json');

// Obtener los datos JSON enviados por el cliente
$input = json_decode(file_get_contents('php://input'), true);
$email = "briandanielm@outlook.es";

// Validar si se ha recibido el email
if (!$email) {
    echo json_encode(['resultado' => false, 'mensaje' => 'Email no proporcionado']);
    exit;
}

try {
    // Obtener el IdCliente del usuario
    $queryCliente = "SELECT IdCliente FROM CLIENTE WHERE Email = :email";
    $stmtCliente = $conexion->prepare($queryCliente);
    $stmtCliente->bindParam(':email', $email);
    $stmtCliente->execute();
    $cliente = $stmtCliente->fetch(PDO::FETCH_ASSOC);

    if (!$cliente) {
        echo json_encode(['resultado' => false, 'mensaje' => 'Usuario no encontrado']);
        exit;
    }

    $idCliente = $cliente['IdCliente'];

    // Obtener la cantidad de historietas en el carrito del usuario
    $queryHistorietas = "
        SELECT SUM(a.cantidad) AS total_historietas
        FROM AGREGA a
        JOIN CARRITO c ON a.IdCarritoCE = c.IdCarrito
        WHERE c.IdClienteCE = :idCliente";
    
    $stmtHistorietas = $conexion->prepare($queryHistorietas);
    $stmtHistorietas->bindParam(':idCliente', $idCliente);
    $stmtHistorietas->execute();
    $result = $stmtHistorietas->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        $totalHistorietas = $result['total_historietas'] ?? 0;
        echo json_encode(['resultado' => true, 'total_historietas' => $totalHistorietas]);
    } else {
        echo json_encode(['resultado' => false, 'mensaje' => 'No se encontraron historietas en el carrito']);
    }
} catch (PDOException $e) {
    echo json_encode(['resultado' => false, 'mensaje' => 'Error al obtener las historietas: ' . $e->getMessage()]);
}
?>
