<?php

$conexion = mysqli_connect('localhost', 'root', '', 'twitter') or die(mysql_error($mysqli));
$consulta = "SELECT * FROM `tweet` WHERE `tipo` = 'publicacion' ORDER BY `tweet`.`id_tweet` DESC";
$resultado = mysqli_query($conexion,$consulta);
$datos = array();
for ($i=0; $filas = mysqli_fetch_array($resultado); $i++) {
  for ($j=0; $j < mysqli_num_fields($resultado) ; $j++) {
    $datos[$i][$j] = $filas[$j];
  }
}

//mysqli_close($conexion);
echo json_encode($datos);



?>