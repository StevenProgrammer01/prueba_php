<?php

$conexion = mysqli_connect('localhost', 'root', '', 'twitter') or die(mysql_error($mysqli));
$id_tweet = $_POST['id_tweet'];
$consulta = "SELECT * FROM `comentario` WHERE `id_comentado` = $id_tweet";
$resultado = mysqli_query($conexion,$consulta);
$datos = array();   
for ($i=0; $filas = mysqli_fetch_array($resultado); $i++) {
  for ($j=0; $j < mysqli_num_fields($resultado) ; $j++) {
    $datos[$i][$j] = $filas[$j];
  }
}
echo json_encode($datos);

?>