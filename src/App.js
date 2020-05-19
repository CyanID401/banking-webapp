import React from 'react'
import './App.css'
import AccInfo from './components/AccInfo'
import UserInfo from './components/UserInfo'

const App = () => {
  return (
    <div className="App">
      <nav>
        <a>Banking App</a>
        <a href="#">Account</a>
        <a href="#">Add Account</a>
        <a href="#">Remove Account</a>
        <a>Replace this with Bootstrap React Navbar</a>
        <UserInfo />
      </nav>
      <AccInfo />
    </div>
  );
}



export default App;
