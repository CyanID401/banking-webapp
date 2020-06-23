import React, { useState } from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'
import { Form } from 'react-bootstrap'
import date from '../scripts/date'
import generateID from '../scripts/id-generator'

const FundsTransfer = ({ accounts, isLoading, transferFunds }) => {
    const [state, setState] = useState({
        date: date(),
        type: 'withdraw'
    })

    const onChangeFrom = (e) => {
        setState({
            ...state,
            fromAccount: e.value
        })
    }

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setState({
            ...state,
            id: generateID()
        })
        transferFunds(state)
    }

    return (
    <div>
        <h2>Transfer Funds</h2>
        <Form onSubmit={(e) => handleOnSubmit(e)}>
            <Form.Group>
                <SelectList 
                    label={'From Account'}
                    onChange={e => onChangeFrom(e)}
                    elements={accounts} 
                    name={'fromAccount'}
                />
            </Form.Group>
            <Form.Group>
                <InputBox 
                    label={'Recipient Name'}
                    onChange={(e) => handleOnChange(e)}
                    name={'name'}
                    placeholder={'Enter Name Of The Recipient'}
                />
            </Form.Group>
            <Form.Group>
                <InputBox 
                    label={'IBAN'} 
                    onChange={(e) => handleOnChange(e)}
                    name={'iban'}
                    placeholder={'Enter Recipient\'s IBAN'}
                />
            </Form.Group>
            <Form.Group>
                <InputBox 
                    label={'Amount'} 
                    onChange={(e) => handleOnChange(e)}
                    name={'amount'}
                    placeholder={'0.0'}
                />
            </Form.Group>
            <Form.Group>
                <InputBox 
                    label={'Reason'} 
                    onChange={(e) => handleOnChange(e)}
                    name={'reason'}
                    placeholder={'Enter Reason For The Transaction'}
                />
            </Form.Group>
            <Button text={'Transfer'} isLoading={isLoading} />
        </Form>
    </div> 
    )
}

export default FundsTransfer
