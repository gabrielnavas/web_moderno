import React from 'react'
import ReactDOM from 'react-dom'
 
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Ana" sobrenome='Souza'/> 
            {/* <Filho nome="Luiza" sobrenome='Pereira'/> 
            <Filho nome="José" sobrenome='Rodrigues'/>              */}
        </Pai>
    </div>
    , document.getElementById('root')
)
