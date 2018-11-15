import React, { Component } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import { createGlobalStyle } from 'styled-components'

// import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import DogsPage from './components/DogsPage'
import DogPage from './components/DogPage'





class App
 extends Component {
    render() {
        return (
            <Router>
            <div>
            
              <NavBar />
              <Switch>
                {/* <Route exact path="/login" component={LogInPage}/> */}
                <Route exact path="/dogs/:dogId" component={DogPage}/>
                {/* <Route path="/" component={HomePage}/> */}
              </Switch>
            </div>
          </Router>
        );
    }
}

export default App
;