<?php

include "conectar.php";

$email = $_POST['email'];
$pass = $_POST['contrasenia'];

$consultaC = "SELECT NombreUser, TipoUsuario FROM cliente WHERE Email='$email' and Contraseña='$pass'";
$consultaA = "SELECT Nombre, TipoUsuario FROM administrador WHERE Email='$email' and Contraseña='$pass'";

$resC = $conexion->query($consultaC);
$resA = $conexion->query($consultaA);

if($rows = $resC->fetch()){
    session_start();
    
    $_SESSION['usuario'] = $rows['NombreUser'];
    $_SESSION['tipo'] = $rows['TipoUsuario'];
    echo '<script>console.log("HolaCliente");</script>';
}else if($rows = $resA->fetch()){
    session_start();
    
    $_SESSION['usuario'] = $rows['NombreUser'];
    $_SESSION['tipo'] = $rows['TipoUsuario'];
    echo '<script>console.log("HolaAdmin");</script>';
}else{
    echo "error de conexion";
}

