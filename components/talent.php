<?php
include "../sql.php";
$query = "SELECT * FROM asesor";
$result = $conn->query($query);
$conn->close();
