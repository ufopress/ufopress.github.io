<?php
include "conectar.php";

header('content-type:application/json');

//$input = json_decode(file_get_contents('php://input'), true);

$nombre = $_GET['nombre'];

try{
    $sql = "SELECT * FROM `historieta` WHERE Nombre LIKE '%$nombre%';";
    $sentencia=$conexion->prepare($sql);
    $sentencia->execute();

    $result = $sentencia->fetchAll(PDO::FETCH_ASSOC);
if(count($result)>0){
    echo json_encode($result,JSON_PRETTY_PRINT);
}else{
    echo json_encode(['resultado'=>false]);
}
}catch(PDOException $b){
    header("location:error.php");
}