<?php
include "./variables.php";

$conn = new mysqli($host, $user, $password, $db);

$result = $conn->query($_POST['query']);

$respuesta = [];
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        array_push($respuesta, $row);
    }
}

echo json_encode($respuesta);

$conn->close();


