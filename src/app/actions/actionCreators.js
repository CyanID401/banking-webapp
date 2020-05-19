import * as actions from './actionTypes'
import { instance } from '../../API'

export const transferFunds = (data) => {
    return {
        type: actions.TRANSFER_FUNDS, 
        payload: data
    }
}

export const depositFunds = (data) => {
    return {
        type: actions.DEPOSIT_FUNDS,
         payload: data
    }
}


export const createAccount = (data) => {
    return {
        type: actions.CREATE_ACC, 
        payload: data
    }
}

export const deleteAccount = (data) => {
    return {
        type: actions.DELETE_ACC, 
        payload: data
    }
}

export const  fetchUserData = (id = 0) => dispatch => { 
    instance.get(`/users/${id}`)
    .then((res) => {
        let data = { ...res.data }
        dispatch({ type: actions.INITIALIZE_STATE, data, isDataInitialized: true });
    })
    .catch((error) => {
        console.log(error);
    })
}