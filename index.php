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
                    <input type="date" id="fecha-inicio" name="fecha-inicio" onchange="obtenerFechaInicio()">
                    <button type="button" class="btn" onclick="borrarFechaIn()">Borrar</button>
                    <input type="date" id="fecha-fin" name="fecha-fin" placeholder="Fecha de fin" onchange="obtenerFechaFin()">
                    <button type="button" class="btn" onclick="borrarFechaFin()">Borrar</button>

                </div>
                <div class="d-flex select-container">
                    <div>
                        <select class="form-select" name="talent" id="talent" onclick="anadirTalent()"></select>
                    </div>
                    <div>
                        <select class="form-select" name="sedes" id="sedes" onclick="anadirSede()"></select>
                    </div>
                    <div>
                        <select class="form-select" name="categoria" id="categoria" onclick="anadirCategoria()">

                        </select>
                    </div>
                </div>
                <div class="button-container">
                    <button type="button" class="btn btn-secondary" onclick="borrarFull()">Eliminar</button>
                    <button onclick="query()" type="button" class="btn btn-primary">Buscar</button>
                </div>

                <div id="filter-container" class="filter-container">
                    <div id="date-container-inicio"></div>
                    <div id="date-container-final"></div>
                    <div id="talents-container"></div>
                    <div id="sedes-container"></div>
                    <div id="categorias-container"></div>
                </div>
            </div>
        </div>
    </form>
    <div class="d-flex"><ul class="m-auto"><li><button type="button" class="btn" onclick="changeNumber(1)">Resultados</button></li><li><button type="button" class="btn" onclick="changeNumber(2)">Categoria</button></li></ul></div>
    <div class="d-flex" id="tablas">

    </div>
</body>

</html>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<!-- <script src="./assets/js/sede.js"></script>
<script src="./assets/js/talent.js"></script>
<script src="./assets/js/categoria.js"></script> -->
<script src="./assets/js/query.js"></script>
<script src="./assets/js/fechas.js"></script>
<!-- <script src="./assets/js/borrar.js"></script> -->
<script src="./assets/js/junto.js"></script>
