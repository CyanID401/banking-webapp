import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Account from './Account'
import AccOperations from './AccOperations'
import { fetchUserData, getUser, getIsUserLoaded } from '../app/reducers/userReducer'
import { getCurrentAccount, setCurrentAccount } from '../app/reducers/accountReducer'

const AccInfo = ({ fetchUserData, user, currentAcc, setCurrentAcc, isLoaded }) => {
    useEffect(() => {
        fetchUserData()
    }, [fetchUserData])
    return (
        <>
            { isLoaded ?
                <>
                    <Account 
                        accounts={user.bankAccs}
                        currentAcc={currentAcc}
                        setCurrentAcc={setCurrentAcc}
                    />
                    <AccOperations/>
                </> : 
            <div>Loading...</div>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
        currentAcc: getCurrentAccount(state),
        isLoaded: getIsUserLoaded(state)
    }
}

const mapDispatchToProps = {
    fetchUserData,
    setCurrentAcc: setCurrentAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccInfo)
