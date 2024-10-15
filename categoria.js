import 'jquery'
$ajax({
    url: '',
    method: 'post',
    data:{
        query: "SELECT * FROM categoria"
    },
    succes:(response)=>{
        r = JSON.parse(response);
        html = "";
        categorias.forEach();
    }
})