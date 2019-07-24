
// tipo 1
const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b, c:c}
console.log(obj1)

// tipo 2
const obj2 = { a,b,c}
console.log(obj2)


// tipo 3
const nomeAtrr = 'nota'
const valorAttr = 7.7

const obj3 = {}
obj3[nomeAtrr] = valorAttr
console.log(obj3)


// tipo 4
const obj4 = {[nomeAtrr]: valorAttr}
console.log(obj4)


// tipo 5
const obj5 = {
    funcao1: function() {
        // ...
    },
    //tipo 5
    funcao2(){
        // ...
    }
}
console.log(obj5)