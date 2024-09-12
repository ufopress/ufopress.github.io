<?php
include "../controladores/conectar.php";

$nombre = $_GET['nombreempresa'];
$viejonombre = $_GET['viejonombreempresa'];
$direccion = $_GET['direccion'];
$viejodireccion = $_GET['viejodireccion'];
$rubro = $_GET['rubro'];
$viejorubro = $_GET['viejorubro'];
/*$logo = "LogoComicVerse.png";*/$logo = $_GET['logo'];
$viejologo = $_GET['viejologo'];
$instagram = $_GET['instagram'];
$viejoinstagram = $_GET['viejoinstagram'];
$facebook = $_GET['facebook'];
$viejofacebook = $_GET['viejofacebook'];
$xtwitter = $_GET['xtwitter'];
$viejoxtwitter = $_GET['viejoxtwitter'];
$celular1 = $_GET['celular1'];
$viejocelular1 = $_GET['viejocelular1'];
$celular2 = $_GET['celular2'];
$viejocelular2 = $_GET['viejocelular2'];
$email = $_GET['email'];
$viejoemail = $_GET['viejoemail'];

try{
    $res=$conexion->prepare("UPDATE `datos_empresa` SET 
                NombreEmpresa=?, Direccion=?, Rubro=?, Logo=?, Instagram=?, Facebook=?, X_Twitter=?, Celular1=?, Celular2=?, Email=?  WHERE 
                NombreEmpresa=?");
    $reg=$res->execute([$nombre, $direccion, $rubro, $logo, $instagram, $facebook, $xtwitter, $celular1, $celular2, $email, $viejonombre]);
}catch(PDOException $e){
    header("location:error.php");
}


echo "<form action='admin.html' method='get'>
        
<label for='nombreempresa'>Nombre</label> 
<input name='viejonombreempresa' type='hidden' value='$nombre'>
<input name='nombreempresa' type='text' value='$nombre'>

<label for='direccion'>Direccion</label> 
<input name='viejonombre' type='hidden' value='$direccion'>
<input name='direccion' type='text' value='$direccion'>

<label for='rubro'>Rubro</label>
<input name='viejorubro' type='hidden' value='$rubro'> 
<input name='rubro' type='text' value='$rubro'>

<label for='logo'>Logo</label> 
<input name='viejologo' type='hidden' value='$logo'>
<input name='logo' type='text' value='$logo'>

<label for='instagram'>Instagram</label>
<input name='viejoinstagram' type='hidden' value='$instagram'> 
<input name='instagram' type='text' value='$instagram'>

<label for='facebook'>Facebook</label> 
<input name='viejofacebook' type='hidden' value='$facebook'>
<input name='facebook' type='text' value='$facebook'>

<label for='xtwitter'>X_Twitter</label> 
<input name='viejoxtwitter' type='hidden' value='$xtwitter'>
<input name='xtwitter' type='text' value='$xtwitter'>

<label for='celular1'>Celular1</label> 
<input name='viejocelular1' type='hidden' value='$celular1'>
<input name='celular1' type='number' value='$celular1'>

<label for='celular2'>Celular2</label> 
<input name='viejocelular2' type='hidden' value='$celular2'>
<input name='celular2' type='number' value='$celular2'>

<label for='email'>Email</label>
<input name='viejoemail' type='' value='$email'> 
<input name='email' type='email' value='$email'>

<input type='submit' value='Confirmar Cambios'
        header('location:../vistas/admin.html');>
</form>";

?>