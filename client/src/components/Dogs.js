import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Card, CardTitle } from 'react-materialize'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const CardStyle = styled.div` 
.card {
    width:25rem;
    max-width:40rem; 
    background: #8588A1; 
    height: 35rem;
   h4, h3{
       color: white;
   }
   p{
       color:white;
       font-size: 1rem;
   }
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
                    <Card className='small' header={<CardTitle image={dog.image}></CardTitle>}
                        actions={[<Link to={`/dogs/${dog._id}`}><p>More About {dog.name}</p></Link>]}>
                        <h4>{dog.name}</h4>
                        <h3>I'm {dog.age}</h3>
                    </Card>
                </CardStyle>
            </div>
        ))
        return (
           
                 <ContainerStyle>
                    {dogs}
                </ContainerStyle>
        
        );
    }
}

export default Dogs;