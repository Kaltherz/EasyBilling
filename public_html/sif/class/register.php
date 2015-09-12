<?php
	// Script para añadir cliente
	require "dataBaseConnection.php";

	// establecer conexion a la base de datos
	$dbConnection = dbConnect();

	echo "Aqu&iacute; estoy, si, a huevo\n";
	echo json_encode($dbConnection)."\n";
	echo "Me la pelan";

	$queryString = "INSERT INTO `personas` VALUES('".$_POST["name"]."', '".$_POST["lastnamef"]."', '".$_POST["lastnamem"]."', '".$_POST["gender"]."', '".$_POST["state"]."', '".$_POST["city"]."', '".$_POST["birthdate"]."', '".$_POST["curp"]."')";

	$register = $dbConnection->query($queryString);

	echo $queryString;

	$dbConnection->close();
?>