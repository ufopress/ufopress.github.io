<?php

include "conectar.php";

$email = $_POST['email'];
$pass = $_POST['contrasenia'];

$consultaC = "SELECT NombreUser, TipoUsuario, Email FROM cliente WHERE Email='$email' and Contraseña='$pass'";
$consultaA = "SELECT Nombre, TipoUsuario FROM administrador WHERE Email='$email' and Contraseña='$pass'";

$resC = $conexion->query($consultaC);
$resA = $conexion->query($consultaA);

$response = [];

if($rows = $resC->fetch()){
    session_start();
    $_SESSION['usuario'] = $rows['NombreUser'];
    $_SESSION['tipo'] = $rows['TipoUsuario'];
    
    // Respuesta JSON
    $response['success'] = true;
    $response['usuario'] = $rows['NombreUser'];
    $response['tipo'] = $rows['TipoUsuario'];
    $response['email'] = $rows['Email'];
} else if($rows = $resA->fetch()){
    session_start();
    $_SESSION['usuario'] = $rows['Nombre'];
    $_SESSION['tipo'] = $rows['TipoUsuario'];
    
    // Respuesta JSON
    $response['success'] = true;
    $response['usuario'] = $rows['Nombre'];
    $response['tipo'] = $rows['TipoUsuario'];
    $response['email'] = $rows['Email'];
} else {
    $response['success'] = false;
    $response['message'] = "error de conexión";
}

echo json_encode(value: $response);
?>
