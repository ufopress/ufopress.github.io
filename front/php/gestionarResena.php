<?php
include "conectar.php";

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];

try {
    // Consulta para obtener todas las reseñas de un cliente basadas en su email
    $sql = "SELECT IdReseña, R.Fecha, R.Contenido, C.Email 
            FROM RESEÑA R 
            JOIN CLIENTE C ON R.IdClienteCE = C.IdCliente
            WHERE C.Email = :email";

    $stmt = $conexion->prepare(query: $sql);
    $stmt->bindParam(param: ':email', var: $email);

    if ($stmt->execute()) {
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(value: ['success' => true, 'data' => $result]);
    } else {
        echo json_encode(value: ['success' => false]);
    }
} catch (PDOException $e) {
    echo json_encode(value: ['error' => 'Error en la operación']);
}
?>
