import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import Button from '../components/Button'
import ErrorText from '../components/ErrorText'
import InputBox from '../components/InputBox'
import { Form, Container } from 'react-bootstrap'
import { authUser, getAuthStatus } from '../app/reducers/authReducer'

function Login({ authUser, authStatus }) {
    const { control, errors, handleSubmit } = useForm()
    const history = useHistory()
  
    useEffect(() => {
        if(authStatus.isAuth) {
            history.push('/home')
        }
    }, [authStatus.isAuth, history])

    const onSubmit = data => {
        authUser(data)
    }
    return (
        <Container className="login">
            <h2 className="center">Login</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Controller 
                        name={'userName'}
                        as={InputBox}
                        label={'Username'}
                        placeholder={'Enter username'}
                        control={control}
                        rules={{ required: true }}
                    />
                    <ErrorText 
                        error={errors.userName} 
                        errType={'required'} 
                        text={'Username is required!'} 
                    />
                 </Form.Group> 
                 <Form.Group>
                    <Controller 
                        name={'passWrd'}
                        as={InputBox}
                        label={'Password'}
                        type={'password'}
                        placeholder={'Enter password'}
                        control={control}
                        rules={{ required: true }}
                    />
                    <ErrorText 
                        error={errors.passWrd} 
                        errType={'required'} 
                        text={'Password is required!'} 
                    />
                 </Form.Group> 
                <Button text={'Sign In'} />
            </Form>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        authStatus: getAuthStatus(state)
    }
}

const mapDispatchToProps = {
    authUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
