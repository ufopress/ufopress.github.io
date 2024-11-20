<?php
include "conectar.php";

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];

try {
    // Consulta para obtener los tickets relacionados con un cliente basado en su email
    $sql = "
        SELECT T.NroTicket, T.Fecha, T.Hora, T.Total, T.dirEnvio 
        FROM TICKET T
        JOIN CARRITO C ON T.IdCarritoCE = C.IdCarrito
        JOIN CLIENTE CL ON C.IdClienteCE = CL.IdCliente
        WHERE CL.Email = :email";

    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':email', $email);

    if ($stmt->execute()) {
        $tickets = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['success' => true, 'tickets' => $tickets]);
    } else {
        echo json_encode(['success' => false, 'message' => 'No se pudieron obtener los tickets']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
