Array.prototype.forEach2 = function(callback){
    for(let i = 0 ; i < this.length ; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Ana', 'João', 'Maria', 'Joana']

// Chamando callback normal
aprovados.forEach2( function(nome, indice, array){
    console.log(`${indice+1}: ${nome}`)
})