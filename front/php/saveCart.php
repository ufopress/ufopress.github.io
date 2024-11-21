<?php
include "conectar.php";
header('Content-Type: application/json');

// Obtener los datos JSON enviados por el cliente
$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'] ?? '';
$carrito = $input['carrito'] ?? [];

// Validar si se han recibido el email y el carrito
if (!$email) {
    echo json_encode(['resultado' => false, 'mensaje' => 'Datos incompletos']);
    exit;
}

try {
    // Iniciar una transacción
    $conexion->beginTransaction();

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

    // Verificar si el cliente ya tiene un carrito
    $queryCarrito = "SELECT IdCarrito FROM CARRITO WHERE IdClienteCE = :idCliente";
    $stmtCarrito = $conexion->prepare($queryCarrito);
    $stmtCarrito->bindParam(':idCliente', $idCliente);
    $stmtCarrito->execute();
    $carritoData = $stmtCarrito->fetch(PDO::FETCH_ASSOC);

    // Si no existe carrito, crear uno
    if (!$carritoData) {
        $queryCrearCarrito = "INSERT INTO CARRITO (IdClienteCE) VALUES (:idCliente)";
        $stmtCrearCarrito = $conexion->prepare($queryCrearCarrito);
        $stmtCrearCarrito->bindParam(':idCliente', $idCliente);
        $stmtCrearCarrito->execute();
        $carritoId = $conexion->lastInsertId();
    } else {
        $carritoId = $carritoData['IdCarrito'];
    }

    // Eliminar todos los productos del carrito actual antes de actualizar
    $queryEliminarProductos = "DELETE FROM AGREGA WHERE IdCarritoCE = :carritoId";
    $stmtEliminarProductos = $conexion->prepare($queryEliminarProductos);
    $stmtEliminarProductos->bindParam(':carritoId', $carritoId);
    $stmtEliminarProductos->execute();

    // Insertar los productos actualizados en la tabla AGREGA
    foreach ($carrito as $producto) {
        $queryAgregarProducto = "INSERT INTO AGREGA (IdCarritoCE, ISBNCE, cantidad, Fecha, Hora) VALUES (:carritoId, :isbn, :cantidad, CURDATE(), CURTIME())";
        $stmtAgregarProducto = $conexion->prepare($queryAgregarProducto);
        $stmtAgregarProducto->bindParam(':carritoId', $carritoId);
        $stmtAgregarProducto->bindParam(':isbn', $producto['isbn']);
        $stmtAgregarProducto->bindParam(':cantidad', $producto['cantidad']);
        $stmtAgregarProducto->execute();
    }

    // Confirmar la transacción
    $conexion->commit();

    // Respuesta exitosa
    echo json_encode(['resultado' => true, 'mensaje' => 'Carrito actualizado con éxito']);
} catch (PDOException $e) {
    $conexion->rollBack();
    echo json_encode(['resultado' => false, 'mensaje' => 'Error en la actualización del carrito: ' . $e->getMessage()]);
}
?>
