<?php
include "conectar.php";

try {
    $sql = "SELECT C.NombreUser, R.Fecha, R.Contenido FROM RESEÑA R LEFT JOIN CLIENTE C ON R.IdClienteCE = C.IdCliente;";
    $sentencia = $conexion->prepare($sql);
    $sentencia->execute();

    $resenas = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    
    if (count($resenas) > 0) {
        echo json_encode($resenas, JSON_PRETTY_PRINT);
    } else {
        echo json_encode([]);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error en la consulta']);
}
?>