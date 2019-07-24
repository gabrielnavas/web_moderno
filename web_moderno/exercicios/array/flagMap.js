const escola = [{
    nome: 'Turma M1',
    aluno: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3   
    }]
}, {
    nome: 'Turma M2',
    aluno: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3   
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.aluno.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat( [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ] )) 


//transformar uma matriz num array linear
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)