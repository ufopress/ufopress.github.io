<?php
include('conectar.php'); // Archivo de conexión a la base de datos

// Verificar si se reciben los datos
try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Asegurarse de que los datos existen en el arreglo
    $idResena = isset($data['idResena']) ? $data['idResena'] : null;
    $contenido = isset($data['contenido']) ? $data['contenido'] : null;

    // Verificar que los datos no estén vacíos
    if (!empty($idResena) && !empty($contenido)) {
        // Preparar la consulta SQL
        $sql = "UPDATE RESEÑA SET Contenido = :contenido WHERE IdReseña = :idResena";
        
        // Usar la conexión PDO para preparar la consulta
        $stmt = $conexion->prepare($sql);
        
        // Vincular los parámetros con las variables
        $stmt->bindParam(':contenido', $contenido);
        $stmt->bindParam(':idResena', $idResena, PDO::PARAM_INT);
        
        // Ejecutar la consulta
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Reseña actualizada correctamente.']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Error al actualizar la reseña.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Datos incompletos.']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error del servidor: ' . $e->getMessage()]);
}
?>
