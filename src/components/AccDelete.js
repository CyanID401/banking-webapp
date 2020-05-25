import React, { useState } from 'react'
import Button from './Button'
import SelectList from './SelectList'

const AccDelete = ({ accounts, isLoading, deleteAccount }) => {
    const [state, setState] = useState([])
    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        deleteAccount(state)
    }
    return (
        <div>
            <h2>Remove Bank Account</h2>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <SelectList 
                    label={'Select bank account'}
                    onChange={(e) => handleOnChange(e)}
                    elements={accounts}
                />
                <Button text={'Delete'} isLoading={isLoading} />
            </form>
        </div>
    )
}

export default AccDelete
