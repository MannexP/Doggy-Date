const Dog = require('../models/Dog')
const Date = require('../models/Date')

const dogController = {
    index: (req, res) => {
        Dog.find({})
            .then((dog) => {
                res.send(dog)
            })
    },
    show: (req, res) => {
        Dog.findById(req.params.dogId).populate('dates')
            .then((dog) => {
                res.send(dog)
            })
    },
    update: (req, res) => {
        Dog.findByIdAndUpdate(req.params.dogId, req.body)
            .then((updatedDog) => {
                updatedDog.save()
                res.send(updatedDog)
            })
    },
    delete: (req, res) => {
        Dog.findByIdAndDelete(req.params.dogId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Dog.create(req.body)
            .then((dog) => {
                res.send(dog)
            })
    }
}

module.exports = dogController