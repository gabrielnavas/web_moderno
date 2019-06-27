// pessoa -> endereco 123 -> 
const pessoa = { nome: 'João' }
pessoa.nome = 'Marcos'
console.log(pessoa)


// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}
//nao da pra fazer isso, pois o Object pessoa é const

//congelou o objeto, qualquer mudança nao terá mudanca alguma
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
delete pessoa.endereco
console.log(pessoa)  


//Cria objeto ja com propriedades imutaveis
const pessoaConstante = Object.freeze({ nome: 'Galindo', idade:32 });
pessoaConstante.nome = 'João'
console.log(pessoaConstante)