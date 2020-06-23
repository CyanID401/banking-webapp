import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import Loading from './Loading'
import Routes from './Routes'

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
                isError: false
            }
        }
        let wrap = setUp(initialState)
        expect(wrap.containsMatchingElement(<Loading />)).toEqual(true)
    })

    it('should display routes', () => {
        let initialState = {
            user: {
                isLoading: false,
                isError: false
            }
        }
        let wrap = setUp(initialState)
        expect(wrap.find('Route').length).toBeGreaterThan(1)
    })

    
    it('should display error message', () => {
        let initialState = {
            user: {
                isLoading: false,
                isError: true
            }
        }
        let wrap = setUp(initialState)
        expect(wrap.text().includes('Error Loading Data')).toBe(true)
    })
})