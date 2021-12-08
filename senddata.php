<?php
          
          // Server name => localhost
          // Username => root
          // Password => empty
          // Database name => test
          // Passing these 4 parameters
          $connect = mysqli_connect("localhost", "prueba","c8u$7ShG", "db_mantenimiento"); 
            
          $query = '';
          $table_data = '';
          
         
          $data = json_decode(file_get_contents("php://input"));
          
          $servername = "localhost";
          $username = "prueba";
          $password = "c8u$7ShG";
          $dbname = "db_mantenimiento";

          try {
          $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
          // set the PDO error mode to exception
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $sql = "INSERT INTO mc_en (fecha,nombretaller,costos,kilometraje,mantenimiento,observaciones)
          VALUES ('$data->fecha', '$data->nombretaller', '$data->costos','$data->kilometraje','$data->mantenimiento','$data->observaciones')";
          // use exec() because no results are returned
          $conn->exec($sql);
          echo "New record created successfully"; 
          }           catch(PDOException $e) {
          echo $sql . "<br>" . $e->getMessage();
          }

          $conn = null;
          
        ?>