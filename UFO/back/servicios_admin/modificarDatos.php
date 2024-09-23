<?php
include "../controladores/conectar.php";

try{
    $res=$conexion->query("SELECT * FROM `datos_empresa`");
    $reg=$res->fetch();
}catch(PDOException $d){
    header("location:error.php");
}

$nombre = $reg['NombreEmpresa'];
$direccion = $reg['Direccion'];
$rubro = $reg['Rubro'];
$logo = $reg['Logo'];
$instagram = $reg['Instagram'];
$facebook = $reg['Facebook'];
$xtwitter = $reg['X_Twitter'];
$celular1 = $reg['Celular1'];
$celular2 = $reg['Celular2'];
$email = $reg['Email'];

try{
    $res=$conexion->prepare("UPDATE `datos_empresa` SET 
                NombreEmpresa=?, Direccion=?, Rubro=?, Logo=?, Instagram=?, Facebook=?, X_Twitter=?, Celular1=?, Celular2=?, Email=?  WHERE 
                NombreEmpresa=?");
    $reg=$res->execute([$nombre, $direccion, $rubro, $logo, $instagram, $facebook, $xtwitter, $celular1, $celular2, $email, $viejonombre]);
}catch(PDOException $e){
    header("location:error.php");
}