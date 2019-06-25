console.log(Math.ceil(6.1))
console.log(typeof console)

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Pessoa(nome ){
    this.nome = nome
    this.endereco = new function(){
        this.rua = 'Rua tal',
        this.num = 22
    };
};

const ga = new Pessoa('gabs')
console.log(ga.nome)
console.log(ga.endereco.rua)

