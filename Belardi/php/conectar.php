<?php
	function Conectarse() 
	{ 
   		if (!($link=mysql_connect("localhost","belardi","nati666000"))) 
   		{ 
      		echo "Error conectando a la base de datos."; 
      		exit(); 
   		} 
   		if (!mysql_select_db("belardi", $link)) 
   		{ 
      		echo "Error seleccionando la base de datos.".mysql_error(); 
      		exit(); 
   		} 
   		return $link; 
	} 
?>