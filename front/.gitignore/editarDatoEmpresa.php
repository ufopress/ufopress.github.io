<?php
include "conectar.php";

try{
    $res=$conexion->query("SELECT * FROM `datos_empresa`");
    
    $reg=$res->fetch();
}catch(PDOException $d){
    header("location:error.php");
}



$nombre = $reg['Nombre'];
$direccion = $reg['Direccion'];
$rubro = $reg['Rubro'];
$logo = $reg['Logo'];
$instagram = $reg['Instagram'];
$facebook = $reg['Facebook'];
$xtwitter = $reg['X_Twitter'];
$celular1 = $reg['Celular1'];
$celular2 = $reg['Celular2'];
$email = $reg['Email'];


echo "<form action='recibirDatoEmpresa.php' method='get'>
        
        <label for='nombre'>Nombre</label> 
        <input name='viejonombre' type='hidden' value='$nombre'>
        <input name='nombre' type='text' value='$nombre'>
       
        <label for='direccion'>Direccion</label> 
        <input name='viejodireccion' type='hidden' value='$direccion'>
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

        <input type='submit' value='Modificar'
        header('location:recibirDatoEmpresa.php');>
    </form>";


?>