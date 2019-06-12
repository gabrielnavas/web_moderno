/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x){
    if(x)
        return true;

    return false;    
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

console.log(isTruthy(''));
console.log(isTruthy(0));
console.log(isTruthy(false));
console.log(isTruthy(null));
console.log(isTruthy(NaN));
console.log(isTruthy(-0));
console.log(isTruthy(!!false));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1));
console.log(isTruthy('gabriel'));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy(true));
console.log(isTruthy(!!true));
console.log(isTruthy(!''));
console.log(isTruthy(!false));
console.log(isTruthy(!-0));
console.log(isTruthy(!0));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: 'Ferrari',
    modelo: 'V8',
    placa: 'GTO-0101',
    ano: 2019,
    cor: 'Vermelho',
    quantasPortas: 2,
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor){
    if(cor)
        carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.marca + ' ' + carro.modelo;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoas = function(quantidade){
    if(carro.quantidadePessoas < carro.assentos)
    {
        if(carro.quantidadePessoas + quantidade <= carro.assentos)
        {
            carro.quantidadePessoas += quantidade;
            return (
                'Já temos ' + 
                carro.quantidadePessoas + 
                ((carro.quantidadePessoas === 1) ? ' pessoa ': ' pessoas ')  + 
                'no carro!'
            );
        }
        else    
        {
            var quantidadeSobrante = (carro.assentos - carro.quantidadePessoas);
        
            return (
                'Só cabem mais ' + 
                quantidadeSobrante + 
                ((carro.quantidadeSobrante === 1)? ' pessoa': ' pessoas') + 
                '!'
            );
        }
    }
    else
        return 'O carro já está lotado';
}

carro.estaCheio = function()
{
    return (carro.quantidadePessoas === carro.assentos);
}

carro.estaVazio = function()
{
    return (carro.quantidadePessoas === 0);
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor());

// Mude a cor do carro para vermelho.
carro.mudarCor('Verde');

// E agora, qual a cor do carro?
console.log(carro.obterCor());

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde musgo');


// E agora, qual a cor do carro?
console.log(carro.obterCor());


// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo())


// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4));

// Faça o carro encher.

//NAO VIMOS LOOPS AINDA
console.log(carro.adicionarPessoas(1));

console.log(carro.adicionarPessoas(1));

console.log(carro.adicionarPessoas(1));

// Tire 4 pessoas do carro.

carro.retirarPessoas = function(quantidade){
    if(carro.quantidadePessoas - quantidade >= 0)
    {    
        carro.quantidadePessoas -= quantidade;
        return(
            'Saiu ' + 
            quantidade + 
            ((quantidade === 1) ? ' pessoa' : ' pessoas')
        
        );
    }
    return 'Não há pessoas suficientes no carro para sair.';
}

console.log(carro.retirarPessoas(4));


// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10));

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);