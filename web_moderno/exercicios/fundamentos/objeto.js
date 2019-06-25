const prod1 = {}
prod1.name = 'car';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40;

console.log(prod1);

const prod2 = {
    nome: 'Camisa azul',
    preco: 79.90,
    obj1:{
        obj2:{
            atrib1: 1
        },
        atrib1:2
    }
}

console.log(prod2.obj1.obj2.atrib1);

//json
'{ "nome": "Camisa azul", "preco": 79.90 }'

//console.log(prod2);