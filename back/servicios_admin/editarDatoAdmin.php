<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

$nombreUser = $_POST['nombreuser3'];
$telefono = $_POST['telefono3'];
$nacionalidad = $_POST['nacionalidad3'];
$anoNacimiento = $_POST['anonacimiento3'];
$email = $_POST['emailusuario3']; 

try {
    $res = $conexion->prepare("UPDATE `cliente` SET 
                NombreUser=?, NroTelefono=?, Nacionalidad=?, AñoNacimiento=? WHERE 
                Email=?");
    $res->execute([$nombreUser, $telefono, $nacionalidad, $anoNacimiento, $email]);

    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>