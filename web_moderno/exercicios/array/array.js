console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Rafael', 'João')
console.log(aprovados)

aprovados = ['Gabriel', 'Carlos', 'Jonathan']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined 

aprovados[3] = 'Paulo'
console.log(aprovados[3]) 

aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Galindo'
console.log(aprovados[9])
console.log(aprovados[8] === undefined)


// Sort
console.log(aprovados)
aprovados.sort() // método sort altera o array atual.   
console.log(aprovados)



// Deletar elementos no array
delete aprovados[1]
console.log(aprovados)



aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //1. parametro diz qual index de trabalho, 2. diz quantos elementos contando com o index vai excluir
console.log(aprovados)

aprovados.splice(1) //remove o elemento no index 1
console.log(aprovados)