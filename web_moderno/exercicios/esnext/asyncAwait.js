// com promise...

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    // realizar requisicao get da url
    return new Promise( (resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados //recebendo os dados e ir concatenando no resultado
            })
    
            res.on('end', () => { 
                try{
                    resolve(JSON.parse(resultado))
                }
                catch(error) {
                    reject(error)
                }
            })
        })
    })
}


// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const turmaA = await obterAlunos('A')
    const turmaB = await obterAlunos('B')
    const turmaC = await obterAlunos('C')

    return [].concat(turmaA, turmaB, turmaC)
} //retorna um objeto AsyncFunction

//aqui tenho acesso ao que a funcao async retornou, usando o then
obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))