//VARIAVEIS

//undefined
var x;
console.log("x undefined -> " + x);

//int
x=1;
console.log("x int -> " + x);

//real
x=1.2;
console.log("x real -> " + x);

//string
x="gabriel";
console.log("x string -> " + x);

//null
x=null;
console.log("x null -> " + x);


//object
pessoa = {};
console.log("x pessoa -> " + pessoa);

//desenvolvimento pessoa
pessoa = {
    altura: 1.87,
    peso: 90
};

console.dir(pessoa);
console.log(pessoa.altura);
console.log(pessoa.peso);
console.log('notacao direta -> ' + pessoa['altura']); //notacao mais rapida para acessar atributos de objetos
console.log('notacao direta -> ' + pessoa['peso']); //notacao mais rapida para acessar atributos de objetos

//mudar altura
pessoa.altura = 1.90;
console.log(pessoa.altura);

//array is null
lista = [];
console.log("x array -> " + x);

lista = [1,2,3,4,5,6,7];
console.log("lista -> " + lista);

//reverse list
lista.reverse();
console.log("lista reverse -> " + lista);

console.log("membro do array -> " + lista[2]);