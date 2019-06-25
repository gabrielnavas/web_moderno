var pessoa = {
    nome: 'Gabriel',
    altura: 1.85,
    peso: 85
}

console.dir(pessoa);



//perde as propriedades, pois atribui novamente
pessoa = { sexo: 'Masculino' };
console.dir(pessoa);

//inserir propriedade
pessoa.cor = 'azul';
console.dir(pessoa);


//inserir funcao no objeto
pessoa.andar = function(){
    return 'pessoa andando';
}
console.log(pessoa.andar());


//inserir idade
pessoa.idade=26;
pessoa.niver = function(){
    pessoa.idade++;
}

//metodo para funcao
console.log(pessoa.idade); //idade 26
pessoa.niver(); //idade++
console.log(pessoa.idade); //idade 26


//inserir sobrenome
pessoa.sobrenome = 'navas';
console.log(pessoa.sobrenome);