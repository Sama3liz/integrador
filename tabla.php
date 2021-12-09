<table class="table table-bordered table-striped" id="for_chart">
   <thead> 
    <tr>     
    <td >NUM_PEDIDO</td>      <!-- tabla encabezado -->
    <td >FECHA_PEDIDO</td>
    <td >CLIE</td>
    <td >REP</td>
    <td >FAB</td>
    <td >PRODUCTO</td>
    <td >CANT</td>
    <td >IMPORTE</td>
    </tr>
    </thead>

<?php
$servername = "localhost";    /* conexion base de datos */
$username = "prueba";           
$password = "c8u$7ShG";
$dbname = "prueba";
 $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
 $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $query = "SELECT * FROM pedidos ";  /* consulta base de datos*/
  $result = $con->query($query);
  //return only the first row (we only need field names)
  $row = $result->fetch(PDO::FETCH_ASSOC);

    $data = $con->query($query);
    $data->setFetchMode(PDO::FETCH_ASSOC);
    foreach($data as $row){  /* tabla */
        echo'<tr>
          <td>'.$row["NUM_PEDIDO"].' </td>          
          <td>'.$row["FECHA_PEDIDO"].' </td>
          <td>'.$row["CLIE"].' </td>
          <td>'.$row["REP"].' </td>
          <td>'.$row["FAB"].' </td>
          <td>'.$row["PRODUCTO"].' </td>
          <td>'.$row["CANT"].' </td>
          <td>'.$row["IMPORTE"].' </td>
        </tr>
        ';
    } 
 ?>
 </table>
    