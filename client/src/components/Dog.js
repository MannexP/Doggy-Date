import React, { Component } from 'react'
import axios from 'axios'


class Dog extends Component {
    state = {
        dog: {}
    }
    componentDidMount() {
        const dogId = this.props.match.params.dogId
        axios.get(`/api/dogs/${dogId}`).then((res) => {
            console.log(res.data)
            this.setState({ dog: res.data })
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {


        return (
            <div>

                <h1>Name:{this.state.dog.name}</h1>
                <h2>Age:{this.state.dog.age}</h2>
                <h2>Breed:{this.state.dog.breed}</h2>
                <h2>Height:{this.state.dog.height}</h2>
                <h2>Temperment:{this.state.dog.temperment}</h2>
                <h2>Hypoallergenic:{this.state.dog.hypoallergenic}</h2>
                <img src={this.state.dog.image} alt="d" />

            </div>



        );
    }
}

export default Dog;