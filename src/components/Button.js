import React from 'react'
import Loading from './Loading'

const Button = ( {onClick, isLoading, text} ) => {
    return (
        <button onClick={onClick || null}>
            {isLoading ? <Loading /> : null}{text}</button>
    )
}

export default Button
