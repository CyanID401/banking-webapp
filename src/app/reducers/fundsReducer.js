// actions

export const TRANSFER_FUNDS = 'TRANSFER_FUNDS'
export const DEPOSIT_FUNDS = 'DEPOSIT_FUNDS'

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

const fundsReducer = (state = {}, action) => {
    switch (action.type) {
        case TRANSFER_FUNDS:
            return {
                ...state
                // get payload here and transfer
            }
        case DEPOSIT_FUNDS:
            return //todo
        default:
            return state
    }
}

export default fundsReducer

