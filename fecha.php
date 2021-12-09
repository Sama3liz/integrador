<table class="table table-bordered table-striped" id="for_chart">
         <thead>
					<tr>
   						 <th >FECHA_PEDIDO</th>
            <th >IMPORTE</th>
   						</tr>
					</thead>
<?php
$servername = "localhost";
$username = "prueba";
$password = "c8u$7ShG";
$dbname = "prueba";
 $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
 $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 $query = "SELECT FECHA_PEDIDO,IMPORTE FROM pedidos ORDER BY FECHA_PEDIDO DESC";
  $result = $con->query($query);
  //return only the first row (we only need field names)
  $row = $result->fetch(PDO::FETCH_ASSOC);

    $data = $con->query($query);
    $data->setFetchMode(PDO::FETCH_ASSOC);
   

    foreach($data as $row){
      echo'<tr>       
      <td>'.$row["FECHA_PEDIDO"].' </td>
      <td>'.$row["IMPORTE"].' </td>
      </tr>
      ';
    } 
    
 ?>
 </table>

    