<?php

require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();



$host = $_ENV["HOST"];
$user = $_ENV["USER"];
$password = $_ENV["PASSWORD"];
$db = $_ENV["DB"];


$conn = new mysqli($host, $user, $password, $db);
