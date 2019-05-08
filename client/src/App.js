import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogIn from './components/LogIn';
import HomePage from './components/HomePage';
import Dogs from './components/Dogs';
import Dog from './components/Dog';
import SignUp from './components/SignUp';
import Dates from './components/Dates';
import Footer from './components/Footer'





class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/Signup" component={SignUp} />
            <Route exact path="/dogs" component={Dogs} />
            <Route exact path="/dogs/:dogId" component={Dog} />
            <Route exact path="/dogs/:dogId/dates" component={Dates} />
            <Route path="/" component={HomePage} />
          </Switch>
       
        </div>
      </Router>
    );
  }
}

export default App;
