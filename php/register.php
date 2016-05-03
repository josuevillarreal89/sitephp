<?php

 include_once "config/config.php" ;
 header('Content-type: application/json');
$account = json_decode( file_get_contents( "php://input" ) ); // se obtiene el request del json que se mando desde el formulario de registro
 $insert = "INSERT INTO usuario ( Nombre, Apellido, Correo, Password, Id_Tipo_Usuario ) VALUES ( '$account->nombre', '$account->apellido', '$account->correo', MD5('$account->password'), (SELECT Id_Tipo_Usuario FROM tipo_usuario WHERE Descripcion = 'Usuario'))";
 mysqli_query( $conexion, $insert ) or die ( "Error con la base de datos" );
 mysqli_close( $conexion );

header("Content-type: application/json");
 $arr = array( "error" => "0", "message" => "Se registro con éxito" );
 print json_encode( $arr );

?>
