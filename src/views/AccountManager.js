import React from 'react'
import { connect } from 'react-redux'
import AccCreate from '../components/AccCreate'
import AccDelete from '../components/AccDelete'
import AlertMsg from '../components/generic/AlertMsg'
import { createAccount, deleteAccount,
        getCurrencies, getRequestStatus, getAccErrorStatus } from '../app/reducers/accountReducer'
import { getUserAccounts } from '../app/reducers/userReducer'
import { Tabs, Tab } from 'react-bootstrap'

const AccountManager = ({ currencies, accounts, isProcessing, 
    errorStatus, createAccount, deleteAccount }) => {
    return (
        <div>
            { errorStatus.isError &&
                    <AlertMsg msg={errorStatus.msg} type={'error'}/> }
            <h1>Manage Accounts</h1>
            <Tabs defaultActiveKey="create">
                <Tab eventKey="create" title="Create">
                    <AccCreate 
                        currencies={currencies}
                        isLoading={isProcessing}
                        createAccount={createAccount}
                    />
                </Tab>
                <Tab eventKey="delete" title="Delete">
                    <AccDelete
                        accounts={accounts}
                        isLoading={isProcessing}
                        deleteAccount={deleteAccount}
                    />
                </Tab>
            </Tabs>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        accounts: getUserAccounts(state),
        currencies: getCurrencies(state),
        isProcessing: getRequestStatus(state),
        errorStatus: getAccErrorStatus(state)
    }
}

const mapDispatchToProps = {
    createAccount,
    deleteAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountManager)
