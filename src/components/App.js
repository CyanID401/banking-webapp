import React, { useEffect } from 'react'
import './App.css'
import AccInfo from './AccInfo'
import fetchData from '../API'

const App = () => {
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <nav>
        <a>Banking App</a>
        <a href="#">Account</a>
        <a href="#">Add Account</a>
        <a href="#">Remove Account</a>
        <a>Replace this with Bootstrap React Navbar</a>
      </nav>
      <AccInfo />
    </div>
  );
}

export default App;
