require('./global')

// Acessar função que está em global definida em outro arquivo
console.log(MinhaApp.ola)

// Como tambem posso usar global.funcao
console.log(global.MinhaApp.mensagem())