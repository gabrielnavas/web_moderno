Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i =0 ; i < this.length ; i++){
        if(callback(this[i], i, this))
            newArray.push(this[i])
    }

    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 12.99, fragil: false }
]

const isFragil = produto => produto.fragil === true
const produtosFrageis = produtos.filter2(isFragil)
console.log(produtosFrageis)

