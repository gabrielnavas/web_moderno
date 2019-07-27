import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button'
    classes += props.doubleColumn ? ' doubleColumn' : ''
    classes += props.tripleColumn ? ' tripleColumn' : ''
    classes += props.operation ? ' operation' : ''

    return (
        <button 
            onClick={e => props.click && props.click(props.label)} 
            className={classes}
        >
            {props.label}
        </button>
    )
}