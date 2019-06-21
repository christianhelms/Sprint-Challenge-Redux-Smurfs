import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import SmurfsList from './SmurfsList'
import AddSmurf from "./AddSmurf";
import Nav from './Nav'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1>SMURFS!...But With Redux</h1>
        <Route path="/AddSmurf" component={AddSmurf} />
        <Route exact path = "/" component = {SmurfsList} />
      </div>  
    );
  }
}

export default App;
