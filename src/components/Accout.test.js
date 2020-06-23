import React from 'react'
import { shallow } from 'enzyme'
import Account from './Account'

const renderComp = (props={}) => {
    return shallow(<Account {...props} />)
}

describe('Account', () => {
    
    let wrap

    beforeEach(() => {
        const props = {
            accounts: {
                '0': {
                    id: '0',
                    name: 'test'
                }
            }
        }
        wrap = renderComp(props)
    })

    it('should render', () => {
        expect(wrap.find('SelectList').length).toEqual(1)
        expect(wrap.find('AccTransactions').length).toEqual(1)
    })
})