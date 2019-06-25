
function myFunction(){

    var n1 =1;
    var n2 = 2;

    return sum();

    //funcao criada depois do return
    //hoisting, literal de uma funcao
    function sum(){
        return n1+n2;
    }
}

console.log(myFunction());


/*
//causa error, pois a funcao nao é literal, somente é possivel com funcao.
function myFunction2(){

    var n1 =1;
    var n2 = 2;

    return sum();

    //funcao nao literal, nao funciona.
    var sum = function sum(){
        return n1+n2;
    }
}

console.log(myFunction2())
*/


function myFunction3(){
    console.log('ANTES DE DECLARAR ', number1);
    var number1 = 1;
    console.log('DEPOIS DE DECLARAR' , number1);
}

/*
OU SEJA, CONSIGO ENCHERGAR FUNCOES EM QUALQUER LUGAR DENTRO DE FUNCAO
VARIAVEL TEM QUE SER DECLARADA ANTES PARA RECEBER O VALOR
*/

console.log(myFunction3());


function myFunction4(){
    console.log('antes', sum(1,2));

    function sum(x,y){
        return x+y;
    }

    console.log('depois', sum(1,2));
}

//consigo enchergar a funcao dentro da funcao em qualquer lugar
myFunction4();