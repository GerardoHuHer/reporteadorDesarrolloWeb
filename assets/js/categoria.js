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
            html = "<option value='' disabled selected>Selecciona una categoría</option>";
            for (let i = 0; i < categorias.length; i++) {
                html += "<option value='" +  categorias[i]["ID"] + "'> " + categorias[i]["Nombre"] + "</option>";

            }
            console.log(html);
            $("#categoria").html(html);
        }
    });
}

categoria();