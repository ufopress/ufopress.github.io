<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

$nombreusuario = $_POST['nombreusuario'];
$apellido = $_POST['apellido'];
$emailusuario = $_POST['emailusuario'];
$contraseña = $_POST['contraseña'];
$telefono = $_POST['telefono'];
$fechanacimiento = $_POST['fechanacimiento']; 

// Hashear la contraseña
$contraseñaHasheada = password_hash($contraseña, PASSWORD_DEFAULT);

try {
    // Preparar la consulta para insertar el nuevo administrador
    $stmt = $conexion->prepare("INSERT INTO ADMINISTRADOR 
        (Nombre, Apellido, Email, Contraseña, TipoUsuario, NroTelefono, NombreEmpresaCE, FechaNacimiento) VALUES 
        (?, ?, ?, ?, 'ADM', ?, 'ComicVerse', ?)");

    // Ejecutar la consulta
    $stmt->execute([$nombreusuario, $apellido, $emailusuario, $contraseñaHasheada, $telefono, $fechanacimiento]);

    // Ahora, otorgar privilegios al nuevo usuario
    // Usamos el email como nombre de usuario en MySQL y 'localhost' para la conexión
    $sql = "GRANT ALL PRIVILEGES ON comicverse.* TO ?@'localhost' WITH GRANT OPTION";
    $grantStmt = $conexion->prepare($sql);
    $grantStmt->execute([$emailusuario]);

    // Aplicar los cambios
    $flushStmt = $conexion->prepare("FLUSH PRIVILEGES;");
    $flushStmt->execute();

    // Responder con éxito
    echo json_encode(['success' => 'Usuario creado y privilegios asignados correctamente']);
} catch (PDOException $e) {
    // Capturar cualquier error y mostrarlo
    echo json_encode(['error' => 'Error al ejecutar la consulta: ' . $e->getMessage()]);
}
?>