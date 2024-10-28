<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

$nombreusuario = $_POST['nombreusuario'];
$apellido = $_POST['apellido'];
$emailusuario = $_POST['emailusuario'];
$contraseña = $_POST['contraseña'];
$telefono = $_POST['telefono'];
$fechanacimiento = $_POST['fechanacimiento']; 


$contraseñaHasheada = password_hash($contraseña, PASSWORD_DEFAULT);

try {
    $stmt = $conexion->prepare("INSERT INTO ADMINISTRADOR 
        (Nombre, Apellido, Email, Contraseña, TipoUsuario, NroTelefono, NombreEmpresaCE, FechaNacimiento) VALUES 
        (?, ?, ?, ?, 'ADM', ?, 'ComicVerse', ?)");

    $stmt->execute([$nombreusuario, $apellido, $emailusuario, $contraseñaHasheada, $telefono, $fechanacimiento]);

    echo json_encode(['success' => 'Usuario creado correctamente']);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al ejecutar la consulta: ' . $e->getMessage()]);
}
