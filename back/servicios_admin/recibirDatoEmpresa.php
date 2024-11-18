<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

try {
    // Obtener datos de la tabla DATOS_EMPRESA
    $stmt = $conexion->query("SELECT * FROM `datos_empresa`");
    $empresa = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Obtener datos de la tabla DATOS_EMPRESA_CONTACTO
    $stmt = $conexion->query("SELECT * FROM `datos_empresa_contacto`");
    $contacto = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Obtener datos de la tabla DATOS_EMPRESA_DIRECCION
    $stmt = $conexion->query("SELECT * FROM `datos_empresa_direccion`");
    $direccion = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Combinar todos los datos en un solo array
    $result = [
        'empresa' => $empresa,
        'contacto' => $contacto,
        'direccion' => $direccion,
    ];

    echo json_encode($result);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al obtener datos: ' . $e->getMessage()]);
}
?>
