import React from 'react'
import { childrenWithProps } from '../utils/utils'

export default props => 
    <li>
        {props.nome} {props.sobrenome}
        <ul>
            { childrenWithProps(props) }
        </ul>
    </li>