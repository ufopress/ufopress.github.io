<?php
//Recupera sesión iniciada anteriormente
session_start();

/*Guarda en las variables $tipo y $nombre el tipo de usuario conectado y
su nombre respectivamente.
*/
$tipo = $_SESSION['tipo'];
$nombre = $_SESSION['usuario'];

//Si es tipo 1 (Predefinido a tipo Cliente permite el ingreso a la página)
if($tipo == 1){
    $nombre = strtoupper($nombre);
    echo "Bienvenido $nombre";
}
//En caso contrario redirecciona al archivo "error.php"
else{
    header("location: error.php");
}

/*Crea ancla que te envía al archivo "deslogueo.php" que permite destruír
la sesión actual
*/
?>
<a href="deslogueo.php">Salir</a>