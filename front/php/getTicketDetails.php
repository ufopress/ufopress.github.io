<?php
// Incluir la conexión a la base de datos
include('conectar.php');

// Obtener el número de ticket enviado por POST
$data = json_decode(file_get_contents('php://input'), true);
$nroTicket = $data['nroTicket'] ?? '';

$response = [];

try {
    // Consultar los detalles del ticket
    $sql = "SELECT * FROM TICKET WHERE NroTicket = :nroTicket";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':nroTicket', $nroTicket, PDO::PARAM_INT);
    $stmt->execute();
    
    // Obtener el ticket
    $ticket = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($ticket) {
        $response['success'] = true;
        $response['ticket'] = $ticket;
    } else {
        $response['success'] = false;
        $response['message'] = 'Ticket no encontrado';
    }
} catch (PDOException $e) {
    $response['success'] = false;
    $response['error'] = 'Error en la consulta: ' . $e->getMessage();
}

// Devolver la respuesta como JSON
echo json_encode($response);
?>
