<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reporteador</title>
</head>

<body>
    <input type="date" id="inicio" name="inicio" placeholder="Fecha de inicio">
    <input type="date" id="fin" name="fin" placeholder="Fecha de fin">
    <?php include "./components/sedes.php"; ?> 
    <?php include "./components/talent.php"; ?>
    <?php include "./components/categoria.php"; ?>

    

</body>

</html>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<script src="./assets/js/sede.js"></script>
<script src="./assets/js/talent.js"></script>
<script src="./assets/js/categoria.js"></script>