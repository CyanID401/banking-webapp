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


const FundsDeposit = ({ accounts, isLoading, depositFunds  }) => {
    const { control, errors, handleSubmit } = useForm()

    const onSubmit = data => {
        const transaction = {
            id: generateID(),
            date: getDate(),
            type: 'deposit',
            fromAccount: data.fromAccount.value,
            toAccount: data.toAccount.value,
            amount: data.amount,
            reason: data.reason
        }

        depositFunds(transaction)
    }

    
    return (
        <div>
        <h2>Deposit Funds</h2>
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
                    name={'toAccount'}
                    as={SelectList}
                    label={'To Account'}
                    elements={accounts}
                    control={control}
                    rules={{ required: true }}
                />
                <ErrorText 
                    error={errors.toAccount} 
                    errType={'required'} 
                    text={'Selecting an account is required!'} 
                />
                {/* validate if fromAccount.value !== toAccount.value */}
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
            <Button text={'Deposit'} isLoading={isLoading} />
        </Form>
    </div>
    )
}

export default FundsDeposit
