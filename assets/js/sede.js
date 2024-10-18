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
}
sede();

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
