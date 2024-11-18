<?php
include "../controladores/conectar.php"; // Asegúrate de que la ruta sea correcta

header('Content-Type: application/json');

// Obtener los parámetros de la URL
$nombreCategoriaCE = $_GET['nombreCategoriaCE'];
$fechaInicio = $_GET['fechaInicio'];
$fechaFin = $_GET['fechaFin'];

try {
    // Preparar la consulta para eliminar la promoción de la tabla 'aplica'
    $stmt = $conexion->prepare("DELETE FROM aplica WHERE NombreCategoriaCE = ? AND FechaInicio = ? AND FechaFin = ?");
    
    // Ejecutar la consulta con los parámetros
    $stmt->execute([$nombreCategoriaCE, $fechaInicio, $fechaFin]);

    // Verificar si se eliminó algún registro
    if ($stmt->rowCount() > 0) {
        echo json_encode(['success' => 'Promoción eliminada correctamente']);
    } else {
        echo json_encode(['error' => 'No se encontró ninguna promoción con esos datos']);
    }

} catch (PDOException $e) {
    // Si ocurre algún error en la base de datos
    echo json_encode(['error' => 'Error al eliminar promoción: ' . $e->getMessage()]);
}
?>