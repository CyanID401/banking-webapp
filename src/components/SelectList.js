import React, { useState, useEffect } from 'react'
import Label from './Label'
import Select from 'react-select'

const SelectList = ({ elements, onChange, label, defaultVal }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const rsOptions = []
        Object.entries(elements).map(item => {
            rsOptions.push({ value: item[1].id, label: item[1].name })
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
