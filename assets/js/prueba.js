function sede() {
    $.ajax({
        url: "../sql.php",
        method: "post",
        data: {
            query: "SELECT * FROM asesor ;"
        },
        success: (response) => {
            sedes = JSON.parse(response);
            html = "<option value='' disabled selected>Selecciona una opción</option>";
            for (let i = 0; i < sedes.length; i++) {
                html += "<option value='" + sedes[i]["ID"] + "'> " + sedes[i]["Nombre"] + "</option>";
            }
            $("#prueba").html(html);
        }
    });
}

sede();

var ids = [];

function anadir() {
    selectedValue = document.getElementById("prueba").value;
    console.log("SelectedValue: ", selectedValue);
    if (selectedValue !== "" && ! ids.includes(selectedValue)) {
        ids.push(selectedValue);
    }
    console.log("Array: ", ids);
    document.getElementById('prueba').selectedIndex = 0;
    imprimir();
}


function imprimir() {
    let query_aux = "";
    if (ids.length === 0) {
        query_aux = "SELECT * FROM asesor WHERE ID = -1";
    } else {
        query_aux = "SELECT * FROM asesor WHERE ";
        for (let i = 0; i < ids.length; i++) {
            if (i === ids.length - 1) {
                query_aux += " ID = " + ids[i] + " ;";
            } else {
                query_aux += " ID = " + ids[i] + " OR";
            }
        }
        console.log("Query: ", query_aux);
    }
    $.ajax({
        url: "../sql.php",
        method: "post",
        data: {
            query: query_aux
        },
        success: (response) => {
            html = "";
            sedes = JSON.parse(response);
            if (sedes.length === 0) {
                $("#lista-prueba").html(html);
                return;
            }
            for (let i = 0; i < sedes.length; i++) {
                html += `<div>${
                    sedes[i]["Nombre"]
                } <button id='talent-${
                    sedes[i]["ID"]
                }' onclick='borrar("talent-${
                    sedes[i]["ID"]
                }", 7)'>Borrar</button></div>`;
            }
            $("#lista-prueba").html(html);
        }
    });
}
imprimir();


function borrar(n, m) { // Aquí va el código que borra un ID del arreglo con los id's
    selectedValue = document.getElementById(n).id.slice(m); // talent-1

    ids = ids.filter(el => el !== selectedValue);

    imprimir();
}
