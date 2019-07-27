// Object.preventExtensions
// Previne para não extender o objeto
// Posso alterar normalmente as propriedades 
// Nao consigo inserir novos atributos no objeto 
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.group('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)



// Object.seal
// Não da pra adicionar/remover atributos no objeto
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))


//tentar adicionar um novo atr
pessoa.endereco = 'Rua ABC'
console.log(pessoa)

delete pessoa.endereco
console.log(pessoa)
