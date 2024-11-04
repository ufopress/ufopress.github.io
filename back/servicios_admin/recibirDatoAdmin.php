<?php
include "../controladores/conectar.php";

header('content-type: application/json');

$idusuario = $_GET['IdUsuario'];

$res = $conexion->prepare("SELECT * FROM ADMINISTRADOR WHERE IdUsuario = ?");
$res->execute([$idusuario]);
$admin = $res->fetch(PDO::FETCH_ASSOC);

if ($admin) {
    echo json_encode(['admin' => $admin]); 
} else {
    echo json_encode(['error' => 'Administrador no encontrado']);
}
?>
