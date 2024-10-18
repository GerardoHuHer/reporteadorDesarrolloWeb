var fechas = [];

function obtenerFechaInicio() {
  let input = document.getElementById("fecha-inicio");
  let fecha = input.valueAsDate;
  let fechaString = input.value;
  if (fecha) {
    console.log("Fecha inicio seleccionada:", fecha);
    console.log("Fecha inicio seleccionada en string:", fechaString);
  } else {
    console.log("No se detectó la fecha");
  }
}

function obtenerFechaFin() {
  let input = document.getElementById("fecha-fin");
  let fecha = input.valueAsDate;
  let fechaString = input.value;
  if (fecha) {
    console.log("Fecha fin seleccionada:", fecha);
    console.log("Fecha fin seleccionada en string:", fechaString);
  } else {
    console.log("No se detectó la fecha");
  }
}

