<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

// Obtener el correo electrónico global desde la URL
$globalEmail = isset($_GET['globalEmail']) ? trim($_GET['globalEmail']) : '';
if (empty($globalEmail) || !filter_var($globalEmail, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'Correo electrónico global no válido o no proporcionado.']);
    exit;
}

error_log("Correo electrónico global recibido: " . $globalEmail); // Verificar que el correo se reciba correctamente

$itemsPerPage = 10;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
if ($page < 1) $page = 1;  // Asegurarse de que la página no sea menor a 1

$offset = ($page - 1) * $itemsPerPage;

// Consulta para contar los administradores, excluyendo al que tenga el correo global
$stmt = $conexion->prepare("SELECT COUNT(*) as total FROM administrador WHERE Email != :globalEmail");
$stmt->bindParam(':globalEmail', $globalEmail, PDO::PARAM_STR); // Excluir el correo global
$stmt->execute();
$totalItems = $stmt->fetch(PDO::FETCH_ASSOC)['total'];

// Consulta para obtener los administradores, excluyendo al que tenga el correo global
$stmt = $conexion->prepare("SELECT * FROM administrador WHERE Email != :globalEmail LIMIT :offset, :itemsPerPage");
$stmt->bindParam(':globalEmail', $globalEmail, PDO::PARAM_STR); // Excluir el correo global
$stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
$stmt->bindParam(':itemsPerPage', $itemsPerPage, PDO::PARAM_INT);
$stmt->execute();
$administradores = $stmt->fetchAll(PDO::FETCH_ASSOC);

$totalPages = ceil($totalItems / $itemsPerPage);

// Devolver la respuesta como JSON
echo json_encode([
    'administradores' => $administradores,
    'totalPages' => $totalPages,
    'currentPage' => $page
]);
?>