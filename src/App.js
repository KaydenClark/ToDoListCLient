import React from 'react';
import './App.css';
import NavBar from './navBar'


export default class App extends React.Component {

  state = {
      data: []
    };
    
    render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    ); //return
  } //render
} //App
