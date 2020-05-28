import React, { useState } from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'

const AccCreate = ({ currencies, isLoading, createAccount }) => {
    const [state, setState] = useState([])
    console.log(currencies)
    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        console.log(state)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        createAccount(state)
    }

    return (
        <div>
            <h2>Add New Bank Account</h2>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <InputBox 
                    label={'Account Name:'} 
                    onChange={(e) => handleOnChange(e)}
                />
                <SelectList 
                    label={'Currency:'} 
                    elements={currencies} 
                    onChange={(e) => handleOnChange(e)}
                />
                <Button text={'Create'} isLoading={isLoading}/>
            </form>
        </div>
    )
}

export default AccCreate
