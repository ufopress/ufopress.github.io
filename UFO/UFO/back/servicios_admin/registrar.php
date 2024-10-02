<?php
include "../controladores/conectar.php";

$nombreuser = $_POST['nombre'];
$email = $_POST['email'];
$contrasenia = $_POST['contrasenia'];
$telefono = $_POST['telefono'];
$nacionalidad = $_POST['nacionalidad'];
$añonacimiento = $_POST['añonacimiento'];

//try{
$sql = "INSERT INTO `cliente` (`IdUsuario`,`NombreUser`, `Email`, `Contrasenia`, `TipoUsuario`, `NroTelefono`, `Nacionalidad`, `AñoNacimiento`) VALUES ('1', '$nombreuser', '$email', '$contrasenia', '1', '$telefono', '$nacionalidad', '$añonacimiento' )";
$sentencia = $conexion->prepare($sql);
$sentencia->execute();
//    header("location:../vistas/admin.html");
//}catch(PDOException $a){
//    header("location:error.php");
//}

?>