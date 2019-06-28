// Filter retorna o elemento para o novo array se for true apartir de uma condição

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 12.99, fragil: false }
]

const isFragil = produto => produto.fragil === true
const produtosFrageis = produtos.filter(isFragil)
console.log(produtosFrageis)

//retorna todos os items, pois todos são true.
const todosProdutos = produtos.filter( produto => {
    return true
})
console.log(todosProdutos)

//retorna nenhum produto, pois são todos false.
const nenhumProduto = produtos.filter( produto => {
    return false
})
console.log(nenhumProduto)

//retorna produtos com preco menor que 1000
const menorQue1000 = produto => produto.preco < 10000
const produtosPrecoMenores1000 = produtos.filter( menorQue1000 )
console.log(produtosPrecoMenores1000)