<?php
include "conectar.php";

// Obtener el ISBN desde la consulta GET
$isbn = $_GET['isbn'] ?? '';

// Verificar que el ISBN no esté vacío
if ($isbn) {
    try {
        $sql = "SELECT * FROM HISTORIETA WHERE ISBN = :isbn";
        $stmt = $conexion->prepare($sql);
        $stmt->bindParam(':isbn', $isbn);
        $stmt->execute();

        $producto = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($producto) {
            echo json_encode($producto);
        } else {
            echo json_encode(['error' => 'Producto no encontrado.']);
        }
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Error al obtener los detalles del producto: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'ISBN no proporcionado.']);
}
?>
