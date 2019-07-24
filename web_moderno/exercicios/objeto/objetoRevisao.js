// colecao dinamica de pares chave/valor

const produto = new Object;
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)
delete produto['marca do produto']
console.log(produto)


const carro = {
    modele: 'A4',
    proprietario: {
        nome: 'Raul',
        idade: 56,
        enderecos: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Gabriel',
        idade: 25
    }, {
        nome: 'Ana',
        idade: 20
    }],
    calcularValorSeguro: {
        // ...
    }
}

console.log(carro)
carro.proprietario.enderecos.numero = 300
carro['proprietario']['enderecos']['logradouro'] = 'Av alguma coisa' 
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)