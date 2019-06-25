//OPERADORES DE IGUALDADE/RELACIONAIS

// ==

var x = 0;

console.log(1 == 1);
console.log(2 != 1);

console.log(x == 0);


var y = 'gabriel';
var z = 'navas';

console.log('gabriel' == 'gabriel');
console.log(y == 'gabriel');
console.log(z == y)

var um_str = '1';
var um_int = 1;

console.log(um_str == um_int); //ele converte o valor por isso da true aqui, testa somente o valor


// ===

console.log(1 === '1') //da false pois ele testa o valor e o tipo
console.log(1 !== '1') // da true

var num1 = 10;
var num2 = 20;
var num3 = 20;

console.log(num1 > num2);
console.log(num2 <= num3);