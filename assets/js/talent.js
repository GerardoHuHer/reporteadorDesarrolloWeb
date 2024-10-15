import "jquery"

function talent(){
   $.ajax({
        url: "../../sql.php",
        method: "post",
        data: {
            query: "SELECT * FROM asesor;",
        },
        success:(response) => {
            talents = JSON.parse(response);
            html = "";
            talents.forEach(t => {
               html += "<option value'" + t[ID] + "'> " + t[Nombre] + "</option>";
            });
            $("#talent").html(html);
        },
   });
}

talent()