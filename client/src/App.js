import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LogIn from './components/LogIn'
import HomePage from './components/HomePage'
import Dogs from './components/Dogs'
import Dog from './components/Dog'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #F6E2CA
  }
`


class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/Signup" component={SignUp} />
            <Route exact path="/dogs" component={Dogs} />
            <Route exact path="/dogs/:dogId" component={Dog} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
