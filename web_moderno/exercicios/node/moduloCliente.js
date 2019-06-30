/*
    OBS:

    Ao importas um módulo, tem que passar o ponto, se não não tem como ./pasta/pasta/arquivo
*/


// Não importas um arquivo JavaScript não há a necessidade de usar extensão. ex: require('arquivo.js')
const moduloA = require('./moduloA') // requeira('tal_arquivo')
const moduloB = require('./moduloB')

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)