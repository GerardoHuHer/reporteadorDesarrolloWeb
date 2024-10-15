<?php

// require_once __DIR__ . '/vendor/autoload.php';

// $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
// $dotenv->load();



// $host = $_ENV["HOST"];
// $user = $_ENV["USER"];
// $password = $_ENV["PASSWORD"];
// $db = $_ENV["DB"];

$host = "localhost";
$user = "gerardo";
$password = "cualquiera";
$db = "proyecto";


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


