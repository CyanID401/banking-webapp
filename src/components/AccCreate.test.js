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
        expect(wrap.find('Controller').length).toEqual(2)
        expect(wrap.find('Button').length).toEqual(1)
    })
})