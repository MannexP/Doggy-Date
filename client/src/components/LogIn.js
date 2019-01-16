import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import mainTheme2 from '../images/dogsPlay2.jpg';



const MainTheme2 = styled.div`
  position: relative;
  display:flex;
  flex-wrap:wrap;
  flex-direction: column;

  .text-block {
  position: absolute;
  top: 5rem;
  margin-left: 3rem;
  /* right: 20px; */
  background-color: black;
  opacity: .5;
  border-radius: 2%;
  color: white;
  padding: 1rem;
 
 
  h4{
    font-size: 4rem;
    color: #0A3501;
}
}

`



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
            <div> 
                <div></div>
                <MainTheme2>
                    <img src={mainTheme2} alt="" />
                    <div className="text-block">
                        <h4>{dogs}</h4>
                    </div>
                </MainTheme2>
            </div>

        );
    }
}

export default LogIn;