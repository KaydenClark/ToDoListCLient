import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navigation/navBar.js'

import Main from './pages'

function App() {

  return (
    <div className="App">
        <NavBar />
        <Router>
            <Main/>
        </Router>
    </div>
  );
}

export default App;