import React from 'react'
import InputBox from './InputBox'
import Label from './Label'
import { shallow } from 'enzyme'

const renderComp = (props={}) => {
    return shallow(<InputBox {...props} />)
}

describe('InputBox', () => {

    describe('Without Props', () => {
        let wrap
        beforeEach(() => {
            wrap = renderComp()
        })
    
        it('should only have input element', () => {
            const el = wrap.find('input')
            expect(el.length).toBe(1)
            expect(wrap.containsMatchingElement(<Label />)).toEqual(false)
        })
         
        it('should have default input type as text', () => {
            expect(wrap.find('input').prop('type')).toEqual('text')
        })
    })

    describe('With Props', () => {
        let wrap
        beforeEach(() => {
            const props = {
                label: 'testing',  
                type: 'checkbox', 
                name: 'testBox'
            }
            wrap = renderComp(props)
        })

        it('should have Label element', () => {
            expect(wrap.containsMatchingElement(<Label />)).toEqual(true)
        })

        it('should have a custom input type', () => {
            expect(wrap.find('input').prop('type')).toEqual('checkbox')
        })
    
        it('should have custom name', () => {
            expect(wrap.find('input').prop('name')).toEqual('testBox')
        })
    })
})