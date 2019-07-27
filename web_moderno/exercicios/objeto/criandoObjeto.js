//usando a notação literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2)


// Funcções construtoras
function Produto(nome, preco, desc){
    //preco e desc sao privados
    //nome e getPrecoComDesconto sao publico pois ficam no escopo global da funcao
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1-desc) 
    }
}
const p1 = new Produto('Caneta', 1.50, 0.15)
const p2 = new Produto('Lapis', 2.00, 0.10)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())


// Função Factory
function criaFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criaFuncionario('João', 7890, 4);
const f2 = criaFuncionario('Maria', 456, 2);
console.log(f1.getSalario())
console.log(f2.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "sou um json"}');
console.log(fromJSON.info)