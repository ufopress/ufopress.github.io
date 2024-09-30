<?php
if ($_SERVER['REQUEST_METHOD'] ==='POST') {
    if (isset($_FILES['slider1'])) {
        $targetDirectory = 'slider/'; // Directorio donde se gaurdarán las imágenes
        $targetFile = $targetDirectory . basename($_FILES['slider1']['name']);
        $imageFileType = strtoLower(pathinfo($targetFile, PATHINFO_EXTENSION));

        // Verchivar si el archivo es una imagen
        $validExtension = array('jpg', 'jpeg', 'png', 'gif');
        if (in_array($imageFileType, $validExtension)) {
            if (move_uploaded_file($_FILES['slider1']['tmp_name'], $targetFile)) {
            } else {
                echo 'Ocurrió un error al subir la imagen.';
            }
        } else {
            echo 'Solo se permiten imagenes en formato JPG, JPEG, PNG o GIF.';
        }
    } else {
        echo 'Todo mal loco';
    }
}
/*
if ($_SERVER['REQUEST_METHOD'] ==='POST') {
    if (isset($_FILES['slider2'])) {
        $targetDirectory = 'slider/'; // Directorio donde se gaurdarán las imágenes
        $targetFile = $targetDirectory . basename($_FILES['slider2']['name']);
        $imageFileType = strtoLower(pathinfo($targetFile, PATHINFO_EXTENSION));

        // Verchivar si el archivo es una imagen
        $validExtension = array('jpg', 'jpeg', 'png', 'gif');
        if (in_array($imageFileType, $validExtension)) {
            if (move_uploaded_file($_FILES['slider2']['tmp_name'], $targetFile)) {
            } else {
                echo 'Ocurrió un error al subir la imagen.';
            }
        } else {
            echo 'Solo se permiten imagenes en formato JPG, JPEG, PNG o GIF.';
        }
    } else {
        echo 'Todo mal loco';
    }
}

if ($_SERVER['REQUEST_METHOD'] ==='POST') {
    if (isset($_FILES['slider3'])) {
        $targetDirectory = 'slider/'; // Directorio donde se gaurdarán las imágenes
        $targetFile = $targetDirectory . basename($_FILES['slider3']['name']);
        $imageFileType = strtoLower(pathinfo($targetFile, PATHINFO_EXTENSION));

        // Verchivar si el archivo es una imagen
        $validExtension = array('jpg', 'jpeg', 'png', 'gif');
        if (in_array($imageFileType, $validExtension)) {
            if (move_uploaded_file($_FILES['slider3']['tmp_name'], $targetFile)) {
            } else {
                echo 'Ocurrió un error al subir la imagen.';
            }
        } else {
            echo 'Solo se permiten imagenes en formato JPG, JPEG, PNG o GIF.';
        }
    } else {
        echo 'Todo mal loco';
    }
}
*/
?>