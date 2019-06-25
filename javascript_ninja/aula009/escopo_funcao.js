function myFunction(){

    function sum(){
        return n1+n2;
    }
    
    var n1 =1;
    var n2 = 2;

    return sum();
}


// NAO TEM COMO INVOCAR ESSA FUNCAO LOCAL
//console.log(sum());

//declaracao de funcao antes da declaracao das variaveis
console.log(myFunction());

function myFunction(){
    
    
    var n1 =1;
    var n2 = 2;

    return sum();

    //hoisting
    function sum(){
        return n1+n2;
    }
}

console.log(myFunction());

