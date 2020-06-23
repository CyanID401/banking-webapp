import React from 'react'
import { shallow } from 'enzyme'
import AccDelete from './AccDelete'

const renderComp = () => {
    return shallow(<AccDelete />)
}

describe('Account Delete', () => {
    
    let wrap

    beforeEach(() => {
        wrap = renderComp()
    })

    it('should render', () => {
        expect(wrap.find('Form').length).toEqual(1)
        expect(wrap.find('SelectList').length).toEqual(1)
        expect(wrap.find('Button').length).toEqual(1)
    })
})