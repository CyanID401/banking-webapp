import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from "react-router-dom"
import Home from '../views/Home'
import AccountInfo from '../views/AccountInfo'
import AccountManager from '../views/AccountManager'
import FundsManager from '../views/FundsManager'
import NotFound from '../views/NotFound'
import Loading from './Loading'
import { fetchUserData, 
    getUserDataStatus } from '../app/reducers/userReducer'

const Routes = ({ fetchUserData, dataStatus }) =>  {
    useEffect(() => {
        fetchUserData()
    }, []) 
    return (
        <>
            { dataStatus.isLoading ?
                <Loading /> :
                dataStatus.isError ?
                    <div>Error Loading Data</div> :
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/account">
                            <AccountInfo />
                        </Route>
                        <Route path="/accounts">
                            <AccountManager />
                        </Route>
                        <Route path="/funds">
                            <FundsManager />
                        </Route>
                        <Route path="*"> 
                            <NotFound />
                        </Route>
                    </Switch>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        dataStatus: getUserDataStatus(state)
    }
}

const mapDispatchToProps = {
    fetchUserData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
