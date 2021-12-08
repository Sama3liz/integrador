<?php
$servername = "localhost";
$username = "prueba";
$password = "c8u$7ShG";
$dbname = "db_mantenimiento";
 $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
 $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $query = "SELECT * FROM mc_en";
  $result = $con->query($query);
  //return only the first row (we only need field names)
  $row = $result->fetch(PDO::FETCH_ASSOC);

    $data = $con->query($query);
    $data->setFetchMode(PDO::FETCH_ASSOC);

    foreach($data as $row){
        echo'<tr>
          <td>'.$row["fecha"].' </td>
          <td>'.$row["nombretaller"].' </td>
          <td>'.$row["costos"].' </td>
          <td>'.$row["kilometraje"].' </td>
          <td>'.$row["mantenimiento"].' </td>
          <td>'.$row["observaciones"].' </td>
        </tr>
        ';
    } 
 ?>