import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const IdeaStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 200px;
  height: 200px;
  background: #f1faee;
  margin: 10px 0;
  button {
    position: absolute;
    top: 5px;
    right: 10px;
  }

  input,
  textarea {
    background-color: transparent;
    border: none;
  }

  input {
    height: 30%;
    font-size: 1.3rem;
  }
  textarea {
    height: 70%;
  }
`
const NewIdeaButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
`
const IdeasContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`
class DatesPage extends Component {
  state = {
    dog: {},
    dates: []
  }
  componentDidMount() {
    const dogId = this.props.match.params.dogId
    axios.get(`/api/dogs/${dogId}`).then(res => {

      this.setState({
        dog: res.data,
        dates: res.data.dates
      })
    })
  }
  handleCreateNewDate = () => {
    const dogId = this.props.match.params.dogId
    const datesId = this.props.match.params.datesId
    const payload = {  
      date: "Date",
      duration:"Time",
      location: "Location",
    }
    axios.post(`/api/dogs/${dogId}/dates`, payload).then(res => {
      const newDate = res.data
    
      const newStateDates = [...this.state.dates, newDate]
      this.setState({ dates: newStateDates })

    })
  }
  handleDelete = dateId => {
    axios.delete(`/api/date/${dateId}`).then(() => {
      const newDates = [...this.state.dates]
      const filtered = newDates.filter(date => {
        return date._id !== dateId 
      })
      this.setState({dates: filtered})
    })
  }
  handleChange = (event, dateId) => {
    const { value, name } = event.target
    const newDates = [...this.state.dates]
    const updatedVals = newDates.map(date => {
      if (date._id === dateId){
        date[name] = value
      }
      return date
    }) 
    this.setState({dates: updatedVals})
  }
  handleUpdate = (dateId) => {
    const dateToUpdate = this.state.dates.find(date => {
      return date._id === dateId
    })
    axios.patch(`/api/date/${dateId}`, dateToUpdate).then(() => {
      console.log("Updated Date")  
    })
  }
  render() {
    return (
      <div>
          
        <h1>{this.state.dog.name}'s Available Dates</h1>
        <NewIdeaButton onClick={this.handleCreateNewDate}>
        Post A Date
        </NewIdeaButton>
        <IdeasContainerStyle>
          {this.state.dates.map(date => {
             
            const deleteDate = () => {
              return this.handleDelete(date._id)
            }
            return (
              <IdeaStyles>
                <input 
                  onBlur={() => this.handleUpdate(date._id)}
                  onChange={(event) => this.handleChange(event,date._id)} 
                  type="text" name="title" 
                  value={date.title} 
                />
                <textarea 
                  onBlur={() => this.handleUpdate(date._id)}
                  onChange={(event) => this.handleChange(event, date._id)} 
                  name="date" 
                  value={date.date} 
                />
                <button onClick={deleteDate}>X</button>
              </IdeaStyles>
            )
          })}
        </IdeasContainerStyle>
      </div>
    )
  }
}

export default DatesPage