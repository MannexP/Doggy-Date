import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'reactstrap'



const Avatar = styled.div`
margin-left:3rem;
padding-top: 0;


img{
    border-radius: 50%;
    height: 20rem;
    width: 21rem;
    padding-top:0;

}

`
const Profile = styled.div`

margin-left:1000px;
border-style: groove;
max-width: 20rem;
max-height: 20rem;
background-color: rgba(38, 39, 54, 0.5)

`
const Options = styled.div`

width:400px;
margin-left:1000px;
display:flex;
justify-content:space-evenly

h5{
    color: white;
}
`
const WholePage = styled.div`
display: grid;
grid-template-rows:1fr 1fr 1fr;
`



class Dog extends Component {
    state = {
        dog: {},
        showEditForm: false,
        tempDog: {
        }
    }
    componentDidMount() {
        this.dogId = this.props.match.params.dogId
        axios.get(`/api/dogs/${this.dogId}`).then((res) => {
            console.log(this.dogId)
            this.setState({ dog: res.data })
        }).catch((err) => {
            console.log(err)
        })
    }
    componentWillMount() {
        this.fields = [
            "name",
            "age",
            "breed",
            "height",
            "temperment",
            "image"
        ]
    }
    deleteDog = (dogId, history) => {
        axios.delete(`/api/dogs/${dogId}`).then((req, res) => {
            this.setState({ dog: {} })
            history.push('/dogs');
        })
    }
    handleClick = () => {
        if (!this.state.showEditForm) {
            this.setState({
                showEditForm: !this.state.showEditForm
            })
        } else {
            this.setState({
                dog: {
                    dogId: this.dogId,
                    ...this.state.dog,
                    ...this.state.tempDog
                },
                tempDog: {},
                showEditForm: false
            }, () => {
                axios.patch(
                    `/api/dogs/${this.dogId}`,
                    {
                        data: this.state.dog
                    }
                )
            })
        }
    }
    renderForm = (newDog) => {
        return this.state.showEditForm && (
            <input
                type="text"
                value={this.state.tempDog[newDog]}
                onChange={event => {
                    this.setState({
                        tempDog: {
                            ...this.state.tempDog,
                            [newDog]: event.target.value
                        }
                    })
                }}
            />
        )
    }
    renderFields = () => {
        return this.fields.map((name) => {
            if (name === "image") {
                return (
                    <div>
                        <Avatar>
                            <img src={this.state.dog[name]} alt="" />
                            <div>
                                {this.renderForm(name)}
                            </div>
                        </Avatar>
                    </div>

                )
            }
            return (
                <div>
                    <Profile>
                        <h4>{name.toUpperCase()}: {this.state.dog[name]}</h4>
                        {this.renderForm(name)}
                    </Profile>
                </div>

            )
        })
    }
    render() {
        return (

            <WholePage>
                <Route
                    render={({ history }) => {
                        return (
                            <div>
                                {this.renderFields()}
                                <Options>
                                  
                                    
                                    <Button color="danger" onClick={() => this.deleteDog(this.dogId, history)}><h5>Delete</h5></Button>
                                    <Button color="secondary" onClick={this.handleClick}>
                                       {this.state.showEditForm ? <h5>Done</h5> : <h5>'Edit'</h5>}
                                    </Button >
                                    <Button color="secondary"><Link to={`/dogs/${this.dogId}/dates`}><h5>Dates</h5></Link> </Button>
                                </Options>
                            </div>
                        );
                    }}
                />
            </WholePage>
        );
    }
}

export default Dog;