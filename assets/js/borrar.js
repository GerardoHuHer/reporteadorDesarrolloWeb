function borrarFiltros() {
    document.getElementById("date-container-inicio").innerHTML = "";
    document.getElementById("date-container-final").innerHTML = "";
    document.getElementById("talents-container").innerHTML = "";
    document.getElementById("sedes-container").innerHTML = "";
    document.getElementById("categorias-container").innerHTML = "";
    document.getElementById("fecha-inicio").value = "";
    document.getElementById("fecha-fin").value = "";
}

function borrarFechaIn() {
    document.getElementById("fecha-inicio").value = "";
    document.getElementById("date-container-inicio").innerHTML = "";

}

function borrarFechaFin() {
    document.getElementById("fecha-fin").value = "";
    document.getElementById("date-container-final").innerHTML = "";

}
