<?php
	header("access-control-allow-origin: *");
	$email = $_POST['email'];
	$pass = $_POST['pass'];
	include('conectar.php');
	$link = Conectarse();
	$resuEmail = mysql_query('select email from usuarios',$link);
	$resuPass = mysql_query('select pass from usuarios',$link);
	$respuesta = 'ok';
	while ($row = mysql_fetch_array($resuEmail)) {
		if ($row[0] == $email) {
			while ($row2 = mysql_fetch_array($resuPass)) {
				if ($row2[0] == $pass) {
					header('Content-Type: application/json');
					echo json_encode($respuesta);
				}
			}
		}

	}
?>
