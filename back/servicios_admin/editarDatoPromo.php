<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

$nombreCategoriaCE = $_POST['nombrecategoriaCE2'];
$nombrePromocion = $_POST['nombrepromocion2'];
$porcentaje = $_POST['porcentaje2'];
$fechaInicio = $_POST['fechainicio2'];
$fechaFin = $_POST['fechafin2'];

try {
    $res = $conexion->prepare("UPDATE `aplica` SET 
                NombrePromocion=?, Procentaje=?, FechaInicio=?, FechaFin=? WHERE 
                NombreCategoriaCE=? AND FechaInicio=? AND FechaFin=?");

    $res->execute([$nombrePromocion, $porcentaje, $fechaInicio, $fechaFin, $nombreCategoriaCE, $fechaInicio, $fechaFin]);

    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Error de base de datos: ' . $e->getMessage()]);
}
?>