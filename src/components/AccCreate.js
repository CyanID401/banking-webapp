import React, { useState } from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'
import generateID from '../scripts/id-generator'

const AccCreate = ({ currencies, isLoading, createAccount }) => {
    const [state, setState] = useState(
        {
            id: generateID(),
            balance: '0.0',
            iban: 'BG58RZBB91555087474816',
            transactions: []
        }
    )

    const onChangeName = (e) => {
        setState({
            ...state,
            name: e.target.value
        })
    }

    const onChangeCurrency = (e) => {
        let index = e.target.value
        setState({
            ...state,
            currency: e.target[index].text
            
        })
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
                    onChange={(e) => onChangeName(e)}
                    name={'name'}
                />
                <SelectList 
                    label={'Currency:'} 
                    elements={currencies} 
                    onChange={(e) => onChangeCurrency(e)}
                    name={'currency'}
                />
                <Button text={'Create'} isLoading={isLoading}/>
            </form>
        </div>
    )
}

export default AccCreate
