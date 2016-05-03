<?php
 include("config/conexion.php");
 $account = json_decode( file_get_contents( "php://input" ) ); // se obtiene el request del json que se mando desde el formulario de registro
 $insert = "INSERT INTO usuario ( Nombre, Apellido, Correo, Password, Id_Tipo_Usuario ) VALUES ( '$account->nombre', '$account->apellido', '$account->correo', MD5('$account->Password'), (SELECT Id_Tipo_Usuario FROM tipo_usuario WHERE Descripcion = 'Usuario'))";
 mysqli_query( $conexion, $insert ) or die ( "Error con la base de datos" );
 mysqli_close( $conexion );
 echo "El usuario ha sido registrado con éxito";

?>
