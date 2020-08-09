import React from 'react'
import { connect } from 'react-redux'
import FundsTransfer from '../components/FundsTransfer'
import FundsDeposit from '../components/FundsDeposit'
import AlertMsg from '../components/generic/AlertMsg'
import { getUserAccounts } from '../app/reducers/userReducer'
import { transferFunds, depositFunds,
     getTransactionStatus, getErrorStatus} from '../app/reducers/fundsReducer'
import { Tabs, Tab } from 'react-bootstrap'

const FundsManager = ({ accounts, transferFunds, depositFunds, isProcessing,  errorStatus }) => {

    return (
        <>
            { errorStatus.isError &&
                <AlertMsg msg={errorStatus.msg} type={'error'}/> }
            <h1>Manage Funds</h1>
            <Tabs defaultActiveKey="transfer">
                <Tab eventKey="transfer" title="Transfer">
                    <FundsTransfer
                        accounts={accounts}
                        isLoading={isProcessing}
                        transferFunds={transferFunds}
                    />
                </Tab>
                <Tab eventKey="deposit" title="Deposit">
                    <FundsDeposit 
                        accounts={accounts}
                        isLoading={isProcessing}
                        depositFunds={depositFunds}
                    />
                </Tab>
            </Tabs>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        accounts: getUserAccounts(state),
        isProcessing: getTransactionStatus(state),
        errorStatus: getErrorStatus(state)
    }
}

const mapDispatchToProps = {
    transferFunds,
    depositFunds
}

export default connect(mapStateToProps, mapDispatchToProps)(FundsManager)