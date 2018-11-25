import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const DogNames = styled.div`
margin-top:50px;
margin-left: 50px;
`

class LogIn extends Component {
    state = {
        dogs: []
    }


    getAllDogs = () => {
            // get all dogs
        axios.get('/api/dogs').then((res) => {
            this.setState({ dogs: res.data })
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount() {
        this.getAllDogs()
    }


    render() {
        let dogs = this.state.dogs.map((dog, i) => (
            <div key={i}>
                <Link to={`/dogs`}>{dog.name}</Link>
             
            </div>
        ))
        return (
            <DogNames>

                <h3>Users: </h3>
                <h5>{dogs}</h5>

            </DogNames>
        );
    }
}

export default LogIn;