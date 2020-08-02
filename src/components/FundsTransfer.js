import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import SelectList from './SelectList'
import InputBox from './InputBox'
import Button from './Button'
import ErrorText from './ErrorText'
import { Form } from 'react-bootstrap'
import getDate from '../scripts/date'
import generateID from '../scripts/id-generator'
import { numberPattern } from '../scripts/custom-validation'

const FundsTransfer = ({ accounts, isLoading, transferFunds }) => {
    const { control, errors, handleSubmit } = useForm()

    const onSubmit = data => {
        const transaction = {
            id: generateID(),
            date: getDate(),
            type: 'withdraw',
            fromAccount: data.fromAccount.value,
            name: data.recipientName,
            iban: data.iban,
            amount: data.amount,
            reason: data.reason
        }

        transferFunds(transaction)
    }

    return (
    <div>
        <h2>Transfer Funds</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Controller 
                    name={'fromAccount'}
                    as={SelectList}
                    label={'From Account'}
                    elements={accounts}
                    control={control}
                    rules={{ required: true }}
                />
                <ErrorText 
                    error={errors.fromAccount} 
                    errType={'required'} 
                    text={'Selecting an account is required!'} 
                />
            </Form.Group>
            <Form.Group>
                <Controller 
                    name={'recipientName'}
                    as={InputBox}
                    label={'Recipient Name'}
                    placeholder={'Enter Name Of The Recipient'}
                    control={control}
                    rules={{ required: true, minLength: 2 }}
                />
                <ErrorText 
                    error={errors.recipientName} 
                    errType={'required'} 
                    text={'Specifying the recipient is required!'} 
                />
                <ErrorText 
                    error={errors.recipientName} 
                    errType={'minLength'} 
                    text={'The name must be at least 2 characters long!'} 
                /> 
            </Form.Group>
            <Form.Group>
                <Controller 
                    name={'iban'}
                    as={InputBox}
                    label={'IBAN'}
                    placeholder={'Enter Recipient\'s IBAN'}
                    control={control}
                    rules={{ required: true, minLength: 15, maxLength: 21 }}
                />
                <ErrorText 
                    error={errors.iban} 
                    errType={'required'} 
                    text={'Specifying the IBAN is required!'} 
                />
                {errors.iban && (errors.iban.type === 'minLength' || errors.iban.type === 'maxLength') && (
                    <ErrorText text={'IBAN is too short or too long!'} />
                )}
            </Form.Group>
            <Form.Group>
                <Controller 
                    name={'amount'}
                    as={InputBox}
                    label={'Amount'}
                    placeholder={'0.0'}
                    control={control}
                    rules={{ required: true, pattern: numberPattern() }}
                />
                <ErrorText 
                    error={errors.amount} 
                    errType={'required'} 
                    text={'Specifying the amount is required!'} 
                />
                <ErrorText 
                    error={errors.amount} 
                    errType={'pattern'} 
                    text={'Value is not valid!'} 
                />
            </Form.Group>
            <Form.Group>
                <Controller 
                    name={'reason'}
                    as={InputBox}
                    label={'Reason'}
                    placeholder={'Enter Reason For The Transaction'}
                    control={control}
                    rules={{ required: true }}
                />
                <ErrorText 
                    error={errors.reason} 
                    errType={'required'} 
                    text={'Specifying the reason is required!'} 
                />
            </Form.Group>
            <Button text={'Transfer'} isLoading={isLoading} />
        </Form>
    </div> 
    )
}

export default FundsTransfer
