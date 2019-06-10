//FUNCOES

function nome(){}

console.log(nome()); //printa undefined
console.log(nome); //retonra o nome da funcao

nome(); //nao tem nada na funcao

var num = 20;

function soma()
{
    num = num +2;
}

soma();
console.log(num); //valor atualizado 

function escopo()
{
    var n = "gabs";
}

//console.log(n); nao tem como exxecutar, pois esta fora do escopo
