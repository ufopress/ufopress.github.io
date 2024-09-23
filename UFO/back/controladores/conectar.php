
<?php
/*Inicia una conexión, en este caso a la base de datos nombrada "comicverse"
con usuario "root" y contraseña "" ubicada en el localhost*/

$usuario_db = 'root';
$contrasena_db = '';
$dbname = 'comicverse';
$host = 'localhost';

try {
    $conexion = new PDO("mysql:host=$host;dbname=$dbname", $usuario_db, $contrasena_db);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error de conexión: ' . $e->getMessage()]);
    exit();
}
?>