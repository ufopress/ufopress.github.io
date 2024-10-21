<?php

/*Incluye el archivo en base a la ruta dada. En este caso incluye al
archivo del directorio actual llamado conectar.php que se encargaría de
conectar con la base de datos*/
include "conectar.php";

/*Recibe dos valores por el método Get y los asigna a las variables
$user y $pass siendo su nombre de usuario y contraseña respectivamente*/
$user = $_POST['nombre'];
$pass = $_POST['contrasenia'];

/*Si el campo usuario o campo contraseña están vacíos te redirecciona al 
archivo "error.php"*/
/*if(empty($user) || empty ($pass)){
    header("Location: error.php");
}*/
/*En caso contrario se realiza una consulta a la base de datos con dichos
datos para ver si el usuario y contraseñas ingresadas se encuentran 
registrados
else{
    $consulta = "SELECT TipoUsuario, NombreUser FROM cliente WHERE NombreUser='$user' and Contrasenia='$pass'";
}*/
$consulta = "SELECT TipoUsuario, NombreUser FROM cliente WHERE NombreUser='$user' and Contrasenia='$pass'";

/*Se guardan los posibles resultados de la búsqueda en la variable $res*/
$res = $conexion->query($consulta);

/*Si existiesen resultados entra en el if*/
if($rows = $res->fetch()){

    /*En el caso de haber resultados inicia una sesion*/
    session_start();
    /*Guardamos nombre de usuario y tipo de usuario en variables de 
    tipo $_SESSION para su posterior uso*/
    $_SESSION['usuario'] = $rows['NombreUser'];
    $_SESSION['tipo'] = $rows['TipoUsuario'];

    /*Depende del tipo de usuario redirecciona a un archivo diferente*/
    switch(intval($rows['TipoUsuario'])){
        case 0:
            header("location:admin.php");
            break;
        case 1:
            header("location:cliente.php");
            break;
    }
}else{
    /*En caso de no haber resultados envía un error*/
    echo "error de conexion";
}

