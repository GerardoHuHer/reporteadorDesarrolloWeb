<?php

?>

<style>

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
                    <div>
                        <?php include "./components/talent.php"; ?> 
                    </div>
                    <div>
                        <?php include "./components/sedes.php"; ?> 
                    </div>
                    <div>
                        <?php include "./components/categoria.php"; ?> 
                    </div>
                </div>
                <div class="filter-container">

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