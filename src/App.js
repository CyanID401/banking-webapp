import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Routes from './components/Routes'
import Navigation from './components/Navigation'
import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <Router>
		<div className="App">
      <Container>
        <Navigation />
        <Routes />
      </Container>
		</div>
    </Router>
  );
}



export default App;
