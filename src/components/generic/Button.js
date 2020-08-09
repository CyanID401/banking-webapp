import React from 'react'
import { Spinner } from 'react-bootstrap'

const Button = ({ className, onClick, type, isLoading, text}) => {
    return (
        <button 
            className={className || 'btn btn-primary'}
            onClick={onClick || null}
            type={type}
            disabled={isLoading}
        >
            { isLoading ? 
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="mr-1"
                />
             : null }
             {text}
        </button>
    )
}

export default Button
