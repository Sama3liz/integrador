<?php
$servername = "localhost";
$username = "prueba";
$password = "c8u$7ShG";
$dbname = "db_mantenimiento";

  try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
    // sql to create table

         $sql = "CREATE TABLE mc_en (
            fecha VARCHAR(11),
            nombretaller VARCHAR(50),
            costos  SMALLINT,
            kilometraje SMALLINT,
            mantenimiento VARCHAR(50),
            observaciones VARCHAR(50)
           )";
    $conn->exec($sql);
    echo "La Instalacion a sido existosa <br>";
    } catch(PDOException $e) {
      echo "Error: No se encuntra conexion al servidor SQL o el aplicativo ya esta instalado";
  }
  
  $conn = null;

?>