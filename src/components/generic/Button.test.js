import React from 'react'
import Button from './Button'
import { Spinner } from 'react-bootstrap'
import { shallow } from 'enzyme'

const renderComp = (props={}) => {
    return shallow(<Button {...props} />)
}

describe('Button', () => {

    describe('Without Props', () => {
        let wrap
        beforeEach(() => {
            wrap = renderComp()
        })
    
        it('should have default classname', () => {
            expect(wrap.hasClass('btn btn-primary')).toEqual(true)
        })    
    })

    describe('With Props', () => {
        let wrap
        beforeEach(() => {
            const props = {
                className: 'custom-class', 
                isLoading: true,
                text: 'button text'
            }
            wrap = renderComp(props)
        })

        it('should have custom classname', () => {
            expect(wrap.hasClass('custom-class')).toEqual(true)
        })
    
        it('should have text', () => {
            expect(wrap.text().includes('button text')).toEqual(true)
        })
    
        it('should render spinner', () => {
            expect(wrap.containsMatchingElement(<Spinner />)).toEqual(true)
        })
    
        it('should be disabled when loading', () => {
            expect(wrap.prop('disabled')).toEqual(true)
        })
    })
})