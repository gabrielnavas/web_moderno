import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilo/Padrao';


export default class Evento extends Component {

    state = {
        texto: '',
        texto2: 'oi'
    }

    alterarTexto = texto => {
        this.setState({ texto: texto, texto2: texto }) /* Ou .setState{ texto } pois o nome é igual*/
    }

    render() {
        return(
            <View>
                <Text style={Padrao.font40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto2, this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto} //componente controlado, usando a funcao this.alterarTexto
                />
                <Text style={Padrao.font40}>{this.state.texto2}</Text>
            </View>
        )
    }
}