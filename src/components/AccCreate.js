import React from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'

const AccCreate = () => {
    return (
        <div>
            <h2>Add New Bank Account</h2>
            <form>
                <InputBox label={'Account Name:'} />
                <SelectList label={'Currency:'} />
                <Button text={'Create'}/>
            </form>
        </div>
    )
}

export default AccCreate
