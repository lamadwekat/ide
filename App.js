import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar';

import Ask from './component/ask';
import Code from './component/code';
import Profile from './component/profile'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
  < Navbar />
        
         <Switch>
<Route exact path ="/Ask" component = {Ask} />
<Route exact path ="/Code" component = {Code} />
<Route exact path ="/Profile" component = {Profile} />
</Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
