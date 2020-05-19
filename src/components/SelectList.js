import React, { useState } from 'react'
import Label from './Label'

const SelectList = ( {elements = [], label} ) => {
    const [items] = useState(() => [['Select'], elements])
    return (
        <div>
            <Label text={label} />
            <select>
                {items.map((item, index) =>
                    <option key={index}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default SelectList
