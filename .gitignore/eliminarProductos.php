<?php
include "conectar.php";
header('content-type:application/json');
$isbn = $_POST['isbn'];
$registrosAntes = $conexion->query("SELECT * FROM  HISTORIETA");

try{
    $sql = "DELETE FROM `historieta` WHERE ISBN='$isbn'";
    $sentencia=$conexion->prepare($sql);
    $sentencia->execute();
    $registrosDespues = $conexion->query("SELECT * FROM  HISTORIETA");

    if($registrosAntes->rowCount()==$registrosDespues->rowCount()){
        header("location:error.php");
    }else{
        header("location:admin.html");
    }
}catch(PDOException $b){
    ("location:error.php");
}
