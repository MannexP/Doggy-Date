const Dog = require('../models/Dog')
const Date = require('../models/Date')

const dateController = {
    index: (req, res) => {
      let dogId = req.params.dogId
      Dog.findById(dogId).populate('dates')
        .then((dogs) => {
          res.send(dogs.dates)
        })
    },
    show: (req, res) => {
      let dateId = req.params.dateId
      Date.findById(dateId)
        .then((date) => {
          res.send(date)
        })
    },
    delete: (req, res) => {
      let dateId = req.params.dateId
      Date.findByIdAndDelete(dateId)
        .then(() => {
          res.sendStatus(200)
        })
    },
    update: (req, res) => {
      let dateId = req.params.dateId
      Date.findByIdAndUpdate(dateId, req.body, { new: true })
        .then((updatedDate) => {
          updatedDate.save()
          res.send(updatedDate)
        })
    },
    create: (req, res) => {
      let dogId = req.params.dogId
      Dog.findById(dogId)
        .then((dogs) => {
          Date.create(req.body)
            .then((newDate) => {
              console.log(newDate)
              dogs.dates.push(newDate)
              dogs.save()
              res.send(newDate)
            })
        })
    }
  
  }
  
  module.exports = dateController
  