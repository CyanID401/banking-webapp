import React from 'react'
import { shallow } from 'enzyme'
import FundsDeposit from './FundsDeposit'

const renderComp = () => {
    return shallow(<FundsDeposit />)
}

describe('Funds Deposit', () => {
    
    let wrap

    beforeEach(() => {
        wrap = renderComp()
    })

    it('should render', () => {
        expect(wrap.find('Form').length).toEqual(1)
        expect(wrap.find('Controller').length).toEqual(4)
        expect(wrap.find('Button').length).toEqual(1)
    })
})