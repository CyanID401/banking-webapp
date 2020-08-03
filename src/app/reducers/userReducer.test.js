import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './userReducer'
import userReducer from './userReducer'

const defaultInitialState = {
    bankAccs: {},
    data: {},
    isLoading: false,
    isError: false,
    errorMsg: null,
    transactions: {}
}
const initialState = {
    bankAccs: {
        '0': {
            balance: '60',
            transactions: []
        },
        '1': {
            balance: '75',
            transactions: []
        }
    },
    data: {},
    isLoading: false,
    isError: false,
    errorMsg: null,
    transactions: {}
}
const transaction = {
    fromAccount: '0',
    toAccount: '1',
    name: 'Recipient',
    iban: 'BG18RZBB91550123456789',
    amount: '30',
    reason: 'some reason'
}
const account = {
    id: '123',
    balance: '0.0',
    iban: 'BG58RZBB91555087474816',
    transactions: [],
    name: 'Account name',
    currency: 'BGN'
}

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('User Action Creators', () => {
    it('should dispatch GET_USER_REQUEST', () => {
        const store = mockStore(initialState)

        const expectedActions = [
            { type: 'GET_USER_REQUEST' },
            { type: 'GET_USER_SUCCESS' },
        ]

        return store.dispatch(actions.fetchUserData(0)).then(() => {
            const actionCreators = store.getActions()
            const dispatchedActions = 
                actionCreators.map(item => {
                    return { type: item.type }
                })
            expect(dispatchedActions).toEqual(expectedActions)
        })
    })
})

describe('User Reducer', () => {
    it('should return the same state', () => {
        expect(userReducer(undefined, {}))
            .toEqual(defaultInitialState)
    })

    it('should decrease balance and add a new transaction', () => {
        const action = {
            type: 'UPDATE_ACCOUNT_TRANSFER',
            data: transaction
        }
        const id = action.data.fromAccount
        const state = userReducer(initialState, action)

        expect(parseInt(state.bankAccs[id].balance))
            .toBeCloseTo(30)
        expect(state.bankAccs[id].transactions.length)
            .toBeGreaterThan(initialState.bankAccs[id].transactions.length)
        expect(Object.keys(state.transactions).length)
            .toBeGreaterThan(Object.keys(initialState.transactions).length)
    })

    it('should decrease balance from one account, increase in another and add a new transaction', () => {
        const action = {
            type: 'UPDATE_ACCOUNT_DEPOSIT',
            data: transaction
        }
        const idFrom = action.data.fromAccount
        const idTo = action.data.toAccount
        const state = userReducer(initialState, action)

        expect(parseInt(state.bankAccs[idFrom].balance))
            .toBeCloseTo(30)
        expect(state.bankAccs[idFrom].transactions.length)
            .toBeGreaterThan(initialState.bankAccs[idFrom].transactions.length)

        expect(parseInt(state.bankAccs[idTo].balance))
            .toBeCloseTo(105)
        expect(state.bankAccs[idTo].transactions.length)
            .toBeGreaterThan(initialState.bankAccs[idTo].transactions.length)

        expect(Object.keys(state.transactions).length)
            .toBeGreaterThan(Object.keys(initialState.transactions).length)
    })

    it('should add a new account', () => {
        const action = {
            type: 'ADD_NEW_ACCOUNT',
            data: account
        }
        const state = userReducer(initialState, action)
        
        expect(Object.entries(state.bankAccs).length)
            .toBeGreaterThan(Object.entries(initialState.bankAccs).length)
    })

    it('should remove an account by id', () => {
        const action = {
            type: 'REMOVE_ACCOUNT',
            data: {
                id: 0
            }
        }
        const state = userReducer(initialState, action)

        expect(Object.entries(state.bankAccs).length)
            .toBeLessThan(Object.entries(initialState.bankAccs).length)
    })
})
