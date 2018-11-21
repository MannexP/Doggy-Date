import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
// import DogPrint from "../Images/NewPaw.png"



const FormStyles = styled.div`
display: flex;
justify-content: center
max-width: 300px;
margin: 10px;
padding: 10px;
background: #f4f7f8;
border-radius: 8px;
margin-left: 550px;
margin-top: 50px;
border-style: groove;
`
const ButtonStyles = styled.div
  `
  button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 5px 37px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 3px;
}
`


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
    const updatedNewDog = { ...this.state.newDog }
    updatedNewDog[event.target.name] = event.target.value
    this.setState({ newDog: updatedNewDog })
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
    

       
        <FormStyles>
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <div>
              <label htmlFor="name">Name </label>
              <input onChange={this.handleChange} value={this.state.newDog.name} type="text" name="name" />
            </div>
            <div>
              <label htmlFor="age">Age </label>
              <input onChange={this.handleChange} value={this.state.newDog.age} type="text" name="age" />
            </div>
            <div>
              <label htmlFor="breed">Breed </label>
              <input onChange={this.handleChange} value={this.state.newDog.breed} type="text" name="breed" />
            </div>
            <div>
              <label htmlFor="height">Height </label>
              <input onChange={this.handleChange} value={this.state.newDog.height} type="text" name="height" />
            </div>
            <div>
              <label htmlFor="temperment">Temperment </label>
              <input onChange={this.handleChange} value={this.state.newDog.temperment} type="text" name="temperment" />
            </div>
            <div>
              <label htmlFor="hypoallergenic">Hypoallergenic </label>
              <input onChange={this.handleChange} value={this.state.newDog.hypoallergenic} type="text" name="hypoallergenic" />
            </div>
            <div>
              <label htmlFor="Image">Picture </label>
              <input onChange={this.handleChange} value={this.state.newDog.image} type="text" name="image" />
            </div> 
            <ButtonStyles>
              <button type="submit">Sign Up</button>
            </ButtonStyles>
          </form>
        </FormStyles>
      </div>
    );
  }
}
export default SignUp;