<?php
include "conectar.php";

// Obtener la categoría enviada por POST
$data = json_decode(file_get_contents('php://input'), true);
$categoria = $data['categoria'] ?? '';

try {
    // Consulta para seleccionar historietas según la categoría
    $sql = "SELECT * FROM HISTORIETA WHERE NombreCategoriaCE = :categoria";
    $sentencia = $conexion->prepare($sql);
    $sentencia->bindParam(':categoria', $categoria, PDO::PARAM_STR);
    $sentencia->execute();

    // Obtener los resultados
    $products = $sentencia->fetchAll(PDO::FETCH_ASSOC);

    if (count($products) > 0) {
        echo json_encode($products, JSON_PRETTY_PRINT);
    } else {
        echo json_encode([]);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error en la consulta: ' . $e->getMessage()]);
}
