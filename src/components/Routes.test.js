import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import Loading from './Loading'
import Routes from './Routes'
import ErrorText from './ErrorText'
import AlertMsg from './AlertMsg'

const setUp = (initialState={}) => {
    const mockStore = configureStore()
    const store = mockStore(initialState)
    let wrap = shallow(<Routes store={store} />).children().dive()
    return wrap
}

describe('Routes', () => {

    it('should display loading component', () => {
        let initialState = {
            user: {
                isLoading: true,
                isError: false,
            },
            auth: {
                authUserID: null
            }
        }
        let wrap = setUp(initialState)
        expect(wrap.containsMatchingElement(<Loading />)).toEqual(true)
    })

    it('should display routes', () => {
        let initialState = {
            user: {
                isLoading: false,
                isError: false,
            },
            auth: {
                authUserID: null
            }
        }
        let wrap = setUp(initialState)
        expect(wrap.find('Route').length).toBeGreaterThan(1)
    })

    
    it('should display error message', () => {
        let initial = {
            user: {
                isLoading: false,
                isError: true
            },
            auth: {
                authUserID: null
            }
        }
        let wrap = setUp(initial)
        expect(wrap.containsMatchingElement(<AlertMsg />)).toEqual(true)
    })
})