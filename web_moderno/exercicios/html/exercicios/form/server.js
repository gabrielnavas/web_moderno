const express = require('express')
const app = express()
const bodyParser = require('body-parser') //cria um objeto pronto para trabalhar com os dados 

app.use(bodyParser.urlencoded({ extended : true })) //efetivar o bodyParser

app.post('/usuarios', (req, resp) => { // /usuarios é onde eu mandei os dados
    console.log(req.body) //printar o que veio do <form></form>
    resp.send('<h1>Parabéns!</h1>') //resposta para a página
})

app.listen(3003) //porta que eu coloquei no form para mandar