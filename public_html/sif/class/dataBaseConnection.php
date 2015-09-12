<?php
    // datos de conexion a la base de datos
    define("Host", "mysql.serversfree.com");
    define("User", "u858663578_admin");
    define("Password", "magestics1");
    define("DataBase", "u858663578_clien");
    
    
    // Esta funcion establece la conexion a la base de datos utilizando los 
    // datos de conexion predefinidos
    function dbConnect()
    {
        // establecer conexion a la BD
        $dbConnection = new mysqli(Host, User, Password, DataBase);
        
        // revisar que la conexion fue exitosa
        if ($dbConnection->connect_error) 
        {
            // si no fue exitosa, desplegar mensaje de error
            die
            (
                "Fall&oacute; la conexion a la base de datos: " . 
                $dbConnection->connect_error
            );
            
            // no retornar ningun objeto
            return NULL;
        }
        
        // si la conexion fue exitosa, retornar la conexion
        return $dbConnection;
    }
?>