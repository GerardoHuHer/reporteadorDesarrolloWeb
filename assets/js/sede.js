function sede() {
    $.ajax({
        url: "./sql.php",
        method: "post",
        data: {
            query: "SELECT ID, id_Sede FROM `asesoria` ;"
        },
        success: (response) => {
            sedes = JSON.parse(response);
            html = "<option value='' disabled selected>Selecciona una opción</option>";
            for (let i = 0; i < sedes.length; i++) {
                html += "<option value='" +  sedes[i]["ID"] + "'> " + sedes[i]["id_Sede"] + "</option>";
            }
            $("#sede").html(html);
        }
    });
}

sede();
