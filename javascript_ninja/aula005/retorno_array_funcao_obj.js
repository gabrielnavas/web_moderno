//acesso direto a array
function myFunctionArray() {
    return [1,2,3];
}
console.log(myFunctionArray()[0]);

//acesso direto a obj
function myFunctionObj() {
    return {
        nome: 'gabriel',
        idade: 26,
        pegarIdade : function(){
            return 'idade'; // da pra usar this aqui??
        }
    }
}
console.log(myFunctionObj()['nome']);
console.log(myFunctionObj().pegarIdade());
