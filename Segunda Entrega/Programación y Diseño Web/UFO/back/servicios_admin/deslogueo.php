<?php

//Recupera sesión en caso de haberla
session_start();

//Destruye la sesión iniciada o recuperada anteriormente
session_destroy();

//Redirecciona a archivo index.html o lobby
header("location:../front/vistas/index.html");