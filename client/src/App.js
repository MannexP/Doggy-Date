import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import HomePage from './components/HomePage'
import Dogs from './components/Dogs'
import Dog from'./components/Dog'
import NavBar from './components/NavBar'




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Route exact path="/dogs" component={Dogs}/>
            <Route exact path="/dogs/:dogId" component={Dog}/>
            <Route path="/" component={HomePage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
