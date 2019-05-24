import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Accountable
        </p>
        <Home />
      </header>
    </div>
  );
}

export default App;