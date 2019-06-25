const escola = 'arruda mello';

console.log(escola.charAt(3)); //retorna 3 posicao
console.log(escola.charCodeAt(3)); //posicao 3 na tabela ascii, retorna o cod

console.log(escola.indexOf('m')); //verifica se existe m, retorna a posicao dela
console.log(escola.substring(7));
console.log(escola.substring(7, 9)); //do 7 até o 9 (sem o 9)

console.log('escola '.concat(escola).concat('.'));
console.log(escola.replace('m', 'w').replace('a', 'e'));
console.log('gabriel,miguel,navas'.split(','));