<?php
include "../controladores/conectar.php";

$nombreuser= $_POST['nombre'];
$email = $_POST['email'];
$contrasenia = $_POST['contrasenia'];
$telefono = $_POST['telefono'];

try{
    $sql = "INSERT INTO `cliente` (`NombreUser`, `Email`, `Contrasenia`, `TipoUsuario`, `NroTelefono`) VALUES
     ('$nombreuser', '$email', '$contrasenia', '1', '$telefono')";
    $sentencia=$conexion->prepare($sql);
    $sentencia->execute();
    header("location:../vistas/admin.html");
}catch(PDOException $a){
    header("location:error.php");
}

?>