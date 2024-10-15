function talent() {
    $.ajax({
        url: "../sql.php",
        method: "post",
        data: {
            query: "SELECT * FROM asesor;"
        },
        success: (response) => {
            talents = JSON.parse(response);
            html = "<option value='' disabled selected>Selecciona una opción</option>";
            for (let i = 0; i < talents.length; i++) {
                html += "<option value='" +  talents[i]["ID"] + "'> " + talents[i]["Nombre"] + "</option>";
            }
            $("#talent").html(html);
        }
    });
}

talent();
