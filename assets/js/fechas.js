var fechas = [];
var fechaInicio = "";
var fechaFinal = "";

function obtenerFechaInicio() {
    let input = document.getElementById("fecha-inicio");
    fechaInicio = input.value;
    let fechaString = input.value;
    if (fechaInicio) {
        console.log("Fecha inicio seleccionada:", fechaInicio);
        console.log("Fecha inicio seleccionada en string:", fechaString);
        imprimirFechaInicio();
    } else {
        document.getElementById("fecha-inicio").innerHTML = "";
        imprimirFechaInicio();
        console.error("No se detectó la fecha inicio");
    }
}

function obtenerFechaFin() {
    let input = document.getElementById("fecha-fin");
    fechaFinal = input.value;
    if (fechaFinal) {
        console.log("Fecha fin seleccionada:", fechaFinal);
        imprimirFechaFin();
        // console.log("Fecha fin seleccionada en string:", fechaString);
    } else {
        document.getElementById("fecha-inicio").innerHTML = "";
        imprimirFechaFin();
        console.error("No se detectó la fecha final");
    }
}

function imprimirFechaInicio() {
    fecha = fechaInicio === "" ? "" : fechaInicio;
    let result = document.getElementById("date-container-inicio").innerHTML = `<div id="${fecha}">${
        fechaInicio === "" ? "" : fecha
    }</div>`;
    console.log("Result: ", result);
}

function imprimirFechaFin() {
    currentDate = new Date().toISOString().split('T')[0];
    console.log("CurrentDate: ", currentDate);
    fecha = fechaFinal === "" ? currentDate : fechaFinal;
    let result = document.getElementById("date-container-final").innerHTML = `<div id="${fecha}">${
        fechaFinal === "" ? "Fecha Actual" : fecha
    }</div>`;
    console.log("Result: ", result);
}
