import React, { useState, useEffect } from 'react'
import SelectList from './SelectList'
import AccTransactions from './AccTransactions'


const Account = ({ accounts, currentAcc, setCurrentAcc }) => {
    const [index, setIndex] = useState(accounts[0].id)

    useEffect(() => {
        setIndex(currentAcc)
    }, [currentAcc])
    return (
        <>
            <h1>Current Bank Account</h1>
            <SelectList 
                elements={accounts.map(item => 
                    ({id: item.id, name: item.name}))}
                setSelected={setCurrentAcc} 
            />
            <div>Balance: {accounts[index].balance}</div>
            <div>Currency: {accounts[index].currency}</div>
            <div>IBAN: {accounts[index].iban}</div>
            <a href="#">Details</a>
            <AccTransactions 
                transactions={accounts[index].transactions}
            />
        </>
    )
}

export default Account
