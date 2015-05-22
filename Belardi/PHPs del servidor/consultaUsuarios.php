<?php
	header('Access-Control-Allow-Origin: *');
	$tipo = $_POST['radioUsuario'];
	include('conectar.php');
	$link = Conectarse();
	
	if ($tipo == "todos") {
		var $arrayJson = [];
		$usuarios = mysql_query('select * from usuarios', $link);
		while ($row = mysql_fetch_array($usuarios)) {
			var numero = {"numero" : $row[0]};
			$arrayJson.push(numero);
			header('Content-Type: application/json');
			echo json_encode($arrayJson);
		}
	}
?>