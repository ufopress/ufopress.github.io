<?php

include "conectar.php";

$email = $_POST['email'];
$pass = $_POST['contrasenia'];

$consultaC = "SELECT NombreUser, Email, TipoUsuario FROM CLIENTE WHERE Email='$email' and Contrasenia='$pass'";

$resC = $conexion->query($consultaC);

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
