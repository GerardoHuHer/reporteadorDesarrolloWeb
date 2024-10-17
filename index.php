<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talent Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/styles.css" rel="stylesheet">

</head>

<body>
    
    <form method="post">
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
                    <div>
                        <select class="form-select" name="talent" id="talent" onclick="anadirTalent()">

                        </select>
                    </div>
                    <div>
                        <select class="form-select" name="sedes" id="sedes" onclick="anadirSede()"></select>
                    </div>
                    <div>
                        <?php include "./components/categoria.php"; ?>
                    </div>
                </div>
                <div class="button-container">
                    <button class="btn btn-secondary">Eliminar</button>
                    <button type="submit" class="btn btn-primary">Buscar</button>
                </div>

                <div class="filter-container">
                    <div id="talents-container"></div>
                    <div id="sedes-container"></div>
                    <div id="categories-container"></div>   
                </div>
            </div>
        </div>
    </form>
</body>

</html>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<script src="./assets/js/sede.js"></script>
<script src="./assets/js/talent.js"></script>
<script src="./assets/js/categoria.js"></script>