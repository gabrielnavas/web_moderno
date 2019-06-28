const nums = [1,2,3,4,5]

// Map gera um novo array, ele não transforma o array atual
// Map transforma um array em outro array definido pela funcao 

// For com propósito
let resultado = nums.map(function(e){
    return e*2
})
console.log(resultado)

const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(',', '.')}`


//Acho que isso fica lento, rs, melhor fazer numa funcao so esse monte de map
resultado = nums.map(soma10).map(triplo).map( paraDinheiro)
console.log(resultado)
