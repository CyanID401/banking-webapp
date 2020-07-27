import { instance } from '../../api/index'
import normalizedData from '../../api/normalize-data'
import { insertItem, removeKey } from '../../scripts/utilities'
import omit from 'lodash/omit'

// actions

const GET_USER_REQUEST = 'GET_USER_REQUEST'
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
const GET_USER_ERROR = 'GET_USER_ERROR'

const UPDATE_ACCOUNT_DEPOSIT = 'UPDATE_ACCOUNT_DEPOSIT'
const UPDATE_ACCOUNT_TRANSFER = 'UPDATE_ACCOUNT_TRANSFER'

const ADD_NEW_ACCOUNT = 'ADD_NEW_ACCOUNT'
const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT'

// action creators

export const fetchUserData = (id = 0) => (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    return instance.get(`/user/${id}`)
    .then(({ data }) => {
        dispatch({ type: GET_USER_SUCCESS, payload: [normalizedData(data)] })
    })
    .catch(error => {
        dispatch({ type: GET_USER_ERROR, error })
    })
}

// reducer

let initialState = {
    bankAccs: {},
    transactions: {},
    data: {},
    isLoading: true,
    isError: false,
    errorMsg: null
}

const withdrawFromAccount = (state, data) => {
    return {
        ...state,
        bankAccs: {
            ...state.bankAccs,
            [data.fromAccount]: {
                ...state.bankAccs[data.fromAccount],
                balance: 
                    parseFloat(state.bankAccs[data.fromAccount].balance) - parseFloat(data.amount),
                transactions: insertItem(state.bankAccs[data.fromAccount].transactions, data.id)
            }
        },
        transactions: {
            ...state.transactions,
            [data.id]: omit({ ...data }, ['name', 'iban'])
        }
    }
}

const depositToAccount = (state, data) => {
    console.log(data)
    return { 
        ...state,
        bankAccs: {
            ...state.bankAccs,
            // from account
            [data.fromAccount]: {
                ...state.bankAccs[data.fromAccount],
                balance: 
                    parseFloat(state.bankAccs[data.fromAccount].balance) - parseFloat(data.amount),
                transactions: insertItem(state.bankAccs[data.fromAccount].transactions, data.id)
            },

            // to account
            [data.toAccount]: {
                ...state.bankAccs[data.toAccount],
                balance: 
                    parseFloat(state.bankAccs[data.toAccount].balance) + parseFloat(data.amount),
                transactions: insertItem(state.bankAccs[data.toAccount].transactions, data.id)
            }
        },
        transactions: {
            ...state.transactions,
            [data.id]: { ...data }
        }
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            console.log('Initializating state from mock API...')
            return {
                ...state,
                bankAccs: action.payload[0].entities.bankAccs,
                transactions: action.payload[0].entities.transactions,
                data: action.payload[0].entities.user[0],
                isLoading: false
            }
        case GET_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: action.error,
            }
        case UPDATE_ACCOUNT_TRANSFER:
            return withdrawFromAccount(state, action.data)
        case UPDATE_ACCOUNT_DEPOSIT:
            return depositToAccount(state, action.data)
        case ADD_NEW_ACCOUNT:
            return {
                ...state,
                bankAccs: {
                    ...state.bankAccs,
                    [action.data.id]: action.data
                }
            }
        case REMOVE_ACCOUNT:
            return {
                ...state,
                bankAccs: removeKey(state.bankAccs, action.data.id)
            }
        default:
            return state
    }
}

// selectors

export const getUserDataStatus = (state) => {
    return {
        isLoading: state.user.isLoading,
        isError: state.user.isError
    }
}

export const getUserAccounts = (state) => {
    return state.user.bankAccs
}

export const getUserTransactions = (state) => {
    return state.user.transactions
}

export const getUserFName = (state) => {
    return state.user.data.firstName
}

export const getUserLName = (state) => {
    return state.user.data.lastName
}

export default userReducer

