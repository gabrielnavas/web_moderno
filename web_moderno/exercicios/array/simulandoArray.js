const quaseArray = { 0: 'Rafael', 1: 'Miguel', 2: 'João' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){ return Object.values(quaseArray) },
    enumerable: false
})

//console.log(quaseArray.0) não da certo.
console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)