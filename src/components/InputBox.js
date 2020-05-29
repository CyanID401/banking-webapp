import React from 'react'
import Label from './Label'

const InputBox = ({ id, label, onChange, type, name, placeholder }) => {
    return (
        <div>
            <Label id={id} text={label} />
            <input
                id={id || null}
                className={'form-control'}
                onChange={onChange || null}
                type={type || 'text'} 
                name={name || null }
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputBox
