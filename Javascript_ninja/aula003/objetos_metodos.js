var pessoa = {
    nome: 'Gabriel',
    idade: 26,
    altura: 1.85,
    peso: 85
}

console.dir(pessoa);

pessoa = { sexo: 'Masculino' };

//perde as propriedades, pois atribui novamente
console.dir(pessoa);