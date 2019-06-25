const notas = [1.2, 3.4, 22.1, 4.2]

for (i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: 'ana',
    idade: '88',
    peso: 64
}

for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}