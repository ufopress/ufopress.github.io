<?php
// Conexión a la base de datos
include('conectar.php');

// Verificar si recibimos el ISBN desde el POST
$input = json_decode(file_get_contents('php://input'), true);
$isbn = isset($input['isbn']) ? $input['isbn'] : '';

// Verificar que el ISBN no esté vacío
if (!empty($isbn)) {
    // Consulta para obtener el nombre y precio de la historieta con el ISBN dado
    $query = "SELECT Nombre, Precio FROM HISTORIETA WHERE ISBN = :isbn";
    $sentencia = $conexion->prepare($query);
    $sentencia->bindParam(':isbn', $isbn, PDO::PARAM_STR);
    $sentencia->execute();

    $result = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    
    if (count($result) > 0) {
        echo json_encode($result, JSON_PRETTY_PRINT);
    } else {
        echo json_encode(['resultado' => false, 'mensaje' => 'Producto no encontrado']);
    }
} else {
    // Si el ISBN está vacío, enviamos una respuesta de error
    echo json_encode(['resultado' => false, 'mensaje' => 'No se proporcionó un ISBN válido']);
}
?>
