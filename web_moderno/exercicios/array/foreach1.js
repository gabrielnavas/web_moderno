const aprovados = ['Ana', 'João', 'Maria', 'Joana']

// Chamando callback normal
aprovados.forEach( function(nome, indice, array){
    console.log(`${indice+1}: ${nome}`)
    console.log(array)
})

// Arrow fuction
aprovados.forEach( nome => console.log(nome) )

// Funcao arrow function separado
const exibirNomeAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirNomeAprovados)