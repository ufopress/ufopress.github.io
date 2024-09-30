<?php
include "../controladores/conectar.php";

header('content-type:application/json');

try{
    $res=$conexion->query("SELECT * FROM `datos_empresa`");
    $reg=$res->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($reg);
}catch(PDOException $d){
    echo json_encode(['error' => 'Error en la consulta: ' . $e->getMessage()]);
}

?>