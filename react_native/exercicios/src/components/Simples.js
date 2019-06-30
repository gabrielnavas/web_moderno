import React from 'react'
import { Text, View } from 'react-native'
import Padrao from '../estilo/Padrao'

// export default function(props){ //Dentro de props tem os atributos passados quando chamo ele no render
//     return (
//         <Text>{props.texto}</Text>
//     )
// }


// Mais de um text
// export default props => 
//     <View>    
//         <Text>Arrow: {props.texto}</Text>
//         <Text>Arrow: {props.texto}</Text>
//     </View>


// Array :D
// export default props => [   
//         <Text key={1}>Arrow: {props.texto}</Text>,
//         <Text key={2}>Arrow: {props.texto}</Text>
// ]


// Posso aplicar vários estilos usando array dentro do style={[Padrao.ex1, Padrao.ex2]}
// export default props => 
//     <Text style={[Padrao.ex, Padrao.ex2]}>Arrow: {props.texto}</Text>

export default props => 
    <Text style={Padrao.ex}>Arrow: {props.texto}</Text>
