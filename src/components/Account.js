import React from 'react'
import { connect } from 'react-redux'
import SelectList from './SelectList'

const Account = ({currentUser}) => {
    const handleOnChange = () => {

    }

    return (
        <div>
            <h1>Current Bank Account</h1>
            {console.log(currentUser.props)}
            <SelectList elements={currentUser.bankAccs} onChange={() => handleOnChange()}/>
            <div>Account Name</div>
            <div>Balance:</div>
            <div>Currency:</div>
            <div>IBAN:</div>
            <a href="#">Details</a>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }
}

// const mapDispachToProps = () => {
//   return {
//     transferFunds,
//     depositFunds,
//     createAccount,
//     deleteAccount
//   }
// }

export default connect(mapStateToProps)(Account)
