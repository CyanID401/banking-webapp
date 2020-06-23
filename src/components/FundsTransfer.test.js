import React from 'react'
import { shallow } from 'enzyme'
import FundsTransfer from './FundsTransfer'

const renderComp = () => {
    return shallow(<FundsTransfer />)
}

describe('Funds Transfer', () => {
    
    let wrap

    beforeEach(() => {
        wrap = renderComp()
    })

    it('should render', () => {
        expect(wrap.find('Form').length).toEqual(1)
        expect(wrap.find('SelectList').length).toEqual(1)
        expect(wrap.find('InputBox').length).toEqual(4)
        expect(wrap.find('Button').length).toEqual(1)
    })
})