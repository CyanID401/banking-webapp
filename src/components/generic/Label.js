import React from 'react'

const Label = ({ className, text }) => {
    return (
        <>
            { text !== undefined &&
                <label className={className || null}>
                    {text}
                </label> }
        </>
    )
}

export default Label
