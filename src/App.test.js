import React from 'react';
import { shallow } from 'enzyme'
import App from './App'
import Routes from './components/Routes'
import Navigation from './components/Navigation';

const renderComp = () => {
  return shallow(<App />)
}

describe('App', () => {

	let wrap
	beforeEach(() => {
		wrap = renderComp()
	})

	it('renders with routes and navigation', () => {
		expect(wrap.containsMatchingElement(<Navigation />)).toEqual(true)
		expect(wrap.containsMatchingElement(<Routes />)).toEqual(true)
	})
})
