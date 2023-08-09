<?php

$conexion = mysqli_connect('localhost', 'root', '', 'twitter') or die(mysql_error($mysqli));
$id=$_POST['id'];
$consulta = "SELECT * FROM `tweet` WHERE `id_tweet` = '$id'";
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