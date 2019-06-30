console.log(module.exports === this)
console.log(module.exports === exports)

// Visiveis para fora

this.a = 1 // Referencia para module.exports
exports.b = 2 //referencia para module.exports
module.exports.c = 3

// Colocando exports null, module.exports apontara para global ainda, pois exports é outra variavel
exports = null
console.log(module.exports)

exports = {
    nome: 'Gabriel'
}

console.log(module.exports)
module.exports = {
    publico: true
}
