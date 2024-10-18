var diccionario = {};

function query() {
    let filterContainer = document.getElementById("filter-container");
    console.log("filterContainer: ", filterContainer);
    if (! filterContainer) {
        console.error("No se encontró el elemento con id 'filter-container'");
        return;
    }
    let parentDivs = filterContainer.children;

    Array.from(parentDivs).forEach((parentDiv, index) => {
        let childDivs = parentDiv.children;
        let ids = [];

        Array.from(childDivs).forEach(child => {
            if (child.id) {
                ids.push(child.id);
            }
        });

        diccionario[index + 1] = ids;

    });
    if (diccionario[1].length === 0) {
        diccionario[1].push("1700-01-01");
    }
    if (diccionario[2].length === 0) {
        diccionario[2].push(new Date().toISOString().split('T')[0]);
    }
    console.log(diccionario);
    sendRequest();
}


function sendRequest() {
    fechaIni = diccionario[1];
    fechaFin = diccionario[2];
    arrTalents = diccionario[3]
    arrSedes = diccionario[4];
    arrCategorias = diccionario[5];
    function borrar(n) {
        n = n.slice(2);
        return n;
    }
    queryResultados = "SELECT asesoria.ID as ID_Asesoria, asesor.ID AS ID_talent, asesoria.Correo as Correo, asesoria.Fecha as Fecha, asesoria.Duracion, categoria.Llave as Llave, categoria.ID AS ID_categoria, asesor.Nombre as Nombre_Asesor, asesoria.id_Sede as id_Sede FROM `asesoria`, asesor, categoria, asesoria_asesor WHERE asesoria.id_Categoria = categoria.ID AND asesoria.ID = asesoria_asesor.id_Asesoria AND asesoria_asesor.id_Asesor = asesor.ID"

    if (fechaIni.length !== 0) {
        queryResultados += ` AND asesoria.Fecha > '${fechaIni}'`;
    }
    if (fechaFin.length !== 0) {
        queryResultados += ` AND asesoria.Fecha < '${fechaFin}'`
    }
    if (arrTalents.length !== 0) {
        queryResultados += " AND ("
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
        queryResultados += " AND ("
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
        queryResultados += " AND ("
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
    $.ajax({
        url: "./sql.php",
        method: "post",
        data: {
            query: queryResultados
        },
        success: (response) => {
            html = "";
            respuesta = JSON.parse(response);
            if (respuesta.length === 0) {
                $("#tablas").html(html);
                return;
            }
            html = "<table class='m-auto'><thead><tr><th>ID</th><th>Correo</th><th>Fecha</th><th>Duración</th><th>Categoría</th><th>Asesor</th></tr></thead>"
            html += "<tbody>"
            for (let i = 0; i < respuesta.length; i++) {
                html += `<tr>
                    <td>${
                    respuesta[i]["ID_talent"]
                }</td>
                                        <td>${
                    respuesta[i]["Correo"]
                }</td>
                <td>${
                    respuesta[i]["Fecha"]
                }</td>
                <td>${
                    respuesta[i]["Duracion"]
                }</td>
                <td>${
                    respuesta[i]["Llave"]
                }</td>
                <td>${
                    respuesta[i]["Nombre_Asesor"]
                }</td>
                </tr>`;
            }
            html += "</tbody></table>",
            $("#tablas").html(html);
        }
    });
}
