const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react) // nao funciona 
console.log(tecnologias.get('react')) //funciona
console.log(tecnologias.get('react').framework) //funciona






// Outro exemplo
const chavesVariadas = new Map([
    [function() { }, 'Função',],
    [{}, 'Objeto'],
    [123, 'Número']
])

// console.log(chavesVariadas.get(() => {}) // nao da pra ter acesso, pois precisa ter um nome....
//exibindo todos os valores:
chavesVariadas.forEach( (valor, chave) => console.log(chave, valor))


//alguns métodos do map
console.log( chavesVariadas.has(123) ) //existe essa chave?
chavesVariadas.delete(123) //deletar um elemento
console.log( chavesVariadas.has(123) ) //123 foi deletado
console.log( chavesVariadas.size ) //quantidade de elementos no Map 

//substituir valores de uma chave
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)