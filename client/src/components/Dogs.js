import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Card, CardTitle } from 'react-materialize'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const CardStyle = styled.div
`
max-width:300px;

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
        let dogs = this.state.dogs.map((dog) => (

            <div>
                <div key={dog._id}>
                    <CardStyle>
                        <Card header={<CardTitle reveal image={dog.image} waves='light' />}
                            title={dog.name}
                            reveal={dog.age}>
                            <Link to={`/dogs/${dog._id}`}>More About {dog.name}</Link>
                        </Card>
                    </CardStyle>
                </div>
            </div>


        ))
        return (
            <div>

                {dogs}




            </div>
        );
    }
}

export default Dogs;