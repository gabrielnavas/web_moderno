import React from 'react'
import { childrenWithProps } from '../utils/utils' 

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>            
            {
                // React.cloneElement(props.children, {...props})
                childrenWithProps(props)
            }
        </ul>
    </div>