function sede() {
    $.ajax({
        url: "./sql.php",
        method: "post",
        data: {
            query: "SELECT ID, id_Sede FROM `asesoria` ;"
        },
        success: (response) => {
            talents = JSON.parse(response);
            html = "<option value='' disabled selected>Seleccione una sede</option>";
            for (let i = 0; i < talents.length; i++) {
                html += "<option value='" +  talents[i]["ID"] + "'> " + talents[i]["id_Sede"] + "</option>";
            }
            $("#sede").html(html);
        }
    });
}

sede();
