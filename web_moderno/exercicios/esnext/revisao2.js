//Arrow Function
const soma = (a, b) => a+b; // sem{} retorna direto
const soma2 = (a, b) => {
    return a+b; // com chaves
}
console.log(soma(1, 2));



// Arrow function (this)
exports.a =2
const lexico1 = () => {
    console.log(this === exports) //this aponta para exports
    console.log(this.a)
}
const lexico2 = lexico1.bind({}) // Mesmo usando bind para o contexto lexico apotar para outro lugar, ele continua apontando para exports
lexico1()
lexico2()



// parametros default
function log(texto = 'Node') {
    console.log(texto)
}
log(null)
log('sou outro parametro mais forte')
log()



// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach( n => total+= n )
    return total
}
console.log(total(2 ,3, 4, 5)) 
