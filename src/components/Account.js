import React, { useState, useEffect } from 'react'
import SelectList from './SelectList'
import AccTransactions from './AccTransactions'
import { Container } from 'react-bootstrap'
import { fixedFloat } from '../scripts/utilities'

const Account = ({ accounts, transactions, currentAcc, setCurrentAcc }) => {
    const [state, setState] = useState({
        balance: 0.0,
        currency: '',
        iban: '',
        transactions: []
    })
    const [defaultAcc] = useState({
        id: accounts[Object.keys(accounts)[0]].id,
        name: accounts[Object.keys(accounts)[0]].name
    })

    useEffect(() => {
        setCurrentAcc(defaultAcc.id)
    }, [])

    useEffect(() => {
        const data = accounts[currentAcc]
        setState({
            ...state,
            ...data
        })
    }, [currentAcc])
    return (
        <>
            <h1>Current Bank Account</h1>
            <Container>
                <div className={"acc shadow"}>
                    <h2>Information</h2>
                    <SelectList 
                        elements={accounts}
                        onChange={(e) => setCurrentAcc(e.value)}
                        defaultVal={{ value: defaultAcc.id, label: defaultAcc.name }}
                    />
                    <Container className={"acc-info hide-overflow"}>
                        <div>Balance: {fixedFloat(state.balance)}</div>
                        <div>Currency: {state.currency}</div>
                        <div>IBAN: {state.iban}</div>
                        <a href="#details">Details</a>
                    </Container>             
                </div>
                <AccTransactions 
                    transactions={transactions}
                />       
            </Container>
        </>
    )
}

export default Account
