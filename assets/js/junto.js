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
            html += `<div class="subtexto-filtros">Miembro talent: </div>`;
            for (let i = 0; i < talents.length; i++) {
                html += `<div class="" id="t-${
                    talents[i]["ID"]
                }">${
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

var sedesD = [
    {
        ID: 1,
        llave: "mexico",
        Nombre: "México"
    },
    {
        ID: 4,
        llave: "aguascalientes",
        Nombre: "Aguascalientes"
    },
    {
        ID: 5,
        llave: "guadalajara",
        Nombre: "Guadalajara"
    },
    {
        ID: 6,
        llave: "ciudadup",
        Nombre: "Ciudad UP"
    }, {
        ID: 1007,
        llave: "sinsede",
        Nombre: "Sin sede"
    }
]

function sede() {
    let html = "<option value='' disabled selected>Selecciona una sede</option>";
    for (let i = 0; i < sedesD.length; i++) {
        html += "<option value='" + sedesD[i]["ID"] + "'> " + sedesD[i]["Nombre"] + "</option>";
    }
    $("#sedes").html(html);
    // $.ajax({
    //     url: "./sql.php",
    //     method: "post",
    //     data: {
    //         query: "SELECT ID, id_Sede FROM `asesoria` ;"
    //     },
    //     success: (response) => { // sedes = JSON.parse(response);
    //         html = "<option value='' disabled selected>Selecciona una sede</option>";
    //         // for (let i = 0; i < sedes.length; i++) {
    //         //     html += "<option value='" +  sedes[i]["ID"] + "'> " + sedes[i]["id_Sede"] + "</option>";
    //         // }
    //         console.log(response);
    //         console.log("SedesD: ", sedesD);
    //         for (let i = 0; i < sedesD.length; i++) {
    //             html += "<option value='" + sedesD[i]["ID"] + "'> " + sedesD[i]["Nombre"] + "</option>";
    //         }
    //         $("#sedes").html(html);
    //     }
    // });
}sede();

var idsSede = [];

function anadirSede() {

    selectedValue = document.getElementById("sedes").value;
    if (selectedValue !== "" && ! idsSede.includes(selectedValue)) {
        idsSede.push(selectedValue);
    }
    document.getElementById('sedes').selectedIndex = 0;
    imprimirSede();
}

function imprimirSede() {
    html = "";
    if (idsSede.length === 0) {
        html = "";
        $("#sedes-container").html(html);
        return;
    }

    for (let i = 0; i < idsSede.length; i++) {
        let nombre = "";
        console.log("idsSede ID: ", idsSede[i]);
        for (let j = 0; j < sedesD.length; j++) {
            console.log("Entre al for de j");
            if (sedesD[j]["ID"] === parseInt(idsSede[i])) {
                nombre = sedesD[j]["Nombre"];
                console.log("Nombre: ", nombre);
                break;
            }
        }

        html += `<div id="s-${
            idsSede[i]
        }">
                ${nombre} <button onclick="borrarSede('sede-${
            idsSede[i]
        }', 5)" type="button">Borrar</button>
               </div>`

    }
    $("#sedes-container").html(html);
    // $.ajax({
    //     url: "./sql.php",
    //     method: "post",
    //     data: {
    //         query: query_aux
    //     },
    //     success: (response) => {
    //         html = "";
    //         if (idsSede.length === 0) {
    //             html = "";
    //             $("#sedes-container").html(html);
    //             return;
    //         }

    //         for (let i = 0; i < idsSede.length; i++) {
    //             let nombre = "";
    //             console.log("idsSede ID: ", idsSede[i]);
    //             for (let j = 0; j < sedesD.length; j++) {
    //                 console.log("Entre al for de j");
    //                 if (sedesD[j]["ID"] === parseInt(idsSede[i])) {
    //                     nombre = sedesD[j]["Nombre"];
    //                     console.log("Nombre: ", nombre);
    //                     break;
    //                 }
    //             }

    //             html += `<div id="s-${
    //                 idsSede[i]
    //             }">
    //             ${nombre} <button onclick="borrarSede("sede-${
    //                 idsSede[i]
    //             }", 5)" type="button">Borrar</button>
    //            </div>`

    //         }
    //         $("#sedes-container").html(html);
    //     }
    // });
}

function borrarSede(n, m) {
    n = n.slice(m);
    idsSede = idsSede.filter(el => el !== n);
    imprimirSede();
}


function categoria() {
    $.ajax({
        url: "./sql.php",
        method: "post",
        data: {
            query: "SELECT ID, Nombre FROM categoria;"
        },
        success: (response) => {
            categorias = JSON.parse(response);
            console.log(response);
            console.log(categorias);

            html = "<option value='' disabled selected>Selecciona una categoría</option>";
            for (let i = 0; i < categorias.length; i++) { // html += `<option id='categoriaOP-${categorias[i]["ID"]}' value='${categorias[i]["ID"]}' onclick='anadirCategoria('categoriaOP-${categorias[i]['ID']}')' >${categorias[i]["Nombre"]}</option>`
                html += `<option id='categoriaOP-${
                    categorias[i]["ID"]
                }' value='${
                    categorias[i]["ID"]
                }' >${
                    categorias[i]["Nombre"]
                }</option>`;
            }
            // onclick='anadirCategoria('categoriaOP"+ categorias[i]['ID'] +"')'
            console.log(html);
            $("#categoria").html(html);
        }
    });
}

categoria();

var idsCategoria = [];

function anadirCategoria() {
    // console.log(idCategoria);
    // selectedCategory = document.getElementById(idCategoria).value;
    // idsCategoria.push(selectedCategory);
    // console.log(idsCategoria);

    selectedValue = document.getElementById("categoria").value;
    console.log("Categoría: ", selectedValue);
    if (selectedValue !== "" && ! idsCategoria.includes(selectedValue)) {
        idsCategoria.push(selectedValue);
    }
    console.log("Array categoria: ", idsCategoria);
    document.getElementById("categoria").selectedIndex = 0;

    imprimirCategoria();
}

function imprimirCategoria() {
    let query_aux = "";
    if (idsCategoria.length === 0) {
        query_aux = "SELECT * FROM categoria WHERE ID = -1; ";
    } else {
        query_aux = "SELECT * FROM categoria WHERE ";
        for (let i = 0; i < idsCategoria.length; i++) {
            if (i === idsCategoria.length - 1) {
                query_aux += " ID = " + idsCategoria[i] + ";";
            } else {
                query_aux += " ID = " + idsCategoria[i] + " OR";
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
            categorias = JSON.parse(response);
            console.log("Categorias: ", categorias);
            console.log("Categorias.length: ", categorias.length);
            if (categorias.length === 0) {
                $("#categorias-container").html(html);
                console.log("Entré");
                return;
            }
            for (let i = 0; i < categorias.length; i++) {
                console.log("Entré al for");
                html += `<div id="c-${
                    categorias[i]["ID"]
                }">${
                    categorias[i]["Nombre"]
                } <button id='categoria-${
                    categorias[i]["ID"]
                }' onclick='borrarCategoria("categoria-${
                    categorias[i]["ID"]
                }", 10)' type='button'>Borrar</button></div>`;
            }
            $("#categorias-container").html(html);
        }
    });
}

imprimirCategoria();

function borrarCategoria(n, m) {
    selectedValue = document.getElementById(n).id.slice(m);
    idsCategoria = idsCategoria.filter((el) => el !== selectedValue);
    imprimirCategoria();
}


function borrarFull() {
    borrarFiltros();
    ids = [];
    idsCategoria = [];
    idsSede = [];
}

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