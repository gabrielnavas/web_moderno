const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1);
console.log(peso2);

console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
console.log(Number.isInteger(1.1));

const avaliacao = 9.781;
const avaliacao2 = 6.871;

const total = avaliacao * peso1 + avaliacao2 * peso2;

const media = total / (peso1+peso2);

console.log(media.toFixed(3));
console.log(media.toFixed(4));


console.log(media.toString());
console.log(media.toString(10)); //decimal
console.log(media.toString(2)); //binario
console.log(media.toString(8)); //obtal
console.log(media.toString(16)); //hex

console.log(typeof media); //tipo numbe
console.log(typeof Number); //tipo objeto funcao