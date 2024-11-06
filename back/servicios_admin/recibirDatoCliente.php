<?php
include "../controladores/conectar.php";

header('content-type: application/json');

$idcliente = $_GET['IdCliente'];

$res = $conexion->prepare("SELECT * FROM CLIENTE WHERE IdCliente = ?");
$res->execute([$idcliente]);
$cliente = $res->fetch(PDO::FETCH_ASSOC);

if ($cliente) {
    echo json_encode(['cliente' => $cliente]);
} else {
    echo json_encode(['error' => 'Cliente no encontrado']);
}
?>
