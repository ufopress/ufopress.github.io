<?php
include "../controladores/conectar.php";

header('content-type:application/json');

$nombreusuario = $_POST['nombreusuario'];
$emailuser = $_POST['emailuser'];
$contrasenia = $_POST['contrasenia'];
$telefono = $_POST['telefono'];
$nacionalidad = $_POST['nacionalidad'];
$añonacimiento = $_POST['añonacimiento'];


try {

$stmt = $conexion->prepare("INSERT INTO CLIENTE 
(NombreUser, Email, Contrasenia, TipoUsuario, NroTelefono, Nacionalidad, AñoNacimiento) VALUES
(?,?,?,'CLI',?,?,?)");

    $stmt->execute([$nombreusuario, $emailuser, $contrasenia, $telefono, $nacionalidad, $añonacimiento]);
    echo json_encode(['success' => 'Usuario creado correctamente']);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al ejecutar la consulta: ']);
}
?>