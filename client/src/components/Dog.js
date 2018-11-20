import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom';


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

    renderForm = (banana) => {
        return this.state.showEditForm && (
            <input
                type="text"
                value={this.state.tempDog[banana]}
                onChange={event => {
                    this.setState({
                        tempDog: {
                            ...this.state.tempDog,
                            [banana]: event.target.value
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
                        <img src={this.state.dog[name]} alt="" />
                        <div>
                            {this.renderForm(name)}
                        </div>
                    </div>
                )
            }
            return (
                <div>
                    <h4>{name.toUpperCase()}: {this.state.dog[name]}</h4>
                    {this.renderForm(name)}
                </div>
            )
        })
    }
    render() {
        return (
            <Route
                render={({ history }) => {
                    return (
                        <div>                         
                                {this.renderFields()}                      
                            <button onClick={() => this.deleteDog(this.dogId, history)}>Delete</button>
                            <button onClick={this.handleClick}>
                                {this.state.showEditForm ? 'Done' : 'Edit'}
                            </button>
                            <button><Link to={`/dogs/${this.dogId}/dates`}>Available Dates</Link> </button>
                        </div>
                    );
                }}
            />
        );
    }
}

export default Dog;