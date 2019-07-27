// operador ... rest(juntar)/Spread(espalhar)
// usar rest com parâmetros de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true , ...funcionario} //espalhar funcionario dentro de clone, é uma copia, não é referência
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA] //espalhar grupoA dentro de grupoFInal, é uma copia dos dados, não referência
console.log(grupoFinal)


const func1 = (...dados) => dados.forEach( e => console.log(e) )
func1(1,4,6,8,10)