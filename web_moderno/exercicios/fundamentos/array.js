const valores = [7.7, 8.9 ,2.1, 4.1];

console.log(valores[0], valores[5]);
console.log(valores);
console.log(valores.length);

valores.push(true, 2, {id: '2'});

console.log(valores);
delete valores[0]
console.log(valores);
console.log(valores.pop());

console.log(typeof valores);