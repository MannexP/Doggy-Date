import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class LogIn extends Component {
    state = {
        dogs: []
    }

    getAllDogs = () => {
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
                {/* <img src={dog.image} alt="" /> */}
            </div>
        ))
        return (
            <div>

                <h3>Users: </h3>
                {dogs}

            </div>
        );
    }
}

export default LogIn;