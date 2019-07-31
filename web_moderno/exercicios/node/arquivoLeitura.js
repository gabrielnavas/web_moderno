const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if(err) return

    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// leitura de um json direto, sem precisar do codigo acima
const config = require('./arquivo.json')
console.log(config.db)

//leitra de diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('arquivos: ')
    console.log(arquivos)
})