//tipos primitivos

/*
number  
string
boolean
null
undefined

*/


//printando um objeto
console.dir({propriedade: 'valor'});

var objeto = {
    propriedade: 'valor',
    propriedade2: 10,
    propriedade3: true
};

//printando outro objeto
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