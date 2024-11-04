<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

$nombre = $_POST['nombreusuario2'];
$apellido = $_POST['apellido2'];
$telefono = $_POST['telefono2'];
$fechaNacimiento = $_POST['fechanacimiento2'];
$email = $_POST['emailusuario2']; 

try {
    $res = $conexion->prepare("UPDATE `administrador` SET 
                Nombre=?, Apellido=?, NroTelefono=?, FechaNacimiento=? WHERE 
                Email=?"); 
    $res->execute([$nombre, $apellido, $telefono, $fechaNacimiento, $email]);

    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
