// estrategia 1 para gerar valor padrao
function soma(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma(), soma(3), soma(1,2,3), /* problema */soma(0,0,0))

//estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 /* se existe o index 1 em arguments */
    c = isNaN(c) ? 1 : c
    return a+b+c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))


// Valor padrão do es2015
function soma3(a=1, b=1, c=1){
    return a+b+c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
