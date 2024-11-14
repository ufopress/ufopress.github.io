<?php
include "conectar.php";

// Consulta para obtener productos con promoción activa
try {
    $sql = "SELECT h.ISBN, h.Nombre, h.Imagen, h.Precio
            FROM historieta h
            INNER JOIN aplica a ON h.NombreCategoriaCE = a.NombreCategoriaCE
            WHERE a.FechaInicio <= CURDATE() AND a.FechaFin >= CURDATE()";
    $sentencia = $conexion->prepare($sql);
    $sentencia->execute();
    
    $productos = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($productos, JSON_PRETTY_PRINT);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al obtener productos promocionados']);
}
?>
