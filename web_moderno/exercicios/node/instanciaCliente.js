// Node faz cache de objeto
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Aqui é objeto factory, novas instancias então nao tem cache
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)


contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)