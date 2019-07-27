import React from 'react'

function filhosComProps(props) {
    return React.Children.map(props.children, 
        filho => React.cloneElement(filho, { ...props })
    )
}


export { filhosComProps }