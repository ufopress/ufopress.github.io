<?php
include('conectar.php');

// Verificar si los datos fueron enviados
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombreUser = $_POST['nombreUser'] ?? '';
    $email = $_POST['email'] ?? '';
    $contrasenia = password_hash($_POST['contrasenia'], PASSWORD_DEFAULT); // Encriptar la contraseña
    $nroTelefono = $_POST['nroTelefono'] ?? '';
    $nacionalidad = $_POST['nacionalidad'] ?? '';
    $anioNacimiento = $_POST['anioNacimiento'] ?? '';
    $tipoUsuario = $_POST['tipoUsuario'] ?? 'CLI'; // TipoUsuario será 'CLI' por defecto

    try {
        // Preparar la consulta SQL
        $sql = "INSERT INTO CLIENTE (NombreUser, Email, Contrasenia, TipoUsuario, NroTelefono, Nacionalidad, AñoNacimiento)
                VALUES (:nombreUser, :email, :contrasenia, :tipoUsuario, :nroTelefono, :nacionalidad, :anioNacimiento)";
        
        $stmt = $conexion->prepare($sql);
        
        // Ejecutar la consulta con los datos
        $stmt->bindParam(':nombreUser', $nombreUser);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':contrasenia', $contrasenia);
        $stmt->bindParam(':tipoUsuario', $tipoUsuario);
        $stmt->bindParam(':nroTelefono', $nroTelefono);
        $stmt->bindParam(':nacionalidad', $nacionalidad);
        $stmt->bindParam(':anioNacimiento', $anioNacimiento);

        if ($stmt->execute()) {
            echo "Registro exitoso!";
        } else {
            echo "Error al registrar el usuario.";
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
