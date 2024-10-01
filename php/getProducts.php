<?php
include "conectar.php";

try{
    $sql = "SELECT * FROM `historieta` WHERE Nombre LIKE '%$nombre%';";
    $sentencia=$conexion->prepare($sql);
    $sentencia->execute();

    $products = [];
    if ($sentencia) {
        while ($row = $sentencia->fetch_assoc()) {
            $products[] = $row;
        }
    }
if(count($result)>0){
    echo json_encode($result,JSON_PRETTY_PRINT);
}else{
    echo json_encode(['resultado'=>false]);
}
}catch(PDOException $b){
    header("location:error.php");
}
?>
