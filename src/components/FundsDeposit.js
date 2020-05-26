import React, { useState } from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'

const FundsDeposit = ({ accounts, isLoading, depositFunds  }) => {
    const [state, setState] = useState({})

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
            />
            <SelectList 
                label={'To Account:'}
                onChange={e =>handleOnChange(e)}
                elements={accounts} 
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
