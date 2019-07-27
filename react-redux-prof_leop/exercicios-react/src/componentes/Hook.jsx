import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(100)
    const [status, setParOuImpar] = useState('Par')
    const [clickTimes, setClickTimes] = useState(0)

    // Funcao que é chamada toda vez que um componente é montador/atualizado
    useEffect(() => {
        contador % 2 === 0 ? 
            setParOuImpar('Par') : 
            setParOuImpar('Impar')

         
        document.title = `You have clicked ${clickTimes} times.`    
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h1>{status}</h1>
            <button onClick={() => {
                    setContador(contador+1)
                    setClickTimes(clickTimes+1)
                }
            }
                >Inc
            </button>

            <button onClick={() => {
                    setContador(contador-1)
                    setClickTimes(clickTimes+1)
                }
            }>
                Dec
            </button>
        </div>
    )
}