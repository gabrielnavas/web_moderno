/*
    OBJETVO DO REDUCE É AGREGAR TODOS VALORES EM UM SÓ. 
*/

const alunos = [
    { nome: 'Gabriel', nota: 8.22, bolsista: true},
    { nome: 'Rafael', nota: 6.42, bolsista: false},
    { nome: 'Ana', nota: 5.22, bolsista: false},
]

const somenteNota = aluno => aluno.nota 

const somatoriaNotas = alunos.map(somenteNota).reduce( (acumulador, numAtual) => {
    return acumulador+numAtual
}, 10 /*valor inicial*/)

console.log(somatoriaNotas)


const somatoriaNotas2 = alunos.map(somenteNota).reduce( (acumulador, numAtual) => {
    return acumulador+numAtual
})

console.log(somatoriaNotas2)
