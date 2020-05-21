import React, { useState, useEffect } from 'react'
import Label from './Label'

const SelectList = ( {elements, setSelected, label} ) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(elements)
    }, [elements])
    return (
        <div>
            <Label text={label} />
            <select onChange={(e) => setSelected(e.target.value)}>
                {items && items.map((item, index) =>
                    <option key={index} value={item.id}>{item.name}</option>
                )}
            </select>
        </div>
    )
}

export default SelectList
