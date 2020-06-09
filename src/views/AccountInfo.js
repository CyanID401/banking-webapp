import React from 'react'
import { connect } from 'react-redux'
import Account from '../components/Account'
import { getUserAccounts, getUserTransactions } from '../app/reducers/userReducer'
import * as acc from '../app/reducers/accountReducer'
import filter from 'lodash/filter';

const AccountInfo = ({ accounts, transactions, currentAcc, setCurrentAcc }) => {
    return (
        <>
            <Account 
                accounts={accounts}
                transactions={
                    filter(
                        transactions, 
                        tr => accounts[currentAcc].transactions.includes(tr.id)
                    )
                }
                currentAcc={currentAcc}
                setCurrentAcc={setCurrentAcc}
            />  
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        accounts: getUserAccounts(state),
        transactions: getUserTransactions(state),
        currentAcc: acc.getCurrentAccount(state)
    }
}

const mapDispatchToProps = {
    setCurrentAcc: acc.setCurrentAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo)
