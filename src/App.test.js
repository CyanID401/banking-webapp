import React from 'react';
import { shallow } from 'enzyme'
import App from './App'
import Routes from './components/Routes'

const renderComp = () => {
  return shallow(<App />)
}

describe('App', () => {

	let wrap
	beforeEach(() => {
		wrap = renderComp()
	})

	it('renders with routes and navigation', () => {
		expect(wrap.find('Navigation').length).toEqual(1)
		expect(wrap.containsMatchingElement(<Routes />)).toEqual(true)
	})
})
