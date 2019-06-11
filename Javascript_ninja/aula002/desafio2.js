// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y)
{
    return x+y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = soma(2,3);
result += 5;

// Qual o valor atualizado dessa variável?
console.log(result); //10

// Declare uma nova variável, sem valor.
var vari;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function transf_str(num)
{
    return 'o valor da variável agora é ' + num;
}

// Invoque a função criada acima.
console.log(transf_str(5));

// Qual o retorno da função? (Use comentários de bloco).
/* 
5
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function funcao(x, y, z)
{
    if(x === undefined || y === undefined || z === undefined)
        return "Preencha todos os valores corretamente"
    
    return x*y*z + '2';    
}


// Invoque a função criada acima, passando só dois números como argumento.
console.log(funcao(2, 3));


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(funcao(2, 3, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//122

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function funcao2(x, y, z)
{
    if(x != undefined && y != undefined && z != undefined)
        return (x+y)/z;
    else
    {
        if(x == undefined && y == undefined && z == undefined)
            return false;
        else if(x != undefined && y != undefined && z == undefined)
            return x+y;
        else if(x != undefined)
            return x;
        else if(y != undefined)
            return y;
        else if(z != undefined)
            return z;
        else 
            return null;            
    }    
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(funcao2());
console.log(funcao2(1));
console.log(funcao2(1,2));
console.log(funcao2(1,2,3));

//false
//1
//3
//1