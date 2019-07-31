const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')

produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)


app.use(bodyParser.text()) //post do tipo text
app.use(bodyParser.json()) //post do tipo json
app.use(bodyParser.urlencoded({ extended: true })) //post do tipo form (extended é uns tipos de dados a mais que ele vai interpretar)


app.use(saudacao('gabriel'))

app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    //url => localhost:3000/clientes/relatorio?completo=true&ano=2018
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo', (req, res) => {
    //sem o body parser tem que tratar o post assim...
    // let corpo = ''

    // req.on('data', function(parteDados) {
    //     corpo += parteDados
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })

    res.send(req.body)
})

app.get('/opa', (req, res, next) => {
    console.log('Durante')
    res.json({
        data: [
            {id: 7, name:'gab', position: 1},
            {id: 34, name:'miguel', position: 2},
            {id: 54, name:'ana', position: 3},
        ],
        count: 3,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()

    // res.json([
    //     {id: 7, name:'gab', position: 1},
    //     {id: 34, name:'miguel', position: 2},
    //     {id: 54, name:'ana', position: 3},
    // ])

    // res.json({
    //     name: 'iPad 32GB',
    //     price: 344,
    //     discount: 0.12 
    // })
    // res.send('<h1>olá!!</h1>')
})

app.use('/opa', (req, res) => {
    console.log('Depois')
})


app.listen(3000, () => {
    console.log('Backend executando')
})
