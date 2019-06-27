
// Meu modo
function criarProduto(nome, valor){
    const desconto = 10

    return {
        nome: nome,
        valor : valor, 
        desconto : 0.10
    };
};

// Modo certo PROF
function criarProduto2(nome, valor){
    const desconto = 10

    return {
        nome,
        valor, 
        desconto : 0.10
    };
};

console.dir(criarProduto2('Notebook', 2000.00))
console.dir(criarProduto2('iPad', 1990.00))