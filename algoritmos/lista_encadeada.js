class No{
    constructor(info = 0){
        this.info = info
        this.prox = null
    }
}

class Lista {

    constructor(){
        this.no = null
    }

    inserir (info = 0) {

        if(this.no == null)
            this.no = new No(info);
        else
        {
            const searchAdd = (no) => {
                if(no.prox == null)
                    no.prox = new No(info)
                else
                    searchAdd(no.prox)    
            }
            searchAdd(this.no)
        }
    }
    
    inserirOrdenado (info = 0){
        const novo = new No(info);

        if(this.no == null)
            this.no = novo
        else{
            
            if(info < this.no.info){
                novo.prox = this.no
                this.no = novo
            }
            else{
                const buscarMeioFim = (noAtual, novo = No()) => {
                    const notNullNotEnconterPositionInfo = (atual, info) => atual != null && info > atual.info; 
                    
                    let ante = null
                    let atual = noAtual 
                    while(notNullNotEnconterPositionInfo(atual, info)){
                        ante = atual
                        atual = atual.prox
                    }

                    novo.prox = atual
                    ante.prox = novo
                    
                }
                buscarMeioFim(this.no, novo)
            }
        } 
    }

    ordenarExaustivamente(){
        
        const isNull = (variable) => variable === null
        const isOrdenable = () => this.no.prox != null 
        const isMaior = (number1, number2) => number1 > number2
        const prox = (no) => no.prox
        const swapInfo = (no1, no2) => {
            const aux = no1.info
            no1.info = no2.info
            no2.info = aux
        }

        let ante = this.no
        let atual = ante.prox
        
        if(isOrdenable()){
            while(!isNull(ante)){
                atual = ante.prox
                
                while(!isNull(atual))
                {
                    if(isMaior(ante.info, atual.info))
                        swapInfo(ante, atual)
                    atual = prox(atual)    
                }

                ante = prox(ante)
            }

        }
    }

    exibir() {

        const exibirTodosNos = (no) => {
            if(no != null)
            {
                console.log(no.info)
                exibirTodosNos(no.prox)
            }
        }
        exibirTodosNos(this.no)
    }

    clearLista(){
        this.no = null
    }
}



//iife
(() => {
    const lista = new Lista()

    const numeros1 = [5,1,10,3,2,11,5,4,15];
    for(i in numeros1){
        lista.inserir(numeros1[i]);
    }
    
    console.log('Antes de ordenar: ')
    lista.exibir()

    //ordenacao 
    lista.ordenarExaustivamente()
    
    
    console.log('\n\nDepois de ordenar: ')
    lista.exibir()

    lista.clearLista()


    const numeros2 = [5,7,2,4,1,6,8,10,15]
    for(i in numeros2){
        lista.inserirOrdenado(numeros2[i])
    }
    console.log('\n\nLista ordenada na inserção:')
    lista.exibir();
})();