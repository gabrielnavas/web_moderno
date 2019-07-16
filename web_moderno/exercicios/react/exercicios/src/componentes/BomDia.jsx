import React from 'react'

export default props => [
        <h1>Bom dia, meu nome é {props.nome}<br/></h1> ,
        <h3>Tenho {props.idade} anos <br/></h3> ,
        <h3>E estou com sono? {props.sono ? 'sim': 'não'}.</h3>
]



// export default props => 
//     <React.Fragment> 
//         <h1>Bom dia, meu nome é {props.nome}<br/></h1>
//         <h3>Tenho {props.idade} anos <br/></h3>
//         <h3>E estou com sono? {props.sono ? 'sim': 'não'}.</h3>
//     </React.Fragment>



// export default props => 
//     <div> 
//         <h1>Bom dia, meu nome é {props.nome}<br/></h1>
//         <h3>Tenho {props.idade} anos <br/></h3>
//         <h3>E estou com sono? {props.sono ? 'sim': 'não'}.</h3>
//     </div>