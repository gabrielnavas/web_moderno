const soma = function(x, y){
    return x+y;
}

// Valor default de um parametro sendo uma funcao
const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4, soma)
imprimirResultado(3, 4)
imprimirResultado(3, 4, function(x,y){
    return x-y;
});
imprimirResultado(3, 4, (x,y) => x*y);

const pessoa = {
    falar = function(){
        console.log('Olá');
    }
}