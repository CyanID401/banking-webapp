import React from 'react'
import Label from './Label'

const InputBox = ( {label, onChange, type, name, placeholder} ) => {
    return (
        <div>
            <Label text={label} />
            <input
                onChange={onChange || null}
                type={type || 'text'} 
                name={name || null }
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputBox
