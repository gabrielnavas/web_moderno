const sequencia = {
    _valor: 1, //convenção

    set valor(valor){
        if(valor > this._valor)
            this._valor = valor
    },

    get valor(){
        return this._valor++
    }
}

console.log(sequencia.valor)
console.log(sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor)
console.log(sequencia.valor)