import React from 'react'
import { shallow } from 'enzyme'
import AccCreate from './AccCreate'

const renderComp = () => {
    return shallow(<AccCreate />)
}

describe('Account Create', () => {
    
    let wrap

    beforeEach(() => {
        wrap = renderComp()
    })

    it('should render', () => {
        expect(wrap.find('Form').length).toEqual(1)
        expect(wrap.find('InputBox').length).toEqual(1)
        expect(wrap.find('SelectList').length).toEqual(1)
        expect(wrap.find('Button').length).toEqual(1)
    })
})