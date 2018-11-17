import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class SignUp extends Component {
    state = {
      dogs: [],
      newDog: {
        username: '',
        password: ''
      }
    }
  
    handleChange = (event) => {
      console.log('name', event.target.name)
      console.log('value', event.target.value)
      const updatedNewDog = {...this.state.newDog}
      updatedNewDog[event.target.name] = event.target.value
      this.setState({newDog: updatedNewDog})
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
      axios.post('/api/dogs', this.state.newDog).then(res => {
       
        console.log(res.data)
        this.props.history.push(`/dogs/${res.data._id}`)
      })
      
    }
  
  
  
    render() {
      return (
        <div>   
          
          { this.state.dogs.map((dog) => (
            <div key={dog._id}>
              <Link to={`/dogs/${dog._id}`}>{dog.name}</Link>
            </div>
          )) }
  
          <h3>Sign-Up</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Dog's Name: </label>
              <input onChange={this.handleChange} value={this.state.newDog.name} type="text" name="username"/>
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input onChange={this.handleChange} value={this.state.newDog.password} type="password" name="password"/>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    }
  }

export default SignUp;