import React, { useState, useEffect } from 'react'
import Label from './Label'
import Select from 'react-select'

const SelectList = ({ elements, onChange, label, defaultVal }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const rsOptions = []
        elements.map( item => {
            const { id: value, name: label } = item
            rsOptions.push({value, label})
        })
        setItems(rsOptions)
    }, [elements])
    return (
        <div>
            <Label text={label} />
            <Select 
                onChange={onChange}
                options={items}
                defaultValue={defaultVal || null}
            />
        </div>
    )
}

export default SelectList
