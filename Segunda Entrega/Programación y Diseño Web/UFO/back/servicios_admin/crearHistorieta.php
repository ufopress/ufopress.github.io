<?php
    /*Recupera la sesión en caso de haberla o inicia una nueva
    En este caso recuperaría la sesión iniciada en caso de que un usuario
    registrado en la base de datos hubiera logueado*/
    session_start();

    /*Recibe por variables de tipo SESSION guardadas en login.php los
    valores de tipo de usuario conectado y su nombre de usuario y los
    guarda en las variables $tipo y $nombre respectivamente*/
    $tipo = $_SESSION['tipo'];
    $nombre = $_SESSION['usuario'];
    
    /*Si el tipo de usuario es 0 (predefinido que 0 será el tipo ADMIN)
    entonces se le permite acceder a la página*/
    if($tipo == 0){
        $nombre = strtoupper($nombre);
        echo "Bienvenido $nombre";
    }
    /*De lo contrario redirecciona al archivo "error.php"*/
    else{
        header("location: error.php");
    }