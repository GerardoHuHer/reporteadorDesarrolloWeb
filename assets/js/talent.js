function talent() {
    $.ajax({
        url: "./sql.php",
        method: "post",
        data: {
            query: "SELECT * FROM asesor;"
        },
        success: (response) => {
            talents = JSON.parse(response);
            html = "<option value='' disabled selected>Seleccione un miembro talent</option>";
            for (let i = 0; i < talents.length; i++) {
                html += "<option value='" + talents[i]["ID"] + "'> " + talents[i]["Nombre"] + "</option>";
            }
            $("#talent").html(html);
        }
    });
}

talent();

var ids = [];

function anadirTalent() {

    selectedValue = document.getElementById("talent").value;
    console.log("SelectedValue: ", selectedValue);
    if (selectedValue !== "" && ! ids.includes(selectedValue)) {
        ids.push(selectedValue);
    }
    console.log("Array: ", ids);
    document.getElementById('talent').selectedIndex = 0;
    imprimirTalent();
}

function imprimirTalent() {
    let query_aux = "";
    if (ids.length === 0) {
        query_aux = "SELECT * FROM asesor WHERE ID = -1";
    } else {
        query_aux = "SELECT * FROM asesor WHERE ";
        for (let i = 0; i < ids.length; i++) {
            if (i === ids.length - 1) {
                query_aux += " ID = " + ids[i] + ";";
            } else {
                query_aux += " ID = " + ids[i] + " OR";
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
            talents = JSON.parse(response);
            console.log("Talents: ", talents);
            if (talents.length === 0) {
                $("#talents-container").html(html);
                return;
            }
            for (let i = 0; i < talents.length; i++) {
                html += `<div>${
                    talents[i]["Nombre"]
                } <button id='talent-${
                    talents[i]["ID"]
                }' onclick='borrarTalent("talent-${
                    talents[i]["ID"]
                }", 7)' type='button'>Borrar</button></div>`;
            }
            $("#talents-container").html(html);
        }
    });
}
imprimirTalent();

function borrarTalent(n, m) {
    selectedValue = document.getElementById(n).id.slice(m);
    ids = ids.filter(el => el !== selectedValue);
    imprimirTalent();
}
