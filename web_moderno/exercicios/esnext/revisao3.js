// ES8: Object.values/Object.entries

// Values -> transforma valores do obj em array
const obj = { a:1, b:2, c:3 }
console.log(Object.values(obj))

// entries -> transofmra o objeto em array de array, ou seja, cada obj vira um array separadamente
console.log(Object.entries(obj))


// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    // nome: nome,
    nome,
    ola(){
        return 'sou uma funcao'
    }
}
console.log(pessoa.nome, pessoa.ola())


// Class
class Animal {}
class Cachorro extends Animal {
    
    constructor(){
        super()
    }
    falar() {
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())