import React from 'react'

let isLegal = true

export default props =>
    <div>
        <h1>{props.valor}</h1>
        <h1>{props.aBcD}</h1>
        <h1>{props.eFgH}</h1>
        <h1>{isLegal ? 'é legal' : 'não legal'}</h1>
        <p>{Math.random()*2}</p>
    </div>



// export default ()) =>
//     <div>
//         <h1>Primeiro Componente!</h1>
//     </div>


// function primeiro() {
//     return <h1>Primeiro Componente!</h1>
// }

// export default primeiro