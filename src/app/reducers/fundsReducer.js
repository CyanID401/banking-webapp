// actions

const TRANSFER_FUNDS = 'TRANSFER_FUNDS'
const DEPOSIT_FUNDS = 'DEPOSIT_FUNDS'
const SET_FROM_ACC = 'SET_FROM_ACC'
const SET_TO_ACC = 'SET_TO_ACC'

// action creators

export const transferFunds = (data) => {
    return {
        type: TRANSFER_FUNDS, 
        payload: data
    }
}

export const depositFunds = (data) => {
    return {
        type: DEPOSIT_FUNDS,
        payload: data
    }
}

// reducer

let initialState = {
    fromAccount: null,
    toAccount: null
}

const fundsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFER_FUNDS:
            return {
                ...state
                // get payload here and transfer
            }
        case DEPOSIT_FUNDS:
            return {
                ...state
            }
        case SET_FROM_ACC:
            return {
                ...state
            }
        case SET_TO_ACC:
            return {
                ...state
            }    
        default:
            return state
    }
}

export default fundsReducer

