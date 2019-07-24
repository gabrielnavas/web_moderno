
// imprime letra por letra da string
for (let letra of 'Cod3r') {
    console.log(letra)
}


// imprime string por string do array
const assuntosEcma = ['map', 'Set', 'Promise']


// of pega valor por valor
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

// in pega index por index
for (let i in assuntosEcma) {
    console.log(i)
}



//usando Map
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

//exibe objeto por objeto do map
for (let assunto of assuntosMap) {
    console.log(assunto)
}

// valores
for (let assunto in assuntosMap) {
    console.log(assunto)
}

// exibe somente as chaves dos assuntos
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}


//exibe somente os valores das chaves 
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}



const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}

