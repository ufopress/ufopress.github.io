<?php
// Conexión a la base de datos
include('conectar.php');

// Obtener los datos del POST
$input = json_decode(file_get_contents('php://input'), true);
$carrito = $input['carrito']; // Carrito con los productos
$idCarritoCE = isset($input['idCarrito']) ? $input['idCarrito'] : 1;
$direccionEnvio = $input['direccionEnvio']; // Dirección de envío
$total = $input['total']; // Total de la compra
$fecha = date('Y-m-d'); // Fecha actual
$hora = date('H:i:s'); // Hora actual

// Crear un array para almacenar los nombres y cantidades de los productos
$productosDetalles = [];

if (!empty($carrito) && !empty($direccionEnvio) && !empty($total)) {
    try {
        // Iterar sobre los productos del carrito y obtener el nombre para cada ISBN
        foreach ($carrito as $producto) {
            $isbn = $producto['isbn']; // Obtener ISBN de cada producto

            // Consulta para obtener el nombre de la historieta usando el ISBN
            $query = "SELECT Nombre FROM HISTORIETA WHERE ISBN = :isbn";
            $sentencia = $conexion->prepare($query);
            $sentencia->bindParam(':isbn', $isbn, PDO::PARAM_STR);
            $sentencia->execute();

            $result = $sentencia->fetch(PDO::FETCH_ASSOC);

            // Si encontramos el producto, guardamos el nombre y la cantidad
            if ($result) {
                $productosDetalles[] = [
                    'nombre' => $result['Nombre'],  // Nombre del producto
                    'cantidad' => $producto['cantidad'] // Cantidad del producto
                ];
            }
        }

        // Convertir el array de nombres y cantidades a formato JSON para almacenarlo en la base de datos
        $contenidoCarrito = json_encode($productosDetalles);

        // Insertar el ticket en la base de datos con el contenido del carrito (nombres y cantidades de los productos)
        $query = "INSERT INTO TICKET (IdCarritoCE, dirEnvio, Fecha, Hora, Total, Contenido) 
                  VALUES (:idCarritoCE, :dirEnvio, :fecha, :hora, :total, :contenido)";
        $sentencia = $conexion->prepare($query);

        // Ejecutar la consulta
        $sentencia->bindParam(':idCarritoCE', $idCarritoCE, PDO::PARAM_INT);
        $sentencia->bindParam(':dirEnvio', $direccionEnvio, PDO::PARAM_STR);
        $sentencia->bindParam(':fecha', $fecha, PDO::PARAM_STR);
        $sentencia->bindParam(':hora', $hora, PDO::PARAM_STR);
        $sentencia->bindParam(':total', $total, PDO::PARAM_STR);
        $sentencia->bindParam(':contenido', $contenidoCarrito, PDO::PARAM_STR); // Insertar los detalles (nombre y cantidad) en el campo Contenido
        $sentencia->execute();

        // Obtener el ID del nuevo ticket insertado
        $nroTicket = $conexion->lastInsertId();

        // Devolver el ID del ticket como respuesta
        echo json_encode(['resultado' => true, 'nroTicket' => $nroTicket]);

    } catch (PDOException $e) {
        // Si hay algún error, mostrar un mensaje
        echo json_encode(['resultado' => false, 'mensaje' => 'Error al crear el ticket: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['resultado' => false, 'mensaje' => 'Datos incompletos']);
}
?>