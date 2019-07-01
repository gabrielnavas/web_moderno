// não aceita repetição/não indexada

const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corithians')
times.add('Flamengo')
times.add('Vasco') //j á existe, então não irá se repetir.

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) //verificar se existe vasco, false
console.log(times.has('Vasco')) //verificar se existe com Vasco, true
times.delete('Flamengo') //deletar um elemento 
console.log(times.has('Flamengo')) //false, pois já foi deletada

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)

//MASSA :)))))))))))))