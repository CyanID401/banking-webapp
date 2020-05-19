import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Account from './Account'
import AccTransactions from './AccTransactions'
import AccOperations from './AccOperations'
import { fetchUserData } from '../app/actions/actionCreators'

const AccInfo = ({fetchUserData, user}) => {
    useEffect(() => {
        fetchUserData()
    }, [fetchUserData])
    return (
        <div>
            <Account />
            <AccOperations />
            <AccTransactions />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.data
    }
}

const mapDispatchToProps = {
    fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(AccInfo)
