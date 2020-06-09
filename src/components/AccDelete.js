import React, { useState } from 'react'
import Button from './Button'
import SelectList from './SelectList'
import { Form } from 'react-bootstrap'

const AccDelete = ({ accounts, isLoading, deleteAccount }) => {
    const [state, setState] = useState({})
    
    const handleOnChange = (e) => {
        setState({
            ...state,
            id: e.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        deleteAccount(state)
    }
    return (
        <div>
            <h2>Remove Bank Account</h2>
            <Form onSubmit={e => handleOnSubmit(e)}>
                <Form.Group controlId="account">
                    <SelectList 
                        label={'Bank account'}
                        onChange={e => handleOnChange(e)}
                        elements={accounts}
                    />
                </Form.Group>
                <Button text={'Delete'} isLoading={isLoading} />
            </Form>
        </div>
    )
}

export default AccDelete
