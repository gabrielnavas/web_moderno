let valor; //nao inicializada
console.log(valor);

valor = null; //ausência de valor
console.log(valor);
//console.log(valor.toStirng())/ //erro!

const produto = {}
console.log(produto.preco);
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar essa atribuicao, utilizar somente null
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)