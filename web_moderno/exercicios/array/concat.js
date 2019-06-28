/*
    Usando para concatenar arrays
    Array original não é afetado no método concat()
*/


const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei'] 
const todos = filhas.concat(filhos, 'Gabriel', 'Navas') // Posso passar quantos argumentos a mais eu quiser. 
console.log(todos, filhas, filhos)

// Posso passar passar assim, array em dois niveis vira de 1 nivel. 
console.log(['a', 'b'].concat( [1, 2], [3, 4], 5, [[6, 7]] )) 

