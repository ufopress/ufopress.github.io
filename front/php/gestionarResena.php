<?php
include "conectar.php";

$data = json_decode(file_get_contents('php://input'), true);
$idResena = $data['idResena'];
$email = $data['email'];
$contenido = $data['contenido'];
$fecha = date("Y-m-d H:i:s");

try {
    if (empty($idResena)) {
        $sql = "INSERT INTO RESEÑA (Fecha, Contenido, Email) VALUES (:fecha, :contenido, :email)";
    } else {
        $sql = "UPDATE RESEÑA SET Contenido = :contenido WHERE IdResena = :idResena AND Email = :email";
    }

    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':fecha', $fecha);
    $stmt->bindParam(':contenido', $contenido);
    $stmt->bindParam(':email', $email);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error en la operación']);
}
?>
