<?php
	header("access-control-allow-origin: *");
	$tipo = $_POST['radioUsuario'];
	include('conectar.php');
	$link = Conectarse();
	$arrayJson = array('tipo' => $tipo,);
	header('Content-Type: application/json');
	echo json_encode($arrayJson);
	//if ($tipo == "todos") {
	//	$usuarios = mysql_query('select * from usuarios', $link);
	//	while ($row = mysql_fetch_array($usuarios)) {
			
	//	}
//	}
?>