const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const multer = require('multer')

//usado para realizar upload de arquivos
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})



//dentro do diretorio atual '.', sirva todos os arquivos
app.use(express.static('.'))

//responsavel por tranformar o submit de um formulario em objeto
app.use(bodyParser.urlencoded({ extended: true }))

//responsavel por tranformar dados json em objeto
app.use(bodyParser.json())


//quando vier uma resquisicao de uma url /teste chame a funcao que esta dentro, retornando Ok
app.get('/teste', (req, res) => res.send(new Date()))


//recebo os dados do body do frontend e retorno os mesmo dados mais o id como um atributo a mais
app.post('/formulario', (req, res) => {

    console.log('Dados:', req.body)
    res.send({
        ...req.body,
        id: 7,
        souMaisUmParametro: 'esta Ok'
    })
})

app.get('/parOuImpar', (req, res) => {
    //formas de receber dados do front
    // req.body - ja foi vista
    // req.query - aqui seria usando o ..../?dados
    // req.params - aqui seria ...../:dados
    console.log(req.params)
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))
