//usando arrow function ja pega o escopo de fora
function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade); 
    }, 1000);
}

//new Pessoa


//tem que usar bind aqui
function Pessoa2(){
    this.idade = 0;
    
    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa2

