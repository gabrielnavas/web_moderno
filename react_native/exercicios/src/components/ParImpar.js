import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

function parOuImpar(num) {
    // if(num %2 == 0){
    //     return <Text style={Padrao.ex}>{num} é par!</Text>
    // }
    // else{
    //     return <Text style={Padrao.ex}>{num} é par!</Text>
    // }

    const tipo = num % 2 === 0 ? 'par' : 'impar'
    return <Text style={Padrao.ex}>{num} é {tipo}</Text>
}


export default props =>
    <View>
        {
            <Text>{parOuImpar(props.numero)}</Text>
        }
        
        {/*         
        { 
            props.numero % 2 == 0 
            ? <Text style={Padrao.ex}>{props.numero} É par</Text>
            : <Text style={Padrao.ex}>{props.numero} É impar</Text> 
        } 
        */}

        {/*Usando um test numa classe*/}
        {/* <If test={props.numero % 2 === 0}>
            <Text style={Padrao.ex}>Par</Text>
        </If>

        <If test={props.numero % 2 === 1}>
            <Text style={Padrao.ex}>Ímpar</Text>
        </If> */}
    </View>
