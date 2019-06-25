//bind é para pegar o escopo de outro lugar...


//Usando bind para ter o mesmo escopo de this da funcao
function Pessoa() {
    this.idade = 0
    
    setInterval(
        function(){
            this.idade++;
            console.log(this.idade);

        }.bind(this), 1000
    )
}

//new Pessoa()


//usando uma const para ter o mesmo escopo da funcao - NAO USE ISSO RSRS FICA COMPLICADO 
function Pessoa2(){
    this.idade = 0;

    const thisDeFora = this;
    setInterval(function(){
        thisDeFora.idade++;
        console.log(thisDeFora.idade)
    }, 1000);
}

Pessoa2()