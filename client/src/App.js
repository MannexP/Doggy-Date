import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogIn from './components/LogIn'
import HomePage from './components/HomePage'
import Dogs from './components/Dogs'
import Dog from './components/Dog'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import { createGlobalStyle } from 'styled-components'
import Dates from './components/Dates'

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Allerta Stencil', sans-serif;
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
            <Route exact path="/dogs/:dogId/dates" component={Dates} />
            <Route path="/" component={HomePage} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
