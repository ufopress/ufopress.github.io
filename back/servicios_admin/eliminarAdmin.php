<?php
include "../controladores/conectar.php";

header('content-type:application/json');

$idusuario = $_GET['idusuario'];

try{
    $stmt = $conexion->prepare("DELETE FROM Administrador WHERE idusuario=?");
    $stmt->execute([$idusuario]);

    echo json_encode(['success' => 'Administrador eliminado correctamente']);

    } catch (PDOException $e) {
    echo json_encode(['error' => 'Acción no válida']);
}

?>