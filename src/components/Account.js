import React, { useState, useEffect } from 'react'
import SelectList from './SelectList'
import AccTransactions from './AccTransactions'
import { Container } from 'react-bootstrap'
import { filterElementByID } from '../scripts/utilities'


const Account = ({ accounts, currentAcc, setCurrentAcc }) => {
    const [state, setState] = useState({
        balance: 0.0,
        currency: '',
        iban: '',
        transactions: []
    })
    useEffect(() => {
        setCurrentAcc(accounts[0].id)
    }, [])

    useEffect(() => {
        const data = 
            filterElementByID(accounts, currentAcc)
        setState({
            ...state,
            ...data[0]
        })
    }, [currentAcc])
    return (
        <>
            <h1>Current Bank Account</h1>
            <Container>
                <div>
                    <h2>Information</h2>
                    <SelectList 
                        elements={accounts}
                        onChange={(e) => setCurrentAcc(e.value)}
                        defaultVal={{value: accounts[0].id, label: accounts[0].name}}
                    />
                    <Container>
                        <div>Balance: {state.balance}</div>
                        <div>Currency: {state.currency}</div>
                        <div>IBAN: {state.iban}</div>
                        <a href="#">Details</a>
                    </Container>
                                        
                </div>
                <AccTransactions 
                    transactions={state.transactions}
                />       
            </Container>
        </>
    )
}

export default Account
