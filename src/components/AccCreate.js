import React, { useState } from 'react'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'
import { Form } from 'react-bootstrap'
import generateID from '../scripts/id-generator'

const AccCreate = ({ currencies, isLoading, createAccount }) => {
    const [state, setState] = useState(
        {
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
        setState({
            ...state,
            currency: e.label
            
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setState({
            ...state,
            id: generateID()
        })
        createAccount(state)
    }

    return (
        <div>
            <h2>Add New Bank Account</h2>
            <Form onSubmit={e => handleOnSubmit(e)}>
                <Form.Group controlId="accountName">
                    <InputBox 
                        label={'Account Name'} 
                        onChange={e => onChangeName(e)}
                        placeholder={'Enter Account Name'}
                    />              
                </Form.Group>
                <Form.Group controlId="currency">
                    <SelectList 
                        label={'Currency'} 
                        elements={currencies} 
                        onChange={e => onChangeCurrency(e)}
                    />
                </Form.Group>
                <Button text={'Create'} isLoading={isLoading}/>
            </Form>
        </div>
    )
}

export default AccCreate
