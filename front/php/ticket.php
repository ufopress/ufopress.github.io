<?php
// Conexión a la base de datos
include('conectar.php');

// Obtener los datos del POST
$input = json_decode(file_get_contents('php://input'), true);
$carrito = $input['carrito']; // Carrito con los productos
$direccionEnvio = $input['direccionEnvio']; // Dirección de envío
$total = $input['total']; // Total de la compra
$fecha = date('Y-m-d'); // Fecha actual
$hora = date('H:i:s'); // Hora actual

// Verificar si el carrito no está vacío
if (!empty($carrito) && !empty($direccionEnvio) && !empty($total)) {
    try {
        // Insertar el ticket en la base de datos
        $query = "INSERT INTO TICKET (IdCarritoCE, dirEnvio, Fecha, Hora, Total) VALUES (:idCarritoCE, :dirEnvio, :fecha, :hora, :total)";
        $sentencia = $conexion->prepare($query);

        // Aquí debes obtener el IdCarritoCE (esto depende de cómo manejas el carrito, puede ser un valor guardado en session o localStorage)
        $idCarritoCE = 1; // Ejemplo, cambia esto con el valor adecuado

        // Ejecutar la consulta
        $sentencia->bindParam(':idCarritoCE', $idCarritoCE, PDO::PARAM_INT);
        $sentencia->bindParam(':dirEnvio', $direccionEnvio, PDO::PARAM_STR);
        $sentencia->bindParam(':fecha', $fecha, PDO::PARAM_STR);
        $sentencia->bindParam(':hora', $hora, PDO::PARAM_STR);
        $sentencia->bindParam(':total', $total, PDO::PARAM_STR);
        $sentencia->execute();

        // Obtener el ID del nuevo ticket insertado
        $nroTicket = $conexion->lastInsertId();

        // Devolver el ID del ticket como respuesta
        echo json_encode(['resultado' => true, 'nroTicket' => $nroTicket]);

    } catch (PDOException $e) {
        // Si hay algún error, mostrar un mensaje
        echo json_encode(['resultado' => false, 'mensaje' => 'Error al crear el ticket']);
    }
} else {
    echo json_encode(['resultado' => false, 'mensaje' => 'Datos incompletos']);
}
?>
