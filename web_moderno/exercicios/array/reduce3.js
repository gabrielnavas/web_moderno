Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 1 : 0
    let acumulador = valorInicial || this[0]
    
    for(let i = indiceInicial ; i < this.length ; i++){
        acumulador = callback(acumulador, this[i], i, this)
    } 

    return acumulador
}

const nums = [1,2,3,4,5]

const soma = (acumulador, num) => acumulador + num

console.log(nums.reduce2(soma))