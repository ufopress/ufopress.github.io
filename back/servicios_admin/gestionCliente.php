<?php
include "../controladores/conectar.php";

header('content-type:application/json');


$itemsPerPage = 10;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$offset = ($page - 1) * $itemsPerPage;

$stmt = $conexion->prepare("SELECT COUNT(*) as total FROM cliente");
$stmt->execute();
$totalItems = $stmt->fetch(PDO::FETCH_ASSOC)['total'];

$stmt = $conexion->prepare("SELECT * FROM cliente LIMIT :offset, :itemsPerPage");
$stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
$stmt->bindParam(':itemsPerPage', $itemsPerPage, PDO::PARAM_INT);
$stmt->execute();
$clientes = $stmt->fetchAll(PDO::FETCH_ASSOC);

$totalPages = ceil($totalItems / $itemsPerPage);

echo json_encode([
    'clientes' => $clientes,
    'totalPages' => $totalPages,
    'currentPage' => $page
]);

?>