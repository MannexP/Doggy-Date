import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import mainTheme2 from '../images/dogsPlay2.jpg';



const MainTheme2 = styled.div`
  position: relative;

  .text-block {
  height: 8rem;
  width: 94rem;
  position: absolute;
  bottom: 5rem;
  right: 20px;
  background-color: black;
  opacity: .4;
  border-radius: 2%;
  color: white;
  padding-left: 1rem;
 
  
  margin-left: 2rem;
 
}
h4{
    font-size: 5rem;
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
            // <DogNames>

            //     <h3>Users: </h3>
            //     <h5>{dogs}</h5>

            // </DogNames>
            <MainTheme2>
                <img src={mainTheme2} alt="" />
                <div className="text-block">
                    <h4>Nature's best friend needs a best friend too</h4>
                </div>
            </MainTheme2>
        );
    }
}

export default LogIn;