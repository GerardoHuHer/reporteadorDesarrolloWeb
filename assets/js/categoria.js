function categoria() {
  $.ajax({
    url: "./sql.php",
    method: "post",
    data: {
      query: "SELECT ID, Nombre FROM categoria;",
    },
    success: (response) => {
      categorias = JSON.parse(response);
      console.log(response);
      console.log(categorias);

      html =
        "<option value='' disabled selected>Selecciona una categoría</option>";
      for (let i = 0; i < categorias.length; i++) {
        // html += `<option id='categoriaOP-${categorias[i]["ID"]}' value='${categorias[i]["ID"]}' onclick='anadirCategoria('categoriaOP-${categorias[i]['ID']}')' >${categorias[i]["Nombre"]}</option>`
        html += `<option id='categoriaOP-${categorias[i]["ID"]}' value='${categorias[i]["ID"]}' >${categorias[i]["Nombre"]}</option>`;
      }
      // onclick='anadirCategoria('categoriaOP"+ categorias[i]['ID'] +"')'
      console.log(html);
      $("#categoria").html(html);
    },
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
  if (selectedValue !== "" && !idsCategoria.includes(selectedValue)) {
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
      query: query_aux,
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
        html += `<div id="c-${categorias[i]["ID"]}">${
                    categorias[i]["Nombre"]
                } <button id='categoria-${
                    categorias[i]["ID"]
                }' onclick='borrarCategoria("categoria-${
                    categorias[i]["ID"]
                }", 10)' type='button'>Borrar</button></div>`;
      }
      $("#categorias-container").html(html);
    },
  });
}

imprimirCategoria();

function borrarCategoria(n, m) {
  selectedValue = document.getElementById(n).id.slice(m);
  idsCategoria = idsCategoria.filter((el) => el !== selectedValue);
  imprimirCategoria();
}
