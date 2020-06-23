import React from 'react'
import SelectList from './SelectList'
import Select from 'react-select'
import Label from './Label'
import { shallow } from 'enzyme'

const renderComp = (props={}) => {
    return shallow(<SelectList {...props} />)
}

describe('SelectList', () => {

    describe('Without Props', () => {
        let wrap
        beforeEach(() => {
            wrap = renderComp()
        })
    
        it('should only have Select element', () => {
            expect(wrap.containsMatchingElement(<Select />)).toEqual(true)
            expect(wrap.containsMatchingElement(<Label />)).toEqual(false)
        })
         
        it('should not have default value set', () => {
            expect(wrap
                .find('StateManager')
                .prop('defaultValue'))
                .toEqual(null)
        })
    })

    describe('With Props', () => {
        let wrap
        beforeEach(() => {
            const props = {
                elements: [ 
                    {id:0, name: 'list'}, 
                    {id:1, name:'items'}
                ],
                label: 'some label', 
                defaultVal: 'set value'
            }
            wrap = renderComp(props)
        })

        it('should have Label element', () => {
            expect(wrap.containsMatchingElement(<Label />)).toEqual(true)
        })

        it('should have default value set', () => {
            expect(wrap
                .find('StateManager')
                .prop('defaultValue'))
                .toEqual('set value')
        })

        it('should have array of object passed as props', () => {
            // enzyme won't execute useEffect :S
        })
    })
})