import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link 
} from "react-router-dom";
import './App.css'
import Home from './views/Home'
import AccountInfo from './views/AccountInfo'
import AccountManager from './views/AccountManager'
import FundsManager from './views/FundsManager'


const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/" >Banking App</Link>
            </li>
            <li>
              <Link to="/account">Account Information</Link>
            </li>
            <li>
              <Link to="/accounts">Manage Accounts</Link>
            </li>
            <li>
              <Link to="/funds">Manage Funds</Link>
            </li>
          </ul>
        </nav>

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
        </Switch>
      </div>
    </Router>
  );
}



export default App;
