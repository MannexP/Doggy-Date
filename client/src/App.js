import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LogIn from './components/LogIn'
import HomePage from './components/HomePage'
import Dogs from './components/Dogs'
import Dog from'./components/Dog'
import NavBar from './components/NavBar'


class App extends Component {
  

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
          <Route exact path="/login" component={LogIn}/>
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
