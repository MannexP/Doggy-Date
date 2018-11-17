import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class SignUp extends Component {
    state = {
      dogs: [],
      newDog: {
        name: '',
        age: '',
        breed: '',
        height: '',
        temperment: '',
        hypoallergenic: '',
        image: '',
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
              <label htmlFor="name">Name: </label>
              <input onChange={this.handleChange} value={this.state.newDog.name} type="text" name="username"/>
            </div>
            <div>
              <label htmlFor="age">Age: </label>
              <input onChange={this.handleChange} value={this.state.newDog.age} type="text" name="age"/>
            </div>
            <div>
              <label htmlFor="breed">Breed: </label>
              <input onChange={this.handleChange} value={this.state.newDog.breed} type="text" name="breed"/>
            </div>
            <div>
              <label htmlFor="height">Height: </label>
              <input onChange={this.handleChange} value={this.state.newDog.height} type="text" name="height"/>
            </div>
            <div>
              <label htmlFor="temperment">Temperment: </label>
              <input onChange={this.handleChange} value={this.state.newDog.temperment} type="text" name="temperment"/>
            </div>
            <div>
              <label htmlFor="hypoallergenic">Hypoallergenic: </label>
              <input onChange={this.handleChange} value={this.state.newDog.hypoallergenic} type="text" name="hypoallergenic"/>
            </div>
            <div>
              <label htmlFor="Image">Picture: </label>
              <input onChange={this.handleChange} value={this.state.newDog.image} type="text" name="image"/>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
    }
  }

export default SignUp;