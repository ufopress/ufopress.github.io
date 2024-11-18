<?php
// Conexión a la base de datos
include('conectar.php');

// Obtener los datos enviados
$data = json_decode(file_get_contents('php://input'), true);
$nombreUser = $data['nombreUser'] ?? '';
$email = $data['email'] ?? '';

try {
    // Obtener IdCliente
    $sql = "SELECT IdCliente FROM CLIENTE WHERE NombreUser = :nombreUser AND Email = :email";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':nombreUser', $nombreUser);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $cliente = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($cliente) {
        echo json_encode(['success' => true, 'idCliente' => $cliente['IdCliente']]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Usuario no encontrado']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
