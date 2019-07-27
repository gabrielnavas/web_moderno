import React from 'react'

// Opção 3. Mais um forma
export default props => [        
    <h1>Parte 1</h1>,
    <h1>Parte 2</h1>
] 

// // Opção 2.
// export default props => 
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h1>Parte 2</h1>
//     </React.Fragment>

// // Opção 1: Mais usada!
// export default props =>
//     <div>
//         <h1>Parte 1</h1>
//         <h1>Parte 2</h1>
//     </div>