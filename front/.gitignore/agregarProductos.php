<?php
include "conectar.php";

header('content-type:application/json');

$isbn = $_POST['isbn'];
$nombre = $_POST['nombre'];
$editorg = $_POST['editorg'];
$autores = $_POST['autores'];
$paginas = $_POST['paginas'];
$tamaño = $_POST['tamaño'];
$contenido = $_POST['contenido'];
$formato = $_POST['formato'];
$edad = $_POST['edad'];
$interior = $_POST['interior'];
$precio = $_POST['precio'];

try{
    $sql = "INSERT INTO `HISTORIETA` (`ISBN`, `Nombre`, `EditOrg`, `Autores`, `Paginas`, `Tamaño`, `Contenido`, `Formato`, `Edad`, `Interior`, `Precio`) VALUES ('$isbn', '$nombre', '$editorg', '$autores', '$paginas', '$tamaño', '$contenido', '$formato', '$edad', '$interior', '$precio')";
    $sentencia=$conexion->prepare($sql);
    $sentencia->execute();
    header("location:admin.html");
}catch(PDOException $a){
    header("location:error.php");
}

?>