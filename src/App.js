import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route } from "react-router-dom";
import './App.css'
import Navigation from './components/Navigation'
import Home from './views/Home'
import AccountInfo from './views/AccountInfo'
import AccountManager from './views/AccountManager'
import FundsManager from './views/FundsManager'
import NotFound from './views/NotFound';


const App = () => {
  return (
    <Router>
      <div className="App">
		<Navigation />
        <Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/account">
				<AccountInfo />
			</Route>
			<Route path="/accounts">
				<AccountManager />
			</Route>
			<Route path="/funds">
				<FundsManager />
			</Route>
			<Route path="*"> 
				<NotFound />
			</Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
