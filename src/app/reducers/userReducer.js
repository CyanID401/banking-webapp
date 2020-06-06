import { instance } from '../../api/index'
import produce from 'immer'
import normalizedData from '../../api/normalize-data'

// actions

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
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
        console.log(data)
        dispatch({ type: GET_USER_SUCCESS, payload: [normalizedData(data)] })
    })
    .catch(error => {
        dispatch({ type: GET_USER_ERROR, error })
    })
}

// reducer

// let initialState = {
//     data: {
//         bankAccs: {
//            '': {
//                 balance: '',
//                 transactions: []
//             }
//         }
//     },
//     isLoading: true,
//     isError: false,
//     errorMsg: null
// }

let initialState = {
    bankAccs: {
        '': {
            balance: '',
        }
    },
    transactions: {},
    data: { firstName: 'test', lastName: 'test'},
    isLoading: true,
    isError: false,
    errorMsg: null
}

const withdrawFromAccount = (state, data) => {
    return produce(state, draft => { 
        draft.data.bankAccs[data.fromAccount].balance = ((
            parseFloat(draft.data.bankAccs[data.fromAccount].balance) - data.amount)
            .toFixed(2))
            .toString()
        draft.data.bankAccs[data.fromAccount].transactions.push(data)
    })
}

const depositToAccount = (state, data) => {
    return produce(state, draft => { 
        // from account
        let history = {
            id: data.id, 
            date: data.date,
            reason: data.reason,
            amount: data.amount,
            type: 'withdraw'
        }
        draft.data.bankAccs[data.fromAccount].balance = ((
            parseFloat(draft.data.bankAccs[data.fromAccount].balance) - parseFloat(data.amount))
            .toFixed(2))
            .toString()
        draft.data.bankAccs[data.fromAccount].transactions.push(history)

        // to account
        draft.data.bankAccs[data.toAccount].balance = ((
            parseFloat(draft.data.bankAccs[data.toAccount].balance) + parseFloat(data.amount))
            .toFixed(2))
            .toString()
        draft.data.bankAccs[data.toAccount].transactions.push(data)
    })
}

const userReducer = (state = initialState, action) => {
    console.log(action)
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
            return produce(state, draft => {
                const id = action.data.id
                Object.assign(draft.data.bankAccs, {[id]: action.data})
            })
        case REMOVE_ACCOUNT:
            return produce(state, draft => {
                console.log(Object.keys(draft.data.bankAccs))
                console.log(Object.entries(draft.data.bankAccs))
                // this doesn't work
                console.log(Object.keys(draft.data.bankAccs).splice(action.data.accountID, 1))
                //Object.keys(draft.data.bankAccs).filter(id => id !== action.data.accountID)
                //draft.data.bankAccs.splice(action.data.accountID, 1)
            })
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

export const getUserFName = (state) => {
    return state.user.data.firstName
}

export const getUserLName = (state) => {
    return state.user.data.lastName
}

export default userReducer

