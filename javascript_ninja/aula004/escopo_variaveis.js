//GLOBAL
var myvar = 1;
console.log(myvar);


function myfunction()
{
    return myvar;
}

console.log(myfunction());

function myFunctionGlobal()
{
    //foi criada variavel sem var, sendo global
    //mas o garbage colletor nao libera a memoria
    //NAO USE ISSO.
    varGlobal='variavel global';
}

//para utilizar variavel global de uma função tem que machar a funcao primeiro
myFunctionGlobal();
console.log(varGlobal);

//LOCAL

function otherFunction(){
    var otherVar = true;
    return otherVar;
}

//othervar nao definida
//console.log(otherVar);

console.log(otherFunction());

function otherFunction(a, b, c)
{
    return a;
}


//a é uma variavel local de parametro, nao tem como acessar
//console.log(a);