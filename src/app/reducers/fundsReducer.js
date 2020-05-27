import { instance } from '../../api/index'

// actions

const TRANSFER_FUNDS_REQUEST = 'TRANSFER_FUNDS_REQUEST'
const TRANSFER_FUNDS_SUCCESS = 'TRANSFER_FUNDS_SUCCESS'
const TRANSFER_FUNDS_ERROR = 'TRANSFER_FUNDS_ERROR'

const DEPOSIT_FUNDS_REQUEST = 'DEPOSIT_FUNDS_REQUEST'
const DEPOSIT_FUNDS_SUCCESS = 'DEPOSIT_FUNDS_SUCCESS'
const DEPOSIT_FUNDS_ERROR = 'DEPOSIT_FUNDS_ERROR'

// action creators

export const transferFunds = (formData) => (dispatch) => {
    dispatch({ type: TRANSFER_FUNDS_REQUEST, data: formData })
    return instance.post('/transactions')
        .then(({ data }) => {
            dispatch({ type: TRANSFER_FUNDS_SUCCESS, data })
            dispatch({ type: 'UPDATE_ACCOUNT_TRANSFER', data: formData })
        })
        .catch((error) => {
            dispatch({ type: TRANSFER_FUNDS_ERROR, error })
        })
}

export const depositFunds = (formData) => (dispatch) => {
    dispatch({ type: DEPOSIT_FUNDS_REQUEST, data: formData })
    return instance.post('/transactions')
    .then(({ data }) => {
        dispatch({ type: DEPOSIT_FUNDS_SUCCESS, data })
        dispatch({ type: 'UPDATE_ACCOUNT_DEPOSIT', data: formData })
    })
    .catch((error) => {
        dispatch({ type: DEPOSIT_FUNDS_ERROR, error })
    })
}

// reducer

let initialState = {
    processingTransaction: false,
    isError: false,
    errorMsg: null
}

const fundsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFER_FUNDS_REQUEST:
        case DEPOSIT_FUNDS_REQUEST:
            return {
                ...state,
                processingTransaction: true
            }
        case TRANSFER_FUNDS_SUCCESS:
        case DEPOSIT_FUNDS_SUCCESS:
            return {
                ...state,
                processingTransaction: false
            }
        case TRANSFER_FUNDS_ERROR:
        case DEPOSIT_FUNDS_ERROR:
            return {
                ...state,
                isError: true,
                errorMsg: action.error
            }
        default:
            return state
    }
}

// selectors

export const getTransactionStatus = (state) => {
    return state.funds.processingTransaction
}

export default fundsReducer

