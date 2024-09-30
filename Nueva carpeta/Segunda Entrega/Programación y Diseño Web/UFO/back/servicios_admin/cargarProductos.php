<?php

include "../controladores/conectar.php";

header('content-type:application/json');

//$input = json_decode(file_get_contents('php://input'), true);

$pag = 1;//$_GET['nombre'];

try{
    $sql = "SELECT * FROM `historieta` ORDER BY RAND() LIMIT 6";
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