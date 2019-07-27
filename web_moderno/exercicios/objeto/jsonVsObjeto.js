const obj = {
    a:1,
    b:2,
    c:3,
    soma(){
        return a+b+c
    }
}

//Objeto para string JSON
// JSON é formato de dados, por isso função foi excluida.
const jsonTextGerado = JSON.stringify(obj)
console.log(jsonTextGerado)


// string JSON para Objeto
const objTransf = JSON.parse(jsonTextGerado)
console.log(objTransf)


// tipos de formatos válidos:

// console.log(JSON.parse("{'a':2, b:1, c:3}")) -> formato nao válido
// console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3 }")) -> formato nao válido

console.log(JSON.parse('{ "a": 1, "b":2, "c":3 }')) // -> formato válido
console.log(JSON.parse('{ "a": 1.1, "b": "string", "c":true, "d":[2,3,4], "e":{"a":"string"}, "f": 2}')) // -> formato válido
