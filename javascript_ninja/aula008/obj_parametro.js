
//OBJETO POR PARAMETRO
var car = {
    color: 'red'
};

function getCarColor(myCar){
    return myCar.color;
}

console.log(getCarColor(car));


//FUNCAO POR PARAMETRO
function showOtherFunction(func){
    return func();
}

function returnedFunction(){
    return 'Returned function';
}

//IMPRIMI O RETORNO DE UMA FUNCAO QUE RETORNA OUTRA FUNCAO
console.log( showOtherFunction(returnedFunction) );


//IMPRIMI O RETORNO DA FUNCAO QUE RECEBE UMA FUNCAO ANONIMA 
console.log(showOtherFunction(function(){
    return 'sou uma funcao anonima';
}));

