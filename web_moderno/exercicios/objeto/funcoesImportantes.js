const pessoa = {
    nome: 'Maria',
    idade: 2,
    peso: 13
}

//Objeto é um conjunto de chaves(keys) e valores.
//pega somente as chaves aqui => [ 'nome', 'idade', 'peso' ]
console.log(Object.keys(pessoa))


//------------------------------------------------------------------------------------------


//pega somente os valores de um objeto => [ 'Maria', 2, 13 ]
console.log(Object.values(pessoa))



//------------------------------------------------------------------------------------------

//pega as chaves e valores em arrays => [ [ 'nome', 'Maria' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
console.log(Object.entries(pessoa))

//demonstracao de iteracao do entries 1
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
})

//demonstracao de iteracao do entries 2
Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})



//------------------------------------------------------------------------------------------


//adicionar uma propriedade com mais controle
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //iteravel
    writable: false, //vai ser modificada?
    value: '0101/2019'
})
//mostrando nova propriedade
console.log(Object.keys(pessoa))

//nao tem como mudar, pois foi definida como uma propriedade writable: false
pessoa.dataNascimento = '0101/2017'
console.log(pessoa)


//------------------------------------------------------------------------------------------

/*  Object.assing (ECMAScript 2015)
    Pega objetos e concatena os atributos dentro de um outro objeto
    caso se repitir nomes, é atribuido somente o ultimo adicionado (sobrescrito)
*/const objDest = { a:1 }
const obj1 = { b: 2 }
const obj2 = { c : 3, d :4 }
const obj3 = { e : 4, d : 5 }

Object.assign(objDest, obj1, obj2, obj3)
console.log(objDest)
