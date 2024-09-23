<?php
include "conectar.php";

$nombreViejo = $_POST['nombreViejo'];
$nombre = $_POST['nombreNuevo'];
$costo = $_POST['costo'];
$descripcion = $_POST['descripcion'];

$sql = "UPDATE `producto` SET `nombre`='$nombre',`costo`='$costo',`descripcion`='$descripcion' WHERE nombre='$nombreViejo'";
$sentencia=$conexion->prepare($sql);
if($sentencia->execute()){
    header("location:admin.html");
}else{
    header("location:error.php");
}
