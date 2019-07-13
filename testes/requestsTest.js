const request = require("request");


function exemplo_requisicao_default() {

    request({ uri: "http://www.unoeste.br/" }, 
        (error, response, body)=> {
            console.log(body);
        }
    )
}

function tentar_auth_form() {

}

