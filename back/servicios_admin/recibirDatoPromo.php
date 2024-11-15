<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

$nombreCategoriaCE = $_GET['nombreCategoriaCE'];
$fechaInicio = $_GET['fechaInicio'];
$fechaFin = $_GET['fechaFin'];

try {
    $stmt = $conexion->prepare("SELECT * FROM aplica WHERE NombreCategoriaCE = ? AND FechaInicio = ? AND FechaFin = ?");
    $stmt->execute([$nombreCategoriaCE, $fechaInicio, $fechaFin]);

    $promocion = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($promocion) {
        echo json_encode(['promocion' => $promocion]);
    } else {
        echo json_encode(['error' => 'Promoción no encontrada']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al obtener la promoción']);
}
?>