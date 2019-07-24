function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
};

//this da funcao aponta pra global

//inicialmente preco e desc nao foram definidos
console.log(getPreco())

//agora foram definidos
global.preco = 20;
global.desc = 0.1;
console.log(getPreco())

//this aqui do getPreco o escopo é do objeto produto
console.log(produto.getPreco())


const carro = { preco: 49990, desc: 0.20 };

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//coloca o getPreco no contexto do objeto carro
console.log(getPreco.call(carro, desc = 0.17, moeda = '$')) 


// igual o call, so que os argumentos seguintes são dentro de um array
// global tem variaveis tb preco e desc
console.log(getPreco.apply(global, [0.17, '$'])) 
