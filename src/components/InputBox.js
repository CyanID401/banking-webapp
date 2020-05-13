import React from 'react'
import Label from './Label'

const InputBox = ( {label, type, placeholder} ) => {
    return (
        <div>
            <Label text={label} />
            <input type={type || 'text'} placeholder={placeholder}/>
        </div>
    )
}

export default InputBox
