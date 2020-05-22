import React from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'

const FundsDeposit = () => {

    return (
        <div>
            <h2>Deposit Funds</h2>
            <form>
                <SelectList label={'From Account:'} />
                <SelectList label={'To Account:'} />
                <InputBox label={'Amount:'} placeholder={'0.0'}/>
                <InputBox label={'Reason:'} />
                <Button text={'Deposit'} />
            </form>
        </div>
    )
}

export default FundsDeposit