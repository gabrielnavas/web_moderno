const alunos = [
    { nome: 'Gabriel', nota: 8.22, bolsista: true},
    { nome: 'Rafael', nota: 6.42, bolsista: true},
    { nome: 'Ana', nota: 5.22, bolsista: false},
    { nome: 'Carlos', nota: 9.22, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas? PS: esse algoritmo
const isBolsista = (resultado, bolsista) => resultado && bolsista
const todosBolsistas = alunos.map(aluno => aluno.bolsista).reduce(isBolsista )
console.log('Todos são bolsistas? ', todosBolsistas)

//O bom e velho for, usando coisas funcionais já *-------------* <3
const verificarTodosBolsista = (alunos = []) => {
    const isBolsista = aluno => aluno.bolsista === true
    const naoFinalArray = (index, tamanhoArr) => index < tamanhoArr
    
    let i =0
    while(naoFinalArray(i, alunos.length) && isBolsista(alunos[i])) {
        i++;
    }

    return i === alunos.length ? true : false
}

//executando e vendo o resultado
console.log('Todos são bolsistas? ', verificarTodosBolsista(alunos))







const alunos2 = [
    { nome: 'Gabriel', nota: 8.22, bolsista: false},
    { nome: 'Rafael', nota: 6.42, bolsista: false},
    { nome: 'Ana', nota: 5.22, bolsista: false},
    { nome: 'Carlos', nota: 9.22, bolsista: false}
]

// Desafio 2: Algum aluno é bolsista?
const isTalvezBolsista = (alunoAnte, AlunoAtual) => alunoAnte || AlunoAtual
const alguemBolsista = alunos2.map(aluno => aluno.bolsista).reduce(isTalvezBolsista)
console.log('Alguem é bolsista ? ', alguemBolsista)