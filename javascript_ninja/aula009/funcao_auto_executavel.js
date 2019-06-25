//TIPOS DE FUNCOES

/* 1
function(){
    return 1+2;
}
*/

// 2
function sum(){
    return 1+2;
}
console.log( sum() );

// 2
var sum2 = function(){
    return 3+2;
}
console.log( sum2() );
// 3
var sum3 = function sum3(){
    console.log(sum3);
    return 5+8;
}
console.log( sum3() );

// 4 => escopo local, boa prática!!
(function funcAutoExec(){
    console.log( 'sou uma funcao ao executavel' );
})();