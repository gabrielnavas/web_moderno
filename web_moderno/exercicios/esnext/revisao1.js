//let e const
{
    var a = 2;
    let b = 3;
    console.log(b);
}

console.log(a);

const comida = 'pizza'; 

// Template String
console.log(`Olá, 
    eu me chamo
gabriel e gosto de ${comida}.`);



//Destruturing

const nome = 'gabriel'
const [g, y, b, ...riel] = nome; //string => usa colchetes
console.log(g,y,b,riel);

const [z, ,w] = [1,2,3] //array => usa colchetes
console.log(z,w);

const {endereco: e, bairro} = {endereco: 'rua galinha', bairro: 'jardim das rosas'}; //objetos => usa chaves
console.log(e, bairro);
