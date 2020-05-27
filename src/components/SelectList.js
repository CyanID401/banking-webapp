import React, { useState, useEffect } from 'react'
import Label from './Label'

const SelectList = ({ elements, onChange, label, name }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(elements)
    }, [])
    return (
        <div>
            <Label text={label} />
            <select onChange={onChange || null} name={name || null } >
                {items && items.map((item, index) =>
                    <option key={index} value={item.id}>{item.name}</option>
                )}
            </select>
        </div>
    )
}

export default SelectList
