import React from 'react'
import Button from './Button'
import SelectList from './SelectList'

const AccDelete = () => {
    return (
        <div>
            <h2>Remove Bank Account</h2>
            <form>
                <SelectList label={'Select bank account'} />
                <Button text={'Delete'}/>
            </form>
        </div>
    )
}

export default AccDelete
