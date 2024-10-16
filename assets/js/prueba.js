var categories = [];
function prueba() {
    selectedValue = document.getElementById("prueba").value;
    console.log("SelectedValue: ", selectedValue);
    if (selectedValue !== "" && ! categories.includes(selectedValue)) {
        categories.push(selectedValue);

    }
    console.log("Array: ", categories);
    imprimir();
}

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


function imprimir(){
    if(categories.length === 0){
        query_aux = "SELECT * FROM asesor WHERE ID = -1";
    } else {
        query_aux = "SELECT * FROM asesor WHERE ";
        for(let i = 0; i < categories.length; i++){
            if(i === categories.length - 1)  {
               query_aux  += " ID = " + categories[i] ;
            } else{
                query_aux += " ID = " + categories[i] + " OR";
            }
        }
        query_aux += ";";
        console.log("Query: ", query_aux);
    }
     $.ajax({
        url: "../sql.php",
        method: "post",
        data: {
            query: query_aux,
        },
        success: (response) => {
            sedes = JSON.parse(response);
            if(sedes.length === 0){
               html = "<p>No se ha hecho ninguna búsqueda</p>" ;
               return; 
            }
            html = "";
            for (let i = 0; i < sedes.length; i++) {
                html += `<div>${sedes[i]["Nombre"]} <button >Borrar</button></div>`;
            }
            $("#lista-prueba").html(html);
        }
    });
}
imprimir();


function borrar(){
    // Aquí va el código que borra un ID del arreglo con los id's
    imprimir();
}