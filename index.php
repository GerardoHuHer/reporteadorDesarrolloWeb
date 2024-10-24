<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard de la Muerte</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/css/styles.css" rel="stylesheet">
    <link href="assets/css/table.css" rel="stylesheet">

</head>

<body>

    <form method="post">
        <div class="d-flex separado">
            <div class="m-auto input-container ">
                <h1>
                    Dashboard Talent
                </h1>
                <div class="d-flex fechas">
                    <div class="fecha">
                        <div class="texto-fecha">Inicio</div>
                        <input class="input-fecha" type="date" id="fecha-inicio" name="fecha-inicio" onchange="obtenerFechaInicio()">
                        <button type="button" class='btn btn-secondary btn-borrar-fecha' onclick="borrarFechaIn()">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div class="fecha">
                        <div class="texto-fecha">Fin</div>
                        <input type="date" id="fecha-fin" name="fecha-fin" placeholder="Fecha de fin" onchange="obtenerFechaFin()">
                        <button type="button" class="btn btn-secondary btn-borrar-fecha" onclick="borrarFechaFin()">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>

                </div>
                <div class="d-flex select-container">
                    <div>
                        <select class="form-select" name="categoria" id="categoria" onclick="anadirCategoria()"></select>
                    </div>
                    <div>
                        <select class="form-select" name="sedes" id="sedes" onclick="anadirSede()"></select>
                    </div>
                    <div>
                        <select class="form-select" name="talent" id="talent" onclick="anadirTalent()"></select>
                    </div>
                </div>

                <div id="filter-container" class="filter-container">
                    <div class="row">
                        <div class="subtexto-filtros">Intervalos de fecha</div>
                        <div class="show-fecha" id="date-container-inicio"></div>
                        <div class="show-fecha" id="date-container-final"></div>
                    </div>
                    <div class="row">
                        <div class="col" id="talents-container"></div>
                        <div class="col sedes-container" id="sedes-container"></div>
                        <div class="col" id="categorias-container"></div>
                    </div>
                </div>
                <div class="d-flex button-container">
                    <button type="button" class="btn btn-secondary btn-eliminar" onclick="borrarFull()">Eliminar</button>
                    <button onclick="query()" type="button" class="btn btn-primary btn-buscar">Buscar</button>
                </div>
            </div>
        </div>
    </form>
    <div class="m-auto resultados-container">
        <div id="resumen" class="d-flex resumen"></div>
        <div class="d-flex navbar-container">
            <button type="button" class="btn navbar-buttons" onclick="changeNumber(1)">Resultados</button>
            <button type="button" class="btn navbar-buttons" onclick="changeNumber(2)">Categoria</button>
            <button type="button" class="btn navbar-buttons" onclick="changeNumber(3)">Asesor</button>
       </div>
        <div class="d-flex" id="tablas"></div>
    </div>
</body>

</html>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<script src="./assets/js/query.js"></script>
<script src="./assets/js/junto.js"></script>