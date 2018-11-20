import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Card, CardTitle } from 'react-materialize'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const CardStyle = styled.div
 `
.card {
    width:300px;
    max-width:300px;  
}
`
const ContainerStyle = styled.div
`
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
            <ContainerStyle>
                 <div key={dog._id}>
                    <CardStyle>                  
                        <Card className='small' header={<CardTitle image={dog.image}>{dog.name}</CardTitle>}
                            actions={[<Link to={`/dogs/${dog._id}`}>More About {dog.name}</Link>]}>
                           {dog.temperment}
                        </Card>
                    </CardStyle>
                </div>
            </ContainerStyle>
        ))
        return (
            <div>

                {dogs}




            </div>
        );
    }
}

export default Dogs;