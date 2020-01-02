import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'



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
               
           
                  
                    <div className="text-block">
                        <h4>{dogs}</h4>
                    </div>
              
            </div>

        );
    }
}

export default LogIn;