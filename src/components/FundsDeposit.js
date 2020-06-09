import React, { useState } from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'
import { Form } from 'react-bootstrap'
import date from '../scripts/date'
import generateID from '../scripts/id-generator'

const FundsDeposit = ({ accounts, isLoading, depositFunds  }) => {
    const [state, setState] = useState({
        date: date(),
        type: 'deposit'
    })

    const onChangeFrom = (e) => {
        setState({
            ...state,
            fromAccount: e.value
        })
    }

    const onChangeTo = (e) => {
        setState({
            ...state,
            toAccount: e.value
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
        depositFunds(state)
    }

    return (
        <div>
        <h2>Deposit Funds</h2>
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
                <SelectList 
                    label={'To Account'}
                    onChange={e => onChangeTo(e)}
                    elements={accounts} 
                    name={'toAccount'}
                />
            </Form.Group>
            <Form.Group>
                <InputBox 
                    label={'Amount'} 
                    onChange={e => handleOnChange(e)}
                    name={'amount'}
                    placeholder={'0.0'}
                />
            </Form.Group> 
            <Form.Group> 
                <InputBox 
                    label={'Reason'} 
                    onChange={e => handleOnChange(e)}
                    name={'reason'}
                    placeholder={'Enter Reason For The Transaction'}
                />
            </Form.Group> 
            <Button text={'Deposit'} isLoading={isLoading} />
        </Form>
    </div>
    )
}

export default FundsDeposit
