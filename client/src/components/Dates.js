import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button } from 'react-materialize'

const Dates = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 200px;
  height: 200px;
  background: #fff;
  margin: 10px 0;
  button {
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
  textarea {
    height: 100px;
  }
`
const PostADate = styled.button`
  background: #F6E2CA;
  color: black;
  font-size: 25px;
  padding: 10px 10px;
  border-radius:3px;
  border: 1px;
  display: flex;
  justify-content: center;
  border-radius:5px
`
const DatesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`
const Buttons = styled.div`
display:flex;
justify-content: center;
`
const HeadLine = styled.div`
display:flex;
justify-content: center;
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
    const payload = {
      date: "Date ",
      location: "Location",
      duration: "Member"
   

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
      this.setState({ dates: filtered })
    })
  }
  handleChange = (event, dateId) => {
    const { value, name } = event.target
    const newDates = [...this.state.dates]
    const updatedVals = newDates.map(date => {
      if (date._id === dateId) {
        date[name] = value

      }
      return date
    })
    this.setState({ dates: updatedVals })
  }
  handleUpdate = (dateId) => {
    const dateToUpdate = this.state.dates.find(date => {
      return date._id === dateId
    })
    axios.patch(`/api/dogs/${this.props.match.params.dogId}/date/${dateId}`, dateToUpdate).then(() => {
      console.log("Updated Date")
    })
  }
  render() {
    return (

      <div>
        <HeadLine>
          <h1>{this.state.dog.name}'s Available Dates</h1>
        </HeadLine>

        <Buttons>
          <PostADate onClick={this.handleCreateNewDate}>
          <Button floating large className='red' waves='light' icon='add' />
            Post A Date
        </PostADate>
        </Buttons>

        <DatesContainer>
          {this.state.dates.map(date => {

            const deleteDate = () => {
              return this.handleDelete(date._id)
            }
            return (
              <Dates>
                <textarea
                  onBlur={() => this.handleUpdate(date._id)}
                  onChange={(event) => this.handleChange(event, date._id)}
                  name="date"
                  value={date.date}
                />
                <textarea
                  onBlur={() => this.handleUpdate(date._id)}
                  onChange={(event) => this.handleChange(event, date._id)}
                  name="location"
                  value={date.location}
                />
                <textarea
                  onBlur={() => this.handleUpdate(date._id)}
                  onChange={(event) => this.handleChange(event, date._id)}
                  name="duration"
                  value={date.duration}
                />   
                <textarea
                  onBlur={() => this.handleUpdate(date._id)}
                  onChange={(event) => this.handleChange(event, date._id)}
                  name="member"
                  value={date.member}
                />     
              <button onClick={deleteDate}>Delete</button>
              </Dates>
            )
          })}
        </DatesContainer>
      </div>
    )
  }
}

export default DatesPage