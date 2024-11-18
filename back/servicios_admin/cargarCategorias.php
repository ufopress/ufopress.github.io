<?php
include "../controladores/conectar.php";  // Incluye el archivo de conexión

header('Content-Type: application/json');  // Especifica que se devolverá un JSON

try {
    $query = "SELECT NombreCategoria FROM CATEGORIA";
    $stmt = $conexion->prepare($query);
    $stmt->execute();

    $categorias = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(['categorias' => $categorias]);

} catch (PDOException $e) {
    echo json_encode(['error' => 'Error de consulta: ' . $e->getMessage()]);
}
?>
