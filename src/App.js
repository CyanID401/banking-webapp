import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Routes from './components/Routes'
import './App.css'



const App = () => {
  return (
    <Router>
		<div className="App">
			<Routes />
		</div>
    </Router>
  );
}



export default App;
