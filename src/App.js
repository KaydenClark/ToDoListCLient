import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navi/navBar.js'
import { Routes } from './components/navi/Routes'

function App() {

  return (
    <div className="App">
        <NavBar />
        <Router>
          <Routes/>
        </Router>
    </div>
  );
}

export default App;