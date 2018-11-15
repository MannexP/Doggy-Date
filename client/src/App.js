import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import DogPage from './components/DogPage'
import DogsPage from './components/DogsPage'
import DatePage from './components/DatePage'
import NavBar from './components/NavBar'
// import { createGlobalStyle } from 'styled-components'


class App extends Component {
  render() {
    return (
      // <Router>
        <div>
          {/* <Global />
          <NavBar />
          <Switch>
            <Route exact path="/dogs" component={DogPage}/>
            <Route exact path="/dogs/:dogId" component={IdeaPage}/>
            <Route path="/" component={HomePage}/>
          </Switch> */}
        </div>
      // </Router>
    );
  }
}

export default App;
