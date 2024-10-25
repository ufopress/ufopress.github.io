<?php
// Conexión a la base de datos
include('db.php');

$input = json_decode(json: file_get_contents(filename: 'php://input'), associative: true);
$isbn = $input['isbn'];

// Consulta para obtener el nombre y precio del producto
$query = "SELECT Nombre, Precio FROM HISTORIETA WHERE ISBN = '$isbn'";
$result = mysqli_query(mysql: $conn, query: $query);

if (mysqli_num_rows(result: $result) > 0) {
    $row = mysqli_fetch_assoc(result: $result);
    echo json_encode(value: [
        'Nombre' => $row['Nombre'],
        'Precio' => $row['Precio']
    ]);
} else {
    echo json_encode(value: ['resultado' => false]);
}
mysqli_close(mysql: $conn);