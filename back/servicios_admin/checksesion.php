<?php
header('Content-Type: application/json');
session_start();
if (isset ($_SESSION['sesion'])){
    echo json_encode(['success' => $_SESSION['sesion'],'email' => $_SESSION['email']]);
}else{
    echo json_encode(['success' => false]);
}


