<?php

$conexion = mysqli_connect('localhost', 'root', '', 'twitter') or die(mysql_error($mysqli));
$Contenido = $_POST['contenido'];
$id = $_POST['id'];
$tipo=$_POST['tipo'];
date_default_timezone_set('America/Costa_Rica');
$Object = new DateTime();
$DateAndTime = $Object->format("Y-m-d");
$consulta = "SELECT * FROM `tweet` WHERE (`nombreUsuario` = 'admin') AND ( `contenido`= '$Contenido') AND (`tipo`= 'comentario') AND (`fecha` = '$DateAndTime' )";
$resultadoTweet = mysqli_query($conexion, $consulta);
$datos = array();
for ($i = 0; $filas = mysqli_fetch_array($resultadoTweet); $i++) {
    for ($j = 0; $j < mysqli_num_fields($resultadoTweet); $j++) {
        $datos[$i][$j] = $filas[$j];
    }
}
$idTweet = $datos[0][0];
$insertarComentario = "INSERT INTO `comentario`(`id_comentario`, `id_comentado`, `nombreUsuario`, `fecha`, `contenido`,`tipo`) 
 VALUES ('$idTweet','$id','admin','$DateAndTime','$Contenido','$tipo')";
$resultadoComentario = mysqli_query($conexion, $insertarComentario);