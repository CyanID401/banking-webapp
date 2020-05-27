import React, { useState } from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'
import date from '../scripts/date'
import generateID from '../scripts/id-generator'

const FundsDeposit = ({ accounts, isLoading, depositFunds  }) => {
    const [state, setState] = useState({
        id: generateID(),
        date: date(),
        type: 'deposit'
    })

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        depositFunds(state)
    }

    return (
        <div>
        <h2>Deposit Funds</h2>
        <form onSubmit={(e) => handleOnSubmit(e)}> 
            <SelectList 
                label={'From Account:'}
                onChange={e =>handleOnChange(e)}
                elements={accounts}
                name={'fromAccount'}
            />
            <SelectList 
                label={'To Account:'}
                onChange={e =>handleOnChange(e)}
                elements={accounts} 
                name={'toAccount'}
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
            <Button text={'Deposit'} isLoading={isLoading} />
        </form>
    </div>
    )
}

export default FundsDeposit
