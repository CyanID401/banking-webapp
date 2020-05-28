import React, { useState, useEffect } from 'react'
import SelectList from './SelectList'
import AccTransactions from './AccTransactions'
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
            <SelectList 
                elements={accounts.map(item => 
                    ({id: item.id, name: item.name}))}
                onChange={(e) => setCurrentAcc(e.target.value)}
            />
            <div>Balance: {state.balance}</div>
            <div>Currency: {state.currency}</div>
            <div>IBAN: {state.iban}</div>
            <a href="#">Details</a>
            <AccTransactions 
                transactions={state.transactions}
            />
        </>
    )
}

export default Account
