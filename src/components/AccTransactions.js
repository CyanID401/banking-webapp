import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'

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
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reason</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>                     
                            {state.map((item) =>
                                <tr key={item.id}>
                                    <td>{item.date}</td>
                                    <td>{item.reason}</td>
                                    <td style={setColor(item)}>
                                        {item.amount}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    </> : 
                <div>No transactions in the current account!</div> }
        </div>
    )
}

export default AccTransactions