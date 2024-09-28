<?php
include "../controladores/conectar.php";

header('content-type:application/json');

if (isset($_POST['nombreempresa'])){
    $nombre = $_POST['nombreempresa'];
    $direccion = $_POST['direccion'];
    $rubro = $_POST['rubro'];
    /*$logo = "LogoComicVerse.png";*/$logo = $_POST['logo'];
    $instagram = $_POST['instagram'];
    $facebook = $_POST['facebook'];
    $xtwitter = $_POST['xtwitter'];
    $celular1 = $_POST['celular1'];
    $celular2 = $_POST['celular2'];
    $email = $_POST['email'];

    try{
        $res=$conexion->prepare("UPDATE `datos_empresa` SET 
                    Direccion=?, Rubro=?, Logo=?, Instagram=?, Facebook=?, X_Twitter=?, Celular1=?, Celular2=?   WHERE 
                    NombreEmpresa=? AND Email=?");
        $reg=$res->execute([$direccion, $rubro, $logo, $instagram, $facebook, $xtwitter, $celular1, $celular2, $nombre, $email]);

        echo json_encode(['success' => true]);
    }catch(PDOException $e){
        echo json_encode(['success' => false]);
    }
}

?>