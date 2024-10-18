function sede() {
    $.ajax({
        url: "./sql.php",
        method: "post",
        data: {
            query: "SELECT ID, id_Sede FROM `asesoria` ;"
        },
        success: (response) => {

            sedes = JSON.parse(response);
            html = "<option value='' disabled selected>Selecciona una sede</option>";
            for (let i = 0; i < sedes.length; i++) {
                html += "<option value='" +  sedes[i]["ID"] + "'> " + sedes[i]["id_Sede"] + "</option>";
            }
            $("#sedes").html(html);
        }
    });
}

sede();

var idsSede = [];

function anadirSede() {

    selectedValue = document.getElementById("sedes").value;
    console.log("SelectedValue: ", selectedValue);
    if (selectedValue !== "" && ! idsSede.includes(selectedValue)) {
        idsSede.push(selectedValue);
    }
    console.log("Array: ", idsSede);
    document.getElementById('sedes').selectedIndex = 0;
    imprimirSede();
}

function imprimirSede() {
    let query_aux = "";
    if (idsSede.length === 0) {
        query_aux = "SELECT * FROM asesoria WHERE ID = -1";
    } else {
        query_aux = "SELECT * FROM asesoria WHERE ";
        for (let i = 0; i < idsSede.length; i++) {
            if (i === idsSede.length - 1) {
                query_aux += " ID = " + idsSede[i] + ";";
            } else {
                query_aux += " ID = " + idsSede[i] + " OR";
            }
        }
    }
    console.log("Query: ", query_aux);
    $.ajax({
        url: "./sql.php",
        method: "post",
        data: {
            query: query_aux
        },
        success: (response) => {
            html = "";
            sedes = JSON.parse(response);
            console.log("Sedes: ", idsSede);
            if (sedes.length === 0) {
                html = "";
                $("#sedes-container").html(html);
                return;
            }
            for (let i = 0; i < sedes.length; i++) {
                html += `<div id="s-${sedes[i]["id_Sede"]}">${
                    sedes[i]["id_Sede"]
                } <button id='sede-${
                    sedes[i]["ID"]
                }' onclick='borrarSede("sede-${
                    sedes[i]["ID"]
                }", 5)' type='button'>Borrar</button></div>`;
            }
            $("#sedes-container").html(html);
        }
    });
}
imprimirSede();

function borrarSede(n, m) {
    selectedValue = document.getElementById(n).id.slice(m);
    idsSede = idsSede.filter(el => el !== selectedValue);
    imprimirSede();
}
