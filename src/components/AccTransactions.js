import React, { useState } from 'react'

const AccTransactions = () => {
    let initialState = [
        {
            date: '1.1.2020',
            reason: 'Groceries',
            amount: '30.23',
            type: 'withdraw',
        },
        {
            date: '3.3.2020',
            reason: 'Rent',
            amount: '333.00',
            type: 'withdraw',
        },
        {
            date: '4.3.2020',
            reason: 'Salary',
            amount: '666.00',
            type: 'deposit',
        },
    ]
    const [state] = useState(initialState)

    const setColor = (item) => {
        let style = {color: ''}
        style.color = 'red'
        item.type === 'deposit' && (style.color = 'green')
        return style
    }

    return (
        <div>
            <h2>History of Transactions</h2>
            {state.map((item, index) =>
                <li key={index}>
                    
                    <span>{item.date}</span>
                    <span>{item.reason}</span>
                    <span style={setColor(item)}>{item.amount}</span>
                </li>
            )}
        </div>
    )
}

export default AccTransactions