<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

$nombreUser = $_POST['nombreuser3'];
$telefono = $_POST['nrotelefono3'];
$nacionalidad = $_POST['nacionalidad3'];
$anoNacimiento = $_POST['anonacimiento3'];
$email = $_POST['email3']; 

try {
    $res = $conexion->prepare("UPDATE `cliente` SET 
                NombreUser=?, NroTelefono=?, Nacionalidad=?, AñoNacimiento=? WHERE 
                Email=?");
    $res->execute([$nombreUser, $telefono, $nacionalidad, $anoNacimiento, $email]);

    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Error de base de datos: ' . $e->getMessage()]);
}
?>
