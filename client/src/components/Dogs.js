import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'




const ProfileCards =styled.div`
display: flex;
justify-content:align;

`


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
        let dogs = this.state.dogs.map((dog, i) => (
            <ProfileCards>
                <div key={i}>
                    <Link to={`/dogs/${dog._id}`}>{dog.name}</Link>
                </div>
                <div>
                    <img src={dog.image} alt="" />
                </div>
            </ProfileCards>

        ))
        return (
            <div>

                <h1>DOGS PAGE </h1>

                {dogs}

            </div>
        );
    }
}

export default Dogs;