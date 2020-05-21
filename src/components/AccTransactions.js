import React, { useState, useEffect } from 'react'

const AccTransactions = ( {transactions} ) => {
    const [state, setState] = useState([])

    useEffect(() => {
        setState(transactions)
    }, [transactions])

    const setColor = (item) => {
        let style = {color: ''}
        style.color = 'red'
        item.type === 'deposit' && (style.color = 'green')
        return style
    }
    return (
        <div>
            <h2>History of Transactions</h2>
                {Object.keys(transactions).length > 0 ?
                    <>
                        {state.map((item) =>
                            <li key={item.id}>
                                <span>{item.date}</span>
                                <span>{item.reason}</span>
                                <span style={setColor(item)}>{item.amount}</span>
                            </li>
                        )}
                    </> : 
                <div>No transactions in the current account!</div> }
        </div>
    )
}

export default AccTransactions