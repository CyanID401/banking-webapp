import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './fundsReducer'
import fundsReducer from './fundsReducer'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Funds Action Creators', () => {
    const transaction = {
        fromAccount: '334',
        toAccount: '555',
        name: 'Recipient',
        iban: 'BG18RZBB91550123456789',
        amount: '30.33',
        reason: 'some reason'
    }

    it('should dispatch TRANSFER_FUNDS_REQUEST', () => {
        const initialState = {}
        const store = mockStore(initialState)

        const expectedActions = [
            { type: 'TRANSFER_FUNDS_REQUEST' },
            { type: 'TRANSFER_FUNDS_SUCCESS' },
            { type: 'UPDATE_ACCOUNT_TRANSFER' }
          ]
        
        return store.dispatch(actions.transferFunds(transaction)).then(() => {
            const actionCreators = store.getActions()
            const dispatchedActions = 
                actionCreators.map(item => {
                    return { type: item.type }
                })
            expect(dispatchedActions).toEqual(expectedActions)
        })
    })

    it('should dispatch DEPOSIT_FUNDS_REQUEST', () => {
        const initialState = {}
        const store = mockStore(initialState)

        const expectedActions = [
            { type: 'DEPOSIT_FUNDS_REQUEST' },
            { type: 'DEPOSIT_FUNDS_SUCCESS' },
            { type: 'UPDATE_ACCOUNT_DEPOSIT' }
          ]
        
        return store.dispatch(actions.depositFunds(transaction)).then(() => {
            const actionCreators = store.getActions()
            const dispatchedActions = 
                actionCreators.map(item => {
                    return { type: item.type }
                })
            expect(dispatchedActions).toEqual(expectedActions)
        })
    })
})