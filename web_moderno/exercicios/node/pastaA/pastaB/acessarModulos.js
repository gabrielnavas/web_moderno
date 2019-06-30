

// Module de subpastas
const moduloA = require('../../moduloA')
console.log(moduloA.bemVindo)



// Modulo de subpastas
const c = require('./pastaC')
console.log(c.ola2)

/* 
    Ou usar padrao index, onde não precisa passar o arquivo especificamente 
    PS: usar nome index no arquivo onde dentro tem vários imports
*/
// Modulo de subpastas
const c2 = require('./pastaC')
console.log(c2.ola2)


// Modulo que esta no node_modules local
const saudacao = require('saudacao')
console.log(saudacao.bomDia)



// Module core do nodeJS
const http = require('http')
http.createServer( (req, resp) => {
    resp.write('Bom dia')
    resp.end()
}).listen(8080)
