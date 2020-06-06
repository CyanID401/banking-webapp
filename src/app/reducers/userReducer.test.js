import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './userReducer'
import userReducer from './userReducer'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('User Action Creators', () => {
    it('should dispatch GET_USER_REQUEST', () => {
        const initialState = {}
        const store = mockStore(initialState)

        const expectedActions = [
            { type: 'GET_USER_REQUEST' },
            { type: 'GET_USER_SUCCESS' },
          ]

        return store.dispatch(actions.fetchUserData()).then(() => {
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
        const initialState = {
            data: {
                bankAccs: {
                   '': {
                        balance: '',
                        transactions: []
                    }
                }
            },
            isLoading: true,
            isError: false,
            errorMsg: null
        }
        expect(userReducer(undefined, {}))
            .toEqual(initialState)
    })

    const transaction = {
        fromAccount: '0',
        toAccount: '1',
        name: 'Recipient',
        iban: 'BG18RZBB91550123456789',
        amount: '30',
        reason: 'some reason'
    }
    const initialState = {
        data: {
            bankAccs: {
                '0': {
                    id: '0',
                    balance: '100',
                    transactions: []
                },
                '1': {
                    id: '1',
                    balance: '200',
                    transactions: []
                }
            }
        }
    }

    it('should decrease balance and add a new transaction', () => {
        const action = {
            type: 'UPDATE_ACCOUNT_TRANSFER',
            data: transaction
        } 
        expect(parseInt(userReducer(initialState, action).data.bankAccs[action.data.fromAccount].balance))
            .toBeCloseTo(70)
        expect(userReducer(initialState, action).data.bankAccs[action.data.fromAccount].transactions.length)
            .toBeGreaterThan(initialState.data.bankAccs[action.data.fromAccount].transactions.length)
    })

    it('should decrease balance from one account, increase in another and add a new transaction', () => {
        const action = {
            type: 'UPDATE_ACCOUNT_DEPOSIT',
            data: transaction
        }
        const state = userReducer(initialState, action)

        expect(parseInt(state.data.bankAccs[action.data.fromAccount].balance))
            .toBeCloseTo(70)
        expect(state.data.bankAccs[action.data.fromAccount].transactions.length)
            .toBeGreaterThan(initialState.data.bankAccs[action.data.fromAccount].transactions.length)

        expect(parseInt(state.data.bankAccs[action.data.toAccount].balance))
            .toBeCloseTo(230)
        expect(state.data.bankAccs[action.data.toAccount].transactions.length)
            .toBeGreaterThan(initialState.data.bankAccs[action.data.toAccount].transactions.length)
    })

    it('should add a new account', () => {
        const account = {
            id: '123',
            balance: '0.0',
            iban: 'BG58RZBB91555087474816',
            transactions: [],
            name: 'Account name',
            currency: 'BGN'
        }

        const action = {
            type: 'ADD_NEW_ACCOUNT',
            data: account
        }

        const state = userReducer(initialState, action)
        
        expect(Object.entries(state.data.bankAccs).length)
            .toBeGreaterThan(Object.entries(initialState.data.bankAccs).length)
    })

    it('should remove an account by id', () => {
        const action = {
            type: 'REMOVE_ACCOUNT',
            data: {
                id: 0
            }
        }

        const state = userReducer(initialState, action)

        expect(state.data.bankAccs.length)
            .toBeLessThan(initialState.data.bankAccs.length)
    })
})
