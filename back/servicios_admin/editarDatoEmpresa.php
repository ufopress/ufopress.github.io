<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

if (isset($_POST['nombreempresa'])) {
    $nombre = $_POST['nombreempresa'];
    $email = $_POST['email'];
    $rubro = $_POST['rubro'];
    $logo = $_POST['logo'];
    $instagram = $_POST['instagram'];
    $facebook = $_POST['facebook'];
    $xtwitter = $_POST['xtwitter'];
    $celular1 = $_POST['celular1'];
    $celular2 = $_POST['celular2'];
    $calle = $_POST['calle'];
    $numero = $_POST['numero'];

    try {
        // Actualizar datos de la empresa
        $res = $conexion->prepare("UPDATE `datos_empresa` SET 
                    Rubro=?, Logo=? WHERE 
                    NombreEmpresa=? AND Email=?");
        $res->execute([$rubro, $logo, $nombre, $email]);

        // Actualizar datos de contacto
        $res = $conexion->prepare("UPDATE `datos_empresa_contacto` SET 
                    Celular1=?, Celular2=?, Instagram=?, Facebook=?, X_Twitter=? WHERE 
                    NombreEmpresa=? AND Email=?");
        $res->execute([$celular1, $celular2, $instagram, $facebook, $xtwitter, $nombre, $email]);

        // Actualizar dirección
        $res = $conexion->prepare("UPDATE `datos_empresa_direccion` SET 
                    Calle=?, Numero=? WHERE 
                    NombreEmpresa=? AND Email=?");
        $res->execute([$calle, $numero, $nombre, $email]);

        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}
?>
