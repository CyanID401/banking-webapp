import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import UserInfo from './UserInfo'

const setUp = (initialState={}) => {
    const mockStore = configureStore()
    const store = mockStore(initialState)
    let wrap = shallow(<UserInfo store={store} />).dive()
    return wrap
}

describe('User Info', () => {

    let wrap

    beforeEach(() => {
        let initialState = {
            user: {
                data: {
                    firstName: 'Test',
                    lastName: 'Me'
                }
            }
        }
        wrap = setUp(initialState)
    })

    it('should render text', () => {
        expect(wrap.text().length).toBeGreaterThan(0)
    })
})