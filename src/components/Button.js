import React from 'react'

const Button = ( {onClick, text} ) => {
    return (
        <button onClick={onClick || null}>{text}</button>
    )
}

export default Button
