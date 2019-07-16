import React from 'react'
import Filho from './Filho'

//exemplo, da pra usar codigo jsx junto com javascript XDDD
function filhos(qntd=0, nome='') {
    const lista = []
    for(let i=0 ; i < qntd ; ++i ) {
        lista.push(<Filho nome='Pedro' sobrenome={`${nome} ${i}`} />)

    }
    console.log(lista)
    return lista

}

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {props.children}
            {console.log(props.children)}
        </ul>
    </div>