<?php
include "conectar.php"; // Incluye el archivo de conexión a la base de datos

try {
    // Seleccionar 3 productos al azar de la tabla HISTORIETA
    $sql = "SELECT * FROM historieta ORDER BY RAND() LIMIT 3";
    $sentencia = $conexion->prepare($sql);
    $sentencia->execute();

    // Obtener los resultados
    $products = $sentencia->fetchAll(PDO::FETCH_ASSOC);

    if (count($products) > 0) {
        echo json_encode($products, JSON_PRETTY_PRINT);
    } else {
        echo json_encode([]); // Si no hay resultados, devolver un array vacío
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error en la consulta']);
}
