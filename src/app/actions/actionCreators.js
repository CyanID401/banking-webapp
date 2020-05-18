import { TRANSFER_FUNDS, DEPOSIT_FUNDS, 
    CREATE_ACC, DELETE_ACC } from './actionTypes'


export const transferFunds = (data) => {
    return {type: TRANSFER_FUNDS, payload: data}
}

export const depositFunds = (data) => {
    return {type: DEPOSIT_FUNDS, payload: data}
}


export const createAccount = (data) => {
    return {type: CREATE_ACC, payload: data}
}

export const deleteAccount = (data) => {
    return {type: DELETE_ACC, payload: data}
}