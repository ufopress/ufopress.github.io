<?php
include 'conectar.php';

$email = $_POST['email'] ?? ''; // Suponiendo que recibes el email vía POST

try {
    $sql = "SELECT R.IdReseña, R.Fecha, R.Contenido
            FROM RESEÑA R
            JOIN CLIENTE C ON R.IdClienteCE = C.IdCliente
            WHERE C.Email = :email";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    $resenas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($resenas, JSON_PRETTY_PRINT);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error en la consulta', 'message' => $e->getMessage()]);
}
