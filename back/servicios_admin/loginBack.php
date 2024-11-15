<?php
include "../controladores/conectar.php";

header('Content-Type: application/json');

$usermail = $_POST['usermail'];
$password = $_POST['password'];


$contraseñaHasheada = password_hash($password, PASSWORD_DEFAULT);

try {
    $stmt = $conexion->prepare("SELECT * FROM ADMINISTRADOR WHERE 
        (Email= ?)");

    $stmt->execute([$usermail]);

    if ($admin = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $psw = $admin['Contraseña']; // La contraseña guardada en la base de datos
        if (password_verify($password, $psw)) {
            // Si la contraseña es correcta
            echo json_encode(['success' => true]); // Respuesta exitosa
        } else {
            // Si la contraseña es incorrecta
            echo json_encode(['success' => false, 'error' => 'Contraseña incorrecta']); // Mensaje de error específico
        }
    } else {
        // Si no se encuentra el usuario
        echo json_encode(['success' => false, 'error' => 'Usuario no encontrado']); // Mensaje de error cuando no se encuentra el usuario
    }    

} catch (PDOException $e) {
    echo json_encode(['error' => 'Error al ejecutar la consulta: ' . $e->getMessage()]);
}