function query() {
    let filterContainer = document.getElementById("filter-container");
    let parentDivs = filterContainer.children; // Obtiene todos los hijos del contenedor (los 3 divs principales)
    let diccionario = {};

    // Itera sobre los tres divs principales
    Array.from(parentDivs).forEach((parentDiv, index) => {
        let childDivs = parentDiv.children; // Obtiene los hijos (n divs) dentro de cada div principal
        let ids = [];

        // Itera sobre los divs hijos para obtener sus IDs
        Array.from(childDivs).forEach(child => {
            if (child.id) { // Solo agrega si el div tiene un id
                ids.push(child.id);
            }
        });

        // Agrega la lista de IDs al diccionario con el índice del div principal como clave
        diccionario[index + 1] = ids;
    });

    console.log(diccionario); // Muestra el diccionario en la consola   

}
query();
