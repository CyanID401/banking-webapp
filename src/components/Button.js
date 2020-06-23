import React from 'react'
import { Spinner } from 'react-bootstrap'

const Button = ({ className, onClick, isLoading, text }) => {
    return (
        <button 
            className={className || 'btn btn-primary'}
            onClick={onClick || null}
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
