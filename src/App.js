import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContext } from './context/auth-context'

import Main from './pages'

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const authenticate = (cb) => {
    setAuthenticated(true)
    setTimeout(cb, 100)
  }
  const signout = (cb) => {
    setAuthenticated(false)
    setTimeout(cb, 100)
  }

  const store = {
    isAuthenticated, 
    authenticate,
    signout
  }
  return (
    <div className="App">
      <AuthContext.Provider value={store}>
        <Router>
            <Main/>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;