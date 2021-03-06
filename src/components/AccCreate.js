import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import SelectList from './generic/SelectList'
import InputBox from './generic/InputBox'
import Button from './generic/Button'
import ErrorText from './generic/ErrorText'
import { Form } from 'react-bootstrap'
import generateID from '../scripts/id-generator'

const AccCreate = ({ currencies, isLoading, createAccount }) => {
    const defaultValues = { accName: '', currencies: {} }
    const { control, errors, handleSubmit } = useForm(defaultValues)

    const presets = {
        balance: '0.0',
        iban: 'BG58RZBB91555087474816',
        transactions: []
    }

    const onSubmit = data => {
        const account = { 
            ...presets,
            id: generateID(),
            name: data.accName,
            currency: data.currencies.label
        }
        createAccount(account)
    }

    return (
        <div>
            <h2>Add New Bank Account</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="accountName">
                    <Controller 
                        name={'accName'}
                        as={InputBox}
                        label={'Account Name'}
                        placeholder={'Enter Account Name'}
                        control={control}
                        rules={{ required: true }}
                    />
                    <ErrorText 
                        error={errors.accName} 
                        errType={'required'} 
                        text={'Account name is required!'} 
                    />
                </Form.Group>
                <Form.Group controlId="currencies">
                    <Controller 
                        name={'currencies'}
                        as={SelectList}
                        elements={currencies}
                        control={control}
                        rules={{ required: true }}
                    />
                    <ErrorText 
                        error={errors.currencies} 
                        errType={'required'}
                        text={'Selecting a currency is required!'} />
                </Form.Group>
                <Button text={'Create'} isLoading={isLoading}/>
            </Form>
        </div>
    )
}

export default AccCreate
