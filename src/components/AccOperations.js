import React from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'

const AccOperations = () => {
    return (
        <>
        <div>
            <h2>Transfer Funds</h2>
            <form>
                <SelectList label={'From Account:'} />
                <InputBox label={'Recipient Name:'} />
                <InputBox label={'IBAN:'} />
                <InputBox label={'Amount:'} placeholder={'0.0'}/>
                <InputBox label={'Reason:'} />
                <Button text={'Transfer'} />
            </form>
        </div>

        <div>
            <h2>Deposit Funds</h2>
            <form>
                <SelectList label={'From Account:'} />
                <SelectList label={'To Account:'} />
                <InputBox label={'Amount:'} placeholder={'0.0'}/>
                <InputBox label={'Reason:'} />
                <Button text={'Transfer'} />
            </form>
        </div>
        </>
    )
}

export default AccOperations