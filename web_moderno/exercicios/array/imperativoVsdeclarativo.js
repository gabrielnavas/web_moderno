const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 4.8 },
    { nome: 'Denis', nota: 6.9 },
    { nome: 'Pedro', nota: 9.2 },
    { nome: 'Joaquina', nota: 8.5 },
    { nome: 'Leandro', nota: 2.6 },
    { nome: 'Jussara', nota: 7.9 }
]



// IMPERATIVO
let total1 = 0
for(let i =0 ; i < alunos.length ; i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)



// DECLARATIVO
const getNota = aluno => aluno.nota
const soma = (total, nota) => total+nota
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)


//SQL É DECLATARIVA
// select codigo, nome, email from clientes where ativo = 1
