var registrosTotal;
var horasTotales;
var duracionMedia;
var horasTotalesTalent;
var profesores;

var diccionario = {};
var diccionarioAsesor = {};
var num;
var cate = [
    "AIA",
    "DCL",
    "AEC",
    "ARC",
    "DIT",
    "ACD",
    "SGT",
    "LMS",
    "MRA"
];
var diccionarioCategoria = {};

function borrar(n) {
    n = n.slice(2);
    return n;
}
function getChildern(idContenedor) {
    let ids = [];
    let container = document.getElementById(idContenedor);
    if (! container) {
        console.error("No se encontró el id " + idContenedor);
        return [];
    }
    let children = container.children;
    Array.from(children).forEach((child) => {
        if (child.id) {
            ids.push(child.id);
        }
    });
    return ids;
}

function query() {
    diccionario[1] = getChildern("date-container-inicio");
    diccionario[2] = getChildern("date-container-final");
    diccionario[3] = getChildern("talents-container");
    diccionario[4] = getChildern("sedes-container");
    diccionario[5] = getChildern("categorias-container");

    if (diccionario[1].length === 0) {
        diccionario[1].push("1700-01-01");
    }
    if (diccionario[2].length === 0) {
        diccionario[2].push(new Date().toISOString().split("T")[0]);
    }
    console.log(diccionario);
    if (! num) {
        num = 1;
    }
    cambiarTabla(parseInt(num));
}

function sendRequestRespuestas() {
    registrosTotal = 0;
    horasTotales = 0;
    duracionMedia = 0;
    horasTotalesTalent = 0;
    profesores = 0;

    $("#tabla").html("");
    diccionarioCategoria = {
        AIA: {
            ID: "AIA",
            Nombre: "Apoyo a la integridad Acádemica",
            Sesiones: [],
            Profesores: [],
            TotalHorasProfes: 0,
            TotalHorasTalent: 0,
            DuracionMediaProf: 0,
            DuracionMediaTalent: 0
        },
        DCL: {
            ID: "DCL",
            Nombre: "Diseño de cursos en línea",
            Sesiones: [],
            Profesores: [],
            TotalHorasProfes: 0,
            TotalHorasTalent: 0,
            DuracionMediaProf: 0,
            DuracionMediaTalent: 0
        },
        AEC: {
            ID: "AEC",
            Nombre: "Apoyo a las estrategias educativas",
            Sesiones: [],
            Profesores: [],
            TotalHorasProfes: 0,
            TotalHorasTalent: 0,
            DuracionMediaProf: 0,
            DuracionMediaTalent: 0
        },
        ARC: {
            ID: "ARC",
            Nombre: "Asesoría de recursos digitales",
            Sesiones: [],
            Profesores: [],
            TotalHorasProfes: 0,
            TotalHorasTalent: 0,
            DuracionMediaProf: 0,
            DuracionMediaTalent: 0
        },
        DIT: {
            ID: "DIT",
            Nombre: "Duda e información sobre Talent",
            Sesiones: [],
            Profesores: [],
            TotalHorasProfes: 0,
            TotalHorasTalent: 0,
            DuracionMediaProf: 0,
            DuracionMediaTalent: 0
        },
        ACD: {
            ID: "ACD",
            Nombre: "Asesoría en competencias docentes",
            Sesiones: [],
            Profesores: [],
            TotalHorasProfes: 0,
            TotalHorasTalent: 0,
            DuracionMediaProf: 0,
            DuracionMediaTalent: 0
        },
        SGT: {
            ID: "SGT",
            Nombre: "Seguimiento de capacitaciones",
            Sesiones: [],
            Profesores: [],
            TotalHorasProfes: 0,
            TotalHorasTalent: 0,
            DuracionMediaProf: 0,
            DuracionMediaTalent: 0
        },
        LMS: {
            ID: "LMS",
            Nombre: "Asesoría en LMS",
            Sesiones: [],
            Profesores: [],
            TotalHorasProfes: 0,
            TotalHorasTalent: 0,
            DuracionMediaProf: 0,
            DuracionMediaTalent: 0
        },
        MRA: {
            ID: "MRA",
            Nombre: "Medición de resultados de aprendizaje",
            Sesiones: [],
            Profesores: [],
            TotalHorasProfes: 0,
            TotalHorasTalent: 0,
            DuracionMediaProf: 0,
            DuracionMediaTalent: 0
        }
    };
    fechaIni = diccionario[1];
    fechaFin = diccionario[2];
    arrTalents = diccionario[3];
    arrSedes = diccionario[4];
    arrCategorias = diccionario[5];

    queryResultados = "SELECT asesoria.ID as ID_Asesoria, asesor.ID AS ID_talent, asesoria.Correo as Correo, asesoria.Fecha as Fecha, asesoria.Duracion, categoria.Llave as Llave, categoria.ID AS ID_categoria, asesor.Nombre as Nombre_Asesor, asesoria.id_Sede as id_Sede FROM `asesoria`, asesor, categoria, asesoria_asesor WHERE asesoria.id_Categoria = categoria.ID AND asesoria.ID = asesoria_asesor.id_Asesoria AND asesoria_asesor.id_Asesor = asesor.ID";

    if (fechaIni.length !== 0) {
        queryResultados += ` AND asesoria.Fecha > '${fechaIni}'`;
    }
    if (fechaFin.length !== 0) {
        queryResultados += ` AND asesoria.Fecha < '${fechaFin}'`;
    }
    if (arrTalents.length !== 0) {
        queryResultados += " AND (";
        for (let i = 0; i < arrTalents.length; i++) {
            if (i === arrTalents.length - 1) {
                queryResultados += " asesor.ID = " + borrar(arrTalents[i]);
            } else {
                queryResultados += " asesor.ID = " + borrar(arrTalents[i]) + " OR";
            }
        }
        queryResultados += ") ";
    }
    if (arrSedes.length !== 0) {
        queryResultados += " AND (";
        for (let i = 0; i < arrSedes.length; i++) {
            if (i === arrSedes.length - 1) {
                queryResultados += " asesoria.id_Sede = " + borrar(arrSedes[i]);
            } else {
                queryResultados += " asesoria.id_Sede = " + borrar(arrSedes[i]) + " OR";
            }
        }
        queryResultados += ") ";
    }
    if (arrCategorias.length !== 0) {
        queryResultados += " AND (";
        for (let i = 0; i < arrCategorias.length; i++) {
            if (i === arrCategorias.length - 1) {
                queryResultados += " categoria.ID = " + borrar(arrCategorias[i]);
            } else {
                queryResultados += " categoria.ID = " + borrar(arrCategorias[i]) + " OR";
            }
        }
        queryResultados += ") ";
    }
    console.log("Query de la muerte: ", queryResultados);
    let resumen;
    $.ajax({
        url: "./sql.php",
        method: "post",
        data: {
            query: queryResultados
        },
        success: (response) => {
            console.log("Response: ", response);
            html = "";
            respuesta = JSON.parse(response);
            if (respuesta.length === 0) {
                html += "<h4 class='m-auto texto-not-found'>No se encontró ningún resultado</h4>";
                resumen = `<div class="m-auto"><div class="row cinta">
                <div class="col resultado-container-1">Sesiones <p class="dato-numerico">0</p></div>
                 <div class="col resultado-container-2">Total Hrs. Profesor <p class="dato-numerico">0:0
                 </p></div>
                 <div class="col resultado-container-3">Duración Media Sesión <p class="dato-numerico">0:0</p></div>
                 <div class="col resultado-container-4">Total Hrs. Talent <p class="dato-numerico">0:0</p></div>
                  <div class="col resultado-container-5">Profesores <p class="dato-numerico">0</p></div>
        </div></div>`;
                $("#resumen").html(resumen);

                $("#tablas").html(html);
                return;
            }
            html = "<table class='m-auto table-resultados'><thead><tr><th>ID</th><th>Correo</th><th>Fecha</th><th>Duración</th><th>Categoría</th><th>Asesor</th></tr></thead>";
            html += "<tbody>";
            for (let i = 0; i < respuesta.length; i++) {
                html += `<tr>
                    <td>${
                    respuesta[i]["ID_Asesoria"]
                }</td>
                                        <td>${
                    respuesta[i]["Correo"]
                }</td>
                <td>${
                    respuesta[i]["Fecha"]
                }</td>
                <td>${
                    convertirMinutosHoras(respuesta[i]["Duracion"])
                }</td>
                <td>${
                    respuesta[i]["Llave"]
                }</td>
                <td>${
                    respuesta[i]["Nombre_Asesor"]
                }</td>
                </tr>`;
            }
            // Llenado para categorias
            for (let j = 0; j < respuesta.length; j++) { // Sesiones
                if (diccionarioCategoria[respuesta[j]["Llave"]].Sesiones.indexOf(respuesta[j]["ID_Asesoria"]) === -1) {
                    diccionarioCategoria[respuesta[j]["Llave"]].Sesiones.push(respuesta[j]["ID_Asesoria"]);
                    // Total horas Profesores
                    diccionarioCategoria[respuesta[j]["Llave"]].TotalHorasProfes += parseFloat(respuesta[j]["Duracion"]);
                    horasTotales += parseFloat(respuesta[j]["Duracion"]);
                    registrosTotal += 1;
                }
                // Profesores
                if (diccionarioCategoria[respuesta[j]["Llave"]].Profesores.indexOf(respuesta[j]["Correo"]) === -1) {
                    diccionarioCategoria[respuesta[j]["Llave"]].Profesores.push(respuesta[j]["Correo"]);
                    profesores += 1;
                }
                // Horas Talent
                diccionarioCategoria[respuesta[j]["Llave"]].TotalHorasTalent += parseFloat(respuesta[j]["Duracion"]);
                horasTotalesTalent += parseFloat(respuesta[j]["Duracion"]);
            }
            for (let i = 0; i < diccionarioCategoria.length; i++) { // profesores += diccionarioCategoria[cate[i]].Profesores.length;
            }
            for (let j = 0; j < respuesta.length; j++) {
                const totalProf = diccionarioCategoria[respuesta[j]["Llave"]].TotalHorasProfes;
                const totalTalent = diccionarioCategoria[respuesta[j]["Llave"]].TotalHorasTalent;
                if (diccionarioCategoria[respuesta[j]["Llave"]].Sesiones.length > 0) {
                    diccionarioCategoria[respuesta[j]["Llave"]].DuracionMediaProf = totalProf / diccionarioCategoria[respuesta[j]["Llave"]].Sesiones.length;
                    diccionarioCategoria[respuesta[j]["Llave"]].DuracionMediaTalent = totalTalent / diccionarioCategoria[respuesta[j]["Llave"]].Sesiones.length;
                }
            }
            if (registrosTotal > 0) {
                duracionMedia = horasTotales / registrosTotal;
                duracionMediaTalent = horasTotalesTalent / registrosTotal;
            }
            console.log("Diccionario para Categorias: ", diccionarioCategoria);
            resumen = `<div class="m-auto"><div class="row cinta">
                <div class="col resultado-container-1">Sesiones <p class="dato-numerico">${registrosTotal}</p></div>
                 <div class="col resultado-container-2">Total Hrs. Profesor <p class="dato-numerico">${
                convertirMinutosHoras(horasTotales)
            }</p></div>
                 <div class="col resultado-container-3">Duración Media Sesión <p class="dato-numerico">${
                convertirMinutosHoras(duracionMedia)
            }</p></div>
                 <div class="col resultado-container-4">Total Hrs. Talent <p class="dato-numerico">${
                convertirMinutosHoras(horasTotalesTalent)
            }</p></div>
                  <div class="col resultado-container-5">Profesores <p class="dato-numerico">${profesores}</p></div>
        </div></div>`;
            $("#resumen").html(resumen);

            (html += "</tbody></table>"),
            $("#tablas").html(html);
        }
    });
}

function sendRequestCategoria() {
    $("#tabla").html("");
    html = "<table class='m-auto'><thead><tr><th>Key</th><th>Nombre</th><th>Sesiones</th><th>Profesores</th><th>Total Horas Prof</th><th>Total Horas TALENT</th><th>Duración Media Prof</th><th>Duración Media TALENT</th></tr></thead>";
    html += "<tbody>";

    Object.values(diccionarioCategoria).forEach((elem) => {
        html += `<tr>
            <td>${
            elem.ID
        }</td>
            <td>${
            elem.Nombre
        }</td>
            <td>${
            elem.Sesiones.length
        }</td>
            <td>${
            elem.Profesores.length
        }</td>
            <td>${
            convertirMinutosHoras(elem.TotalHorasProfes)
        }</td>
            <td>${
            convertirMinutosHoras(elem.TotalHorasTalent)
        }</td>
            <td>${
            convertirMinutosHoras(elem.DuracionMediaProf)
        }</td>
            <td>${
            convertirMinutosHoras(elem.DuracionMediaTalent)
        }</td>
        </tr>`;
    });

    html += "</tbody></table>";
    $("#tablas").html(html);
}

function changeNumber(n) {
    num = n;
    console.log("Nuevo número: ", num);
    query();
}

function cambiarTabla(opc) {
    if (! opc) {
        opc = 1;
    }
    switch (opc) {
        case 1: sendRequestRespuestas();
            break;
        case 2: sendRequestCategoria();
            break;
        case 3: sendRequestAsesor();
            break;
    }
}

function sendRequestAsesor() {
    fechaIni = diccionario[1];
    fechaFin = diccionario[2];
    arrTalents = diccionario[3];
    arrSedes = diccionario[4];
    arrCategorias = diccionario[5];
    queryAsesor = `SELECT asesor.ID ,asesor.Correo, asesor.Nombre, asesoria.Duracion
FROM asesor, asesoria, asesoria_asesor, categoria
WHERE 
	asesor.ID = asesoria_asesor.id_Asesor AND
    asesoria_asesor.id_Asesoria = asesoria.ID AND
    asesoria.id_Categoria = categoria.ID`
    if (fechaIni.length !== 0) {
        queryAsesor += ` AND asesoria.Fecha > '${fechaIni}'`;
    }
    if (fechaFin.length !== 0) {
        queryAsesor += ` AND asesoria.Fecha < '${fechaFin}'`;
    }
    if (arrTalents.length !== 0) {
        queryAsesor += " AND (";
        for (let i = 0; i < arrTalents.length; i++) {
            if (i === arrTalents.length - 1) {
                queryAsesor += " asesor.ID = " + borrar(arrTalents[i]);
            } else {
                queryAsesor += " asesor.ID = " + borrar(arrTalents[i]) + " OR";
            }
        }
        queryAsesor += ") ";
    }
    if (arrSedes.length !== 0) {
        queryAsesor += " AND (";
        for (let i = 0; i < arrSedes.length; i++) {
            if (i === arrSedes.length - 1) {
                queryAsesor += " asesoria.id_Sede = " + borrar(arrSedes[i]);
            } else {
                queryAsesor += " asesoria.id_Sede = " + borrar(arrSedes[i]) + " OR";
            }
        }
        queryAsesor += ") ";
    }
    if (arrCategorias.length !== 0) {
        queryAsesor += " AND (";
        for (let i = 0; i < arrCategorias.length; i++) {
            if (i === arrCategorias.length - 1) {
                queryAsesor += " categoria.ID = " + borrar(arrCategorias[i]);
            } else {
                queryAsesor += " categoria.ID = " + borrar(arrCategorias[i]) + " OR";
            }
        }
        queryAsesor += ") ";
    }
    console.log("Query Asesor: ", queryAsesor);
    $.ajax({
        url: "./sql.php",
        method: "post",
        data: {
            query: queryAsesor
        },
        success: (response) => {
          console.log("Response Asesores: ", response)
          html = "";
          let respuesta = JSON.parse(response);
          console.log("Respuesta Asesores: ", respuesta);
            for (let i = 0; respuesta.length; i++) {
                let id = respuesta[i]["ID"]
                console.log("ID: ", id);
                let correo = respuesta[i]["Correo"]
                console.log("Correo: ", correo )
                let nombre = respuesta[i]["Nombre"]
                console.log("Nombre: ",nombre )
                let duracion = respuesta[i]["Duracion"]
                console.log("Duracion: ", duracion )

                if (! diccionarioAsesor[id]) {
                    console.log("Entré al if")
                    diccionarioAsesor[id] = {
                      // Id
                        id: respuesta[i]["ID"],
                        // Correo
                        correo: respuesta[i]["Correo"],
                        // Nombre
                        nombre: respuesta[i]["Nombre"],
                        // cantidad sesiones
                        sesiones: 1,
                        // Ocupamos este para la duración media
                        totalDuracion: respuesta[i]["Duracion"],
                        duracionMediaSesion: 0,
                        porcentajeTalent: 0,
                        porcentajeProf: 0,
                    }
                } else {
                  diccionarioAsesor[id].sesiones += 1;
                  diccionarioAsesor[id].totalDuracion += duracion;
                }
            }
            for(let i = 0; i < arrTalents.length; i++){
              if(!diccionarioAsesor[arrTalents[i]]){
                continue;
              }
              // Aquí van las operaciones y el llenado de la info para el div
            }
        }
    })
}

function convertirMinutosHoras(numeroMinutos) {
    let horas = Math.floor(parseFloat(numeroMinutos) / 60);

    let minutos = `${
        parseInt(numeroMinutos) % 60
    }`;
    if (minutos.length === 1) {
        minutos = "0" + minutos;
    }
    horaEnMinutos = `${horas}:${minutos}`;

    return horaEnMinutos;
}

function sumaArr(arr) {
    let sum = 0;
    arr.forEach(function (elem) {
        suma += elem;
    });
    return sum;
}
