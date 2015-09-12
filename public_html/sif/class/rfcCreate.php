<?php
	// Script para añadir cliente
	require "dataBaseConnection.php";

	// establecer conexion a la base de datos
	$dbConnection = dbConnect();

	//echo json_encode($_POST);

	$queryString = "INSERT INTO `cliente` (`ap_pat`, `ap_mat`, `nombre`, `estado`, `anio`, `mes`, `dia`, `curp`, `fotografia`, `rfc`, `domicilio`, `tel`, `estado_civil`, `region`) VALUES('".$_POST["ap_pat"]."', '".$_POST["ap_mat"]."', '".$_POST["nombre"]."', '".$_POST["estado"]."', '".$_POST["anio"]."', '".$_POST["mes"]."', '".$_POST["dia"]."', '".$_POST["curp"]."', 'default.png', '".$_POST["rfc"]."', '".$_POST["domicilio"]."', '".$_POST["tel"]."', '".$_POST["estado_civil"]."', '".$_POST["region"]."')";

	$register = $dbConnection->query($queryString);

	//echo $queryString;

	$dbConnection->close();
?>