import React, { Component } from 'react'
import axios from 'axios'
// eslint-disable-next-line

import styled from 'styled-components'



const SignUpStyles = styled.div`
  background: #E9E8E8;
  height: 420px;
  width:350px;
  margin-left: 550px;
  margin-top: 200px;
  border:solid .5px 
 
`
const FormStyles = styled.div`
display: flex;
justify-content: center;


`
const SignUpForm = styled.div`
display: flex;
justify-content: flex-start;


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
      <SignUpStyles id="footer-container" className="footerclass">
        <div>
          <SignUpForm>
            <h3>Sign-Up</h3>
          </SignUpForm>
          <FormStyles>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="name"></label>
                <input onChange={this.handleChange} value={this.state.newDog.name} placeholder="Name" type="text" name="name" />
                <label htmlFor="age"></label>
                <input onChange={this.handleChange} value={this.state.newDog.age} placeholder="Age" type="text" name="age" />
              </div>
              <div>
                <label htmlFor="breed"></label>
                <input onChange={this.handleChange} value={this.state.newDog.breed} placeholder="Breed" type="text" name="breed" />
                <label htmlFor="height"></label>
                <input onChange={this.handleChange} value={this.state.newDog.height} placeholder="Height" type="text" name="height" />
              </div>
              <div>
                <label htmlFor="temperment"></label>
                <input onChange={this.handleChange} value={this.state.newDog.temperment} placeholder="Temperment" type="text" name="temperment" />
              </div>
              <div>
                <label htmlFor="Image"></label><br />
                <input onChange={this.handleChange} value={this.state.newDog.image} placeholder="Show Us Your Mug" type="text" name="image" />
              </div>

              <button type="submit">Sign Up</button>
            </form>
          </FormStyles>
        </div>
      </SignUpStyles>

    );
  }
}

export default SignUp;