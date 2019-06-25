const notas = [7,7,, 6.6, 5.5, 2.2, 1.2]

// Sem callback
let notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7)
    notasBaixas1.push(notas[i])
}

console.log(notasBaixas1);


// COm callback, sera gerado um novo array a partir no caso 'notasBaixas'
const notasBaixas2 = notas.filter(x => x < 7)
console.log(notasBaixas2)


const notasMenorQue7 = x => x < 7;
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)
