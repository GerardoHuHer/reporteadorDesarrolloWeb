<?php

// require_once __DIR__ . '/vendor/autoload.php';

// $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
// $dotenv->load();

// $host = $_ENV["HOST"];
// $user = $_ENV["USER"];
// $password = $_ENV["PASSWORD"];
// $db = $_ENV["DB"];

$host = "localhost";
$usr = "pantera";
$pwd = "cualquiera";
$dbname = "panteras";

$conn = new mysqli($host, $usr, $pwd, $dbname);

if($conn -> connect_error) {
    echo "error de conexion ".$conn->connect_error;
} else {
    echo "connected";
}
