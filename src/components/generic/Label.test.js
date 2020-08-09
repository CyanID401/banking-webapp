import React from 'react'
import Label from './Label'
import { shallow } from 'enzyme'

const renderComp = (props={}) => {
    return shallow(<Label {...props} />)
}

describe('Label', () => {

    describe('Without Props', () => {
        let wrap
        beforeEach(() => {
            wrap = renderComp()
        })
    
        it('should not render', () => {
            expect(wrap.containsMatchingElement(<label />)).toEqual(false)
        })
    })

    describe('With Props', () => {
        let wrap
        beforeEach(() => {
            const props = {
                className: 'custom-class', 
                text: 'label text'
            }
            wrap = renderComp(props)
        })

        it('should render', () => {
            const el = wrap.find('label')
            expect(el.length).toBe(1)
        })

        it('should have custom classname', () => {
            expect(wrap
                .children()
                .first()
                .hasClass('custom-class'))
                .toEqual(true)
        })
    
        it('should have text', () => {
            expect(wrap.text().includes('label text')).toEqual(true)
        })
    })
})