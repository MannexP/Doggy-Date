import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import mainTheme2 from '../images/heroTheme.jpg';


const FormStyles = styled.div`
background: #f4f7f8;
opacity:0.5;
width:35vw;
height:70vh;
margin-top:10rem;
border-radius:10px;
`

const ButtonStyles = styled.div`
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
    margin-left: 300px;
    margin-top: 50px;
}
`

const Container = styled.div`
background: #ffffff;
height:100vh;
display:flex;
justify-content:center;
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
      <Container>
        <FormStyles>
          <form onSubmit={this.handleSubmit}>           
              <h1>Create Account</h1>
              <div className="text-block">
                <label htmlFor="name">Name </label>
                <input onChange={this.handleChange} value={this.state.newDog.name} type="text" name="name" />
              </div>
              <div className="text-block">
                <label htmlFor="age">Age </label>
                <input onChange={this.handleChange} value={this.state.newDog.age} type="text" name="age" />
              </div>
              <div className="text-block">
                <label htmlFor="breed">Breed </label>
                <input onChange={this.handleChange} value={this.state.newDog.breed} type="text" name="breed" />
              </div>
              <div className="text-block">
                <label htmlFor="height">Height </label>
                <input onChange={this.handleChange} value={this.state.newDog.height} type="text" name="height" />
              </div>
              <div className="text-block">
                <label htmlFor="temperment">Temperment </label>
                <input onChange={this.handleChange} value={this.state.newDog.temperment} type="text" name="temperment" />
              </div>
              <div className="text-block">
                <label htmlFor="hypoallergenic">Hypoallergenic </label>
                <input onChange={this.handleChange} value={this.state.newDog.hypoallergenic} type="text" name="hypoallergenic" />
              </div>
              <div className="text-block">
                <label htmlFor="image">Picture </label>
                <input onChange={this.handleChange} value={this.state.newDog.image} type="text" name="image" />
              </div> 
              <ButtonStyles>
                <button className="text-button" type="submit">Sign Up</button>
              </ButtonStyles>
            </form>
        </FormStyles>
      </Container>

    );
  }
}
export default SignUp;