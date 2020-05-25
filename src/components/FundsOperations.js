import React, { useState } from 'react'
import { connect } from 'react-redux'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'
import { transferFunds, depositFunds, getTransactionStatus } from '../app/reducers/fundsReducer'
import { getUserAccounts } from '../app/reducers/userReducer'

const FundsTransfer = ({ type, transferFunds, depositFunds, isProcessing, accounts }) => {
    const [state, setState] = useState({})

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        type === 'transfer' ?
            transferFunds(state)
        : depositFunds(state)
    }
    return (
        <>
        { type === 'transfer' ?
            <div>
                <h2>Transfer Funds</h2>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <SelectList 
                        label={'From Account:'}
                        onChange={e =>handleOnChange(e)}
                        elements={accounts} />
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
                    <Button text={'Transfer'} isLoading={isProcessing} />
                </form>
            </div> 
            :
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
                    <Button text={'Deposit'} isLoading={isProcessing} />
                </form>
            </div> }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        accounts: getUserAccounts(state),
        isProcessing: getTransactionStatus(state)
    }
}

const mapDispatchToProps = {
    transferFunds,
    depositFunds
}

export default connect(mapStateToProps, mapDispatchToProps)(FundsTransfer)