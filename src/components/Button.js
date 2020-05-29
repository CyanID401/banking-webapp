import React from 'react'
import Loading from './Loading'

const Button = ( {className, onClick, isLoading, text} ) => {
    return (
        <button 
            className={className || 'btn btn-primary'}
            onClick={onClick || null}>
            {isLoading ? <Loading /> : null}{text}</button>
    )
}

export default Button
