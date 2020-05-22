import React, { useState } from 'react'
import { connect } from 'react-redux'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'
import { transferFunds, depositFunds } from '../app/reducers/fundsReducer'

const FundsTransfer = ({ transferFunds, depositFunds }) => {
    const [state, setState] = useState({})

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
        <>
        <div>
            <h2>Transfer Funds</h2>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <SelectList label={'From Account:'} />
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
                <Button text={'Transfer'} />
            </form>
        </div>
        </>
    )
}

const mapDispatchToProps = {
    transferFunds,
    depositFunds
}

export default connect(null, mapDispatchToProps)(FundsTransfer)