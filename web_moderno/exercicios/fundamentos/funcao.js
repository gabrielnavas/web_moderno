//Funcao sem retorno

function imprimirSoma(x, y){
    console.log(x + y);
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma()
imprimirSoma(2, 3, 5, 6)

// Funcao com retorno
function soma(a, b = 0){
    return a+b;
}

console.log(soma(2,2))