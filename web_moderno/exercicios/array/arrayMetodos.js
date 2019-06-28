const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove no final
console.log(pilotos)


pilotos.push('Verstappen') //insere no final
console.log(pilotos)

pilotos.shift() // remove no inicio
console.log(pilotos)

pilotos.unshift('Hamilton') // insere no inicio
console.log(pilotos)


//splice pode adicionar e remover elementos
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //no index 2 será adicionado o 'Bottas' e o 'Massa'
console.log(pilotos)

//remover
pilotos.splice(3, 1) // o index 3 sera retirado, somente ele pois no 2. parametro é 1
console.log(pilotos) 


const algunsPilotos1 = pilotos.slice(2) // Novo array apartir do index 2 contando com ele
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Agora pegando intervalo, 1. index entra ao 4. index nao entra
console.log(algunsPilotos2)