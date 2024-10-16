<?php

?>

<style>
    .select-container { flex-direction: column; }
    .button-container { margin-left: 0; }
</style>

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
                    <select class="form-select" name="talent" id="talent" onclick="agregar()"></select>
                    <select class="form-select" name="sede" id="sede"></select>
                    <select class="form-select" name="categoria" id="categoria"></select>
                </div>
                <div class="button-container">
                    <button class="btn btn-secondary">Eliminar</button>
                    <button type="submit" class="btn btn-primary">Buscar</button>
                </div>
            </div>
        </div>
    </form>
</body>

<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<script src="./assets/js/sede.js"></script>
<script src="./assets/js/talent.js"></script>
<script src="./assets/js/categoria.js"></script>