<?php


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talent Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link>

    <style>
        .select-container {
            flex-direction: column;
        }
    </style>

</head>
<body>
    <div class="d-flex">
        <div class="m-auto filtro-container">
            <h1>
                Pruebita
            </h1>
            <div class="fechas">
                <input type="date" id="inicio" name="inicio" placeholder="Fecha de inicio">
                <input type="date" id="fin" name="fin" placeholder="Fecha de fin">
            </div>
            <div class="d-flex select-container">
                <select class="form-select" name="talent" id="talent">
                    <option value="" disabled selected>Seleccione un miembro</option>
                    <option value="0">Miembro1</option>
                    <option value="1">Miembro3</option>
                    <option value="2">Miembro3</option>
                </select>
                <select class="form-select" name="sede" id="sede">
                    <option value="" disabled selected>Todas las sedes</option>
                    <option value="0">Sede1</option>
                    <option value="1">Sede3</option>
                    <option value="2">Sede3</option>
                </select>
                <select class="form-select" name="categoria" id="categoria">
                    <option value="" disabled selected>Seleccione una categoria</option>
                    <option value="0">Categoria1</option>
                    <option value="1">Categoria3</option>
                    <option value="2">Categoria3</option>
                </select>
            </div>
        </div>
    </div>
</body>
</html>