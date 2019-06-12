var arr = [1,2,3, 'gabriel', { bola : 'azul' }];

console.log(arr);

arr.push(true);

console.log(arr);

arr.push({copo: 'redondo'});

console.log(arr);

var item = arr.pop();

console.log(item.copo);
console.log(arr);

arr.push(function soma(x,y ){
    return x+y;
})

var soma = arr.pop();
console.log(soma(2, 2));

