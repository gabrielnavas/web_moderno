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

// modo feio
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})


// modo bonito
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turma => [].concat(...turma)) //transformar os 3 array em 1 só
    .then(turma => turma.map( aluno => aluno.nome))
    .then(nome => console.log(nome)) //exibe os 3 promise
    .catch(error => console.log(error))
    

 getTurma('D').catch( error => console.log(error.message) )   