<?php
// Conexión a la base de datos
include('conectar.php');

// Obtener los datos enviados
$data = json_decode(file_get_contents('php://input'), true);
$nombreUser = $data['nombreUser'] ?? '';
$email = $data['email'] ?? '';
$contenido = $data['contenido'] ?? '';
$fecha = $data['fecha'] ?? '';

try {
    // Insertar la reseña en la tabla
    $sql = "INSERT INTO RESEÑA (Fecha, Contenido, NombreUser, Email) VALUES (:fecha, :contenido, :nombreUser, :email)";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':fecha', $fecha);
    $stmt->bindParam(':contenido', $contenido);
    $stmt->bindParam(':nombreUser', $nombreUser);
    $stmt->bindParam(':email', $email);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
