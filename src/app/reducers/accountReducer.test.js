import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './accountReducer'
import accountReducer from './accountReducer'

const data = { 
    id: 0, 
    name: 'account', 
    balance: '0.0', 
    transactions: [] 
}

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Account Action Creators', () => {
    it('should dispatch CREATE_ACCOUNT_REQUEST', () => {
        const initialState = {}
        const store = mockStore(initialState)

        const expectedActions = [
            { type: 'CREATE_ACCOUNT_REQUEST' },
            { type: 'CREATE_ACCOUNT_SUCCESS' },
            { type: 'ADD_NEW_ACCOUNT' }
          ]

        return store.dispatch(actions.createAccount(data)).then(() => {
            const actionCreators = store.getActions()
            const dispatchedActions = 
                actionCreators.map(item => {
                    return { type: item.type }
                })
            expect(dispatchedActions).toEqual(expectedActions)
        })
    })

    it('should dispatch DELETE_ACCOUNT_REQUEST', () => {
        const initialState = {}
        const store = mockStore(initialState)

        const expectedActions = [
            { type: 'DELETE_ACCOUNT_REQUEST' },
            { type: 'DELETE_ACCOUNT_SUCCESS' },
            { type: 'REMOVE_ACCOUNT' }
          ]

        return store.dispatch(actions.deleteAccount({ id: 0 })).then(() => {
            const actionCreators = store.getActions()
            const dispatchedActions = 
                actionCreators.map(item => {
                    return { type: item.type }
                })
            expect(dispatchedActions).toEqual(expectedActions)
        })
    })

    it('should dispatch SET_CURRENT_ACC with the provided id', () => {
        const id = 1
        const expectedAction = {
            type: 'SET_CURRENT_ACC',
            payload: id
        }
        expect(actions.setCurrentAccount(id))
            .toEqual(expectedAction)
    })
})

describe('Account Reducer', () => {
    it('should return the same state', () => {
        const initialState = {
            currencies: [
                {id: 0, name: 'BGN'},
                {id: 1, name: 'EUR'},
                {id: 2, name: 'USD'}
            ],
            currentAccount: 0,
            processingRequest: false,
            isError: false,
            errorMsg: null
        }
        expect(accountReducer(undefined, {}))
            .toEqual(initialState)
    })

    it('should return updated state', () => {
        const action = {
            type: 'SET_CURRENT_ACC',
            payload: 5
        } 
        expect(accountReducer([], action))
            .toEqual({ currentAccount: action.payload })
    })
})