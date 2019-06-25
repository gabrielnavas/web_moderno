//Funcao é first class

//Criar de forma literal
function fun1(){}

//Armazenar em uma variavel (Funcao anonima)
const fun2 = function(){}

//Armazenar em um array
const array = [function(a,b){ return a+b }, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.fala = function(){ return 'Opa' }
console.log(obj.fala())

//Passar function como param
function run(fun){
    fun()
}

run(function novaFun(){
    console.log('Olá de novo.')
})


// Uma função pode retornar/conter um função
function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}

const sum = soma(1,2)
sum(3)
//ou
soma(1, 2)(3)

