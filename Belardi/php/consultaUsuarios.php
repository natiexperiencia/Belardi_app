<?php
	header("access-control-allow-origin: *");
	$tipo = $_POST['radioUsuario'];
	include('conectar.php');
	$link = Conectarse();
	//$arrayJason = [];
	
	if ($tipo == "todos") {
		$usuarios = mysql_query('select * from usuarios', $link);
		while ($row = mysql_fetch_array($usuarios)) {
			$arrayJson = array('numero' => $row[0], 'nombre' => $row[1], 'email' => $row[2], 'rol' => $row[4]);
		}
	}

	//if($tipo == 'todos'){
	//	$usuarios = mysql_query('select * from usuarios', $link);
	//	while ($row = mysql_fetch_array($usuarios)){
	//		$arrayJson['numero']=$row[0];
	//	}
//	}
	header('Content-Type: application/json');
	echo json_encode($arrayJson);
?>