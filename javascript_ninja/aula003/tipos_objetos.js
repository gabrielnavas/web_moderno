//tipos primitivos

/*
number  
string
boolean
null
undefined

*/


//OBJETOS ///////////////
console.dir({propriedade: 'valor'});

var objeto = {
    propriedade: 'valor',
    propriedade2: 10,
    propriedade3: true
};

console.log(objeto);

console.log(objeto.propriedade);
console.log(objeto.propriedade2);
console.log(objeto.propriedade3);

var pessoa= {
    nome: 'Gabriel',
    idade: 26,
    peso: 78,
    altura: 1.85
};

console.dir(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.peso);
console.log(pessoa.altura);


var carro = {
    cor: 'vermelho',
    motor: '2.0',
    portas: 4,
};

console.dir(carro);
console.log(carro.cor);
console.log(carro.motor);
console.log(carro.portas);


//OBJETO DE FUNCAO

var myvar = function(){
    return 'variavel myvar';
}

console.log(myvar);
console.log(myvar());

var myvar2  = () => {
    return 'variavel myvar2';
}

console.log(myvar2);
console.log(myvar2());


var myvar3 = (x , y) => {
    return x+y;
}

console.log( myvar3(1,2) );

var myvar4 = x => {
    return x**2;
}

console.log( myvar4(4) );

var myvar5 = x => {
    return Math.sqrt(x);
}

console.log( myvar5(9) );


