import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'


export default class Contador extends Component{

    // constructor(props){
    //     super(props)
    //     //Props é somente leitura

    //     this.state = { /* 
    //         propriedadeQualquer1: 1,
    //         propriedadeQualquer2: 2
    //      */}

    //     // faz com que o this do maisUm aponte sempre para Contador
    //     this.maisUm = this.maisUm.bind(this) //amarrar maisUm ao Contador
    //     this.limpar = this.limpar.bind(this) //amarrar maisUm ao Contador
    // }

    // Todos os states da classe
    state = {
        //Variaveis de state (estado), usado para poder mudar, pois o props nao tem como mudar. Propriedades são somente leitura, para mudar valores é preciso usar o state aqui.
        numero: this.props.numeroInicial
    }

    //OPCAO: Sem Arrow function, o this pode variar    
    maisUm() {
        // Setar somente as variaveis do state com setState() passando um objeto atualizando apenas as variaveis desejadas
        this.setState({ numero: this.state.numero + 1 })
    }

    //O this aqui aponta para Contador que esta classe
    limpar = () => {
        // Setar somente as variaveis do state com setState() passando um objeto atualizando apenas as variaveis desejadas
        this.setState({ numero: 0 })
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={() => this.maisUm()}
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
}