import React, { useState } from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'
import date from '../scripts/date'
import generateID from '../scripts/id-generator'

const FundsTransfer = ({ accounts, isLoading, transferFunds }) => {
    const [state, setState] = useState({
        id: generateID(),
        date: date(),
        type: 'withdraw'
    })

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        transferFunds(state)
    }

    return (
        <div>
        <h2>Transfer Funds</h2>
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <SelectList 
                label={'From Account:'}
                onChange={e =>handleOnChange(e)}
                elements={accounts} 
                name={'fromAccount'}
            />
            <InputBox 
                label={'Recipient Name:'}
                onChange={(e) => handleOnChange(e)}
                name={'name'}
            />
            <InputBox 
                label={'IBAN:'} 
                onChange={(e) => handleOnChange(e)}
                name={'iban'}
            />
            <InputBox 
                label={'Amount:'} 
                onChange={(e) => handleOnChange(e)}
                name={'amount'}
                placeholder={'0.0'}
            />
            <InputBox 
                label={'Reason:'} 
                onChange={(e) => handleOnChange(e)}
                name={'reason'}
            />
            <Button text={'Transfer'} isLoading={isLoading} />
        </form>
    </div> 
    )
}

export default FundsTransfer
