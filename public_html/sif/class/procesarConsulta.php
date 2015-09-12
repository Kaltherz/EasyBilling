<?php
require "dataBaseConnection.php";

// establecer conexion a la base de datos
$dbConnection = dbConnect();

// hacemos la consulta a la base de datos
$result = $dbConnection->query("SELECT * FROM `cliente` WHERE curp LIKE '".$_POST["curp"]."'");

if ($result->num_rows > 0) 
{
    // desplegamos los datos consultados 
    while($row = $result->fetch_assoc()) 
    {
        echo "<b>Apellidos: </b>".$row["ap_pat"]." ".$row["ap_mat"]."<br>"; 
        echo "<b>Nombre(s): </b>".$row["nombre"]."<br>";
        echo "<b>Fecha de Nacimiento: </b>".$row["dia"]."-".$row["mes"]."-".$row["anio"]."<br>";
        echo "<b>Estado: </b>".$row["estado"]."<br>";
        echo "<b>Regi&oacute;n: </b>".$row["region"]."<br>";
        echo "<b>RFC: </b>".$row["rfc"]."<br>";
        echo "<b>CURP: </b>".$row["curp"]."<br>";
        echo "<b>Domicilio: </b>".$row["domicilio"]."<br>";
        echo "<b>Tel&eacute;fono: </b>".$row["tel"]."<br>";
        echo "<b>Estado Civil: </b>".$row["estado_civil"]."<br>";
    }
}
else
{
    // si no se encontro a ninguna persona con esos datos, se le 
    // notifica al usuario
    echo "No se encontr&oacute; ning&uacute;n regitro con el par&aacute;metro especificado";
}
    
$dbConnection->close();
?>