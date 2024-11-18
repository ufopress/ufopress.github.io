<?php
include('conectar.php');

// Verificar si los datos fueron enviados
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $email = $_POST['email'] ?? '';
    $contrasenia = $_POST['contrasenia'] ?? ''; // La contraseña ingresada por el usuario

    try {
        // Preparar la consulta SQL para obtener el usuario
        $sql = "SELECT NombreUser, Email, Contrasenia, TipoUsuario FROM CLIENTE WHERE Email = :email";
        
        $stmt = $conexion->prepare($sql);
        
        // Ejecutar la consulta con el parámetro de email
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        // Verificar si se encontró un usuario con ese email
        if ($row = $stmt->fetch()) {
            // Verificar si la contraseña ingresada coincide con la contraseña encriptada
            if (password_verify($contrasenia, $row['Contrasenia'])) {
                // Iniciar sesión y guardar los datos del usuario en la sesión
                session_start();
                $_SESSION['usuario'] = $row['NombreUser'];
                $_SESSION['email'] = $row['Email'];
                $_SESSION['tipo'] = $row['TipoUsuario'];

                // Respuesta JSON en caso de éxito
                echo json_encode([
                    'success' => true,
                    'message' => 'Inicio de sesión exitoso',
                    'usuario' => $row['NombreUser'],
                    'email' => $row['Email'],
                    'tipo' => $row['TipoUsuario']
                ]);
            } else {
                // Respuesta en caso de contraseña incorrecta
                echo json_encode([
                    'success' => false,
                    'message' => 'Contraseña incorrecta'
                ]);
            }
        } else {
            // Respuesta en caso de que no se encuentre el usuario
            echo json_encode([
                'success' => false,
                'message' => 'Usuario no encontrado'
            ]);
        }
    } catch (PDOException $e) {
        // Manejo de errores en la consulta SQL
        echo json_encode([
            'success' => false,
            'message' => 'Error de conexión: ' . $e->getMessage()
        ]);
    }
}
?>
