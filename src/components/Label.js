import React from 'react'

const Label = ( {text} ) => {
    return (
        <>
            {text !== undefined &&
                <label>{text}</label>}
        </>
    )
}

export default Label
