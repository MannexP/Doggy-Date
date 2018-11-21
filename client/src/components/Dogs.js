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
const ContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin:100px;
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
            <div key={i}>
                <CardStyle>
                    <Card className='small' header={<CardTitle image={dog.image}>{dog.name}</CardTitle>}
                        actions={[<Link to={`/dogs/${dog._id}`}>More About {dog.name}</Link>]}>
                        I'm {dog.age}
                    </Card>
                </CardStyle>
            </div>
        ))
        return (
            <div>
                <ContainerStyle>
                    {dogs}
                </ContainerStyle>




            </div>
        );
    }
}

export default Dogs;