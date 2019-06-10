function Pessoa(nome, idade, altura)
{   
    return {
        nome: nome,
        idade : idade,
        altura : altura
    };
}

let Pessoa2 = function(nome, idade, altura)
{   
    return {
        nome: nome,
        idade : idade,
        altura : altura
    };
}

class Pessoa3
{
    constructor(nome, idade, altura)
    {
        this.nome=nome;
        this.idade=idade;
        this.altura=altura;
    }

    sobrenome()
    {
        let split_name = this.nome.split(" ");
        let quantidade = split_name.length;
        return split_name[quantidade-1];
    }
}
