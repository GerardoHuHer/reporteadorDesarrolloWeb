var fechas = [];
var fechaInicio;
var fechaFinal

function obtenerFechaInicio() {
  let input = document.getElementById("fecha-inicio");
  fechaInicio = input.value;
  let fechaString = input.value;
  if (fechaInicio) {
    console.log("Fecha inicio seleccionada:", fechaInicio);
    console.log("Fecha inicio seleccionada en string:", fechaString);
    imprimirFechaInicio();
  } else {
    console.error("No se detectó la fecha");
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
    console.error("No se detectó la fecha");
  }
}

function imprimirFechaInicio(){
  let result =  document.getElementById("fecha-inicio-container").innerHTML += `<div>${fechaInicio}</div>`;
  console.log("Result: ", result);
}

function imprimirFechaFin(){
  let result =  document.getElementById("fecha-fin-container").innerHTML += `<div>${fechaFinal}</div>`;
  console.log("Result: ", result);
}
