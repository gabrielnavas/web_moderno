// sem promise...

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    // realizar requisicao get da url
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados //recebendo os dados e ir concatenando no resultado
        })

        res.on('end', () => { 
            callback(JSON.parse(resultado)) //json.parse(string) transforma string em objeto
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})
