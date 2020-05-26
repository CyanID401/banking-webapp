import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Routes from './components/Routes'
import Navigation from './components/Navigation'
import './App.css'


const App = () => {
  return (
    <Router>
		<div className="App">
      <Navigation />
			<Routes />
		</div>
    </Router>
  );
}



export default App;
