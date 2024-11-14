<?php
include "conectar.php";
header('Content-Type: application/json');

// Obtener el email del usuario desde la solicitud POST
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

    // Obtener el carrito del cliente con ISBN y Cantidad
    $queryCarrito = "   SELECT a.ISBNCE AS isbn, a.cantidad 
                        FROM CARRITO c
                        JOIN AGREGA a ON c.IdCarrito = a.IdCarritoCE
                        WHERE c.IdClienteCE = :idCliente";
    $stmtCarrito = $conexion->prepare($queryCarrito);
    $stmtCarrito->bindParam(':idCliente', $idCliente);
    $stmtCarrito->execute();

    // Obtener los productos del carrito
    $carrito = $stmtCarrito->fetchAll(PDO::FETCH_ASSOC);

    if (empty($carrito)) {
        echo json_encode(['resultado' => false, 'mensaje' => 'El carrito está vacío']);
        exit;
    }

    // Responder con los datos del carrito en el formato requerido
    echo json_encode(['resultado' => true, 'mensaje' => 'Carrito obtenido con éxito', 'carrito' => $carrito]);

} catch (PDOException $e) {
    echo json_encode(['resultado' => false, 'mensaje' => 'Error al obtener el carrito: ' . $e->getMessage()]);
}
?>