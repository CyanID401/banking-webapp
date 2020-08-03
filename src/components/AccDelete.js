import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Button from './Button'
import SelectList from './SelectList'
import ErrorText from './ErrorText'
import { Form } from 'react-bootstrap'

const AccDelete = ({ accounts, isLoading, deleteAccount }) => {
    const defaultValues = { accs: {} } 
    const { control, errors, handleSubmit } = useForm(defaultValues)

    const onSubmit = data => {
        const account = { id: data.accs.value }
        deleteAccount(account)
    }
    return (
        <div>
            <h2>Remove Bank Account</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="account">
                    <Controller 
                        name={'accs'}
                        as={SelectList}
                        label={'Bank account'}
                        elements={accounts}
                        control={control}
                        rules={{ required: true }}
                    />
                    {errors.account && <ErrorText text={'Selecting an account is required!'} />}
                </Form.Group>
                <Button text={'Delete'} isLoading={isLoading} />
            </Form>
        </div>
    )
}

export default AccDelete
