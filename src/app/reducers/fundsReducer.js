import { TRANSFER_FUNDS, DEPOSIT_FUNDS } from '../actions/actionTypes'

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

