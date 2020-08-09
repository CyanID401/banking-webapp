import React from 'react'
import { shallow } from 'enzyme'
import AccTransactions from './AccTransactions'

const renderComp = (props={}) => {
    return shallow(<AccTransactions {...props} />)
}

describe('Account Transactions', () => {
    
    let wrap

    beforeEach(() => {
        const props = {
            transactions: {
                '0': {
                    id: '0',
                    data: '01.01.2020',
                    type: 'deposit',
                    reason: 'some reason',
                    amount: '333'
                }
            }
        }
        wrap = renderComp(props)
    })

    it('should render', () => {
        expect(wrap.find('thead').length).toEqual(1)
        expect(wrap.find('tbody').length).toEqual(1)
    })
})