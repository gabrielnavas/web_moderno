import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import CompA, { CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador numeroInicial={100}/> */}
        {/* <ComponenteClasse valor="Sou um componente de classe"/> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Pereiraaa" numero={22}>
            <Membro nome="Andre" />
            <Membro nome="Mariana" />
        </Familia> */}
        {/* <FamiliaSilva /> */}
        {/* <MultiElementos />
        <PrimeiroComponente valor="Bom dia!!" aBcD={2**8} eFgH={Math.pow(2,8)}/>
        <CompA valor="Ola sou o componte A"/>
        <B valor="Ola sou o componte B"/>  */}
    </div>
, elemento)

// const jsx = <ul>
//                 <li>Gabriel</li>
//                 <li>Miguel</li>
//                 <li>Navas</li>
//                 <li>João</li>
//             </ul>

// ReactDOM.render(jsx, elemento)