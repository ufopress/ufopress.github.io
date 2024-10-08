<?php
include "../controladores/conectar.php";

header('content-type:application/json');

 /*error_reporting(E_ALL);
ini_set('display_errors', 1); */

$itemsPerPage = 10;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$offset = ($page - 1) * $itemsPerPage;

$stmt = $conexion->prepare("SELECT COUNT(*) as total FROM historieta");
$stmt->execute();
$totalItems = $stmt->fetch(PDO::FETCH_ASSOC)['total'];

$stmt = $conexion->prepare("SELECT * FROM historieta LIMIT :offset, :itemsPerPage");
$stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
$stmt->bindParam(':itemsPerPage', $itemsPerPage, PDO::PARAM_INT);
$stmt->execute();
$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

$totalPages = ceil($totalItems / $itemsPerPage);

echo json_encode([
    'productos' => $productos,
    'totalPages' => $totalPages,
    'currentPage' => $page
]);

?>