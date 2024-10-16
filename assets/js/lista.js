function lista() {
    let categories_list = "";
    listaLS.forEach(local => {
        categories_list += "<div>" + local + "<button></button></div>";
    });
}

lista();
