<?php
include "../controladores/conectar.php";

header('content-type:application/json');

$itemsPerPage = 10;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$offset = ($page - 1) * $itemsPerPage;

$stmt = $conexion->prepare("SELECT COUNT(*) as total FROM TICKET");
$stmt->execute();
$totalItems = $stmt->fetch(PDO::FETCH_ASSOC)['total'];

$stmt = $conexion->prepare("SELECT * FROM TICKET T JOIN AGREGA A ON T.IdCarritoCE=A.IdCarritoCE JOIN CARRITO C ON A.IdCarritoCE=C.IdCarrito JOIN CLIENTE CL ON C.IdClienteCE=CL.IdCliente LIMIT :offset, :itemsPerPage");
$stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
$stmt->bindParam(':itemsPerPage', $itemsPerPage, PDO::PARAM_INT);
$stmt->execute();
$tickets = $stmt->fetchAll(PDO::FETCH_ASSOC);

$totalPages = ceil($totalItems / $itemsPerPage);

echo json_encode([
    'tickets' => $tickets,
    'totalPages' => $totalPages,
    'currentPage' => $page
]);

?>
