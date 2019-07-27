import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

const Inverter = props => {
    const strInv = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{strInv}</Text>
}

const MegaSena = props => {
    
    const arrayZerado = quantNumeros => Array(quantNumeros || 6).fill(0) 

    const gerarNumerosAleatorios = (arrayZerado) =>{
        //min=1, max=60
        const [min, max] = [1, 60]

        //gerar numeros randomicos
        for(let i =0 ; i < arrayZerado.length ; i++){
            let novo = 0
            
            // Verifica se o 'novo' numero se encontra no array, para nao gerar numeros repitidos
            while(arrayZerado.includes(novo)){
                novo = Math.floor(Math.random() * (max-min+1 )) + min
            }

            arrayZerado[i] = novo
        }        

        return arrayZerado
    }
    
    const ordenarNumeros= (array) => array.sort((a, b) => a - b) 
    const arrayToStringFormat = (array) => array.join(', ')

    const arrayInicial = arrayZerado(props.numeros)
    let numeros = gerarNumerosAleatorios(arrayInicial)
    numeros = ordenarNumeros(numeros)
    numeros = arrayToStringFormat(numeros)
        
    return <Text style={Padrao.ex}>{numeros}</Text>
}

export default Inverter
export { Inverter, MegaSena }