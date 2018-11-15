import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class Dogs extends Component {
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
        let dogs = this.state.dogs.map((dog,i) => (
            <div key={i}>
                <Link to={`/dogs/${dog._id}`}>{dog.name}</Link>
                {/* console.log(dogs) */}

            </div>
        ))
        return (
            <div>

                <h3>All Dogs: </h3>
                {dogs}
                

            </div>
        );
    }
}

export default Dogs;