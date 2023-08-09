<?php

$conexion = mysqli_connect('localhost', 'root', '', 'twitter') or die(mysql_error($mysqli));
date_default_timezone_set('America/Costa_Rica');
$Object = new DateTime();
$DateAndTime = $Object->format("Y-m-d");
$Contenido = $_POST['contenido'];
$tipo = $_POST['tipo'];
$insertarTweet = "INSERT INTO `tweet`( `nombreUsuario`, `fecha`, `contenido`,`tipo`) 
VALUES ('admin','$DateAndTime','$Contenido','$tipo')";

$resultado = mysqli_query($conexion, $insertarTweet);

?>