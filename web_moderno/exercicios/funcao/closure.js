// Closure é o escopo criado quando uma função declarada
// Esse escopo permte a função acessar e manipular variáveis externas à função

// Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    this.dentro = function(){
        return x;
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())