<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

$nombreCategoria = $_POST['nombrecategoriaCE'];
$nombrePromocion = $_POST['nombrepromocion'];
$porcentajeDescuento = $_POST['porcentaje'];
$fechaInicio = $_POST['fechainicio'];
$fechaFin = $_POST['fechafin'];

try {
    $stmt = $conexion->prepare("INSERT INTO APLICA 
        (NombreCategoriaCE, NombrePromocion, Procentaje, FechaInicio, FechaFin) 
        VALUES (?, ?, ?, ?, ?)");

    $stmt->execute([$nombreCategoria, $nombrePromocion, $porcentajeDescuento, $fechaInicio, $fechaFin]);

    echo json_encode(['success' => 'Promoción agregada correctamente']);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al ejecutar la consulta: ' . $e->getMessage()]);
}
?>