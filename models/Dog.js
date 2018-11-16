const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Dog = new Schema({
    name: String,
    age: String,
    breed: String,
    height: String,
    temperment: String,
    hypoallergenic: String,
    image: String,
    dates: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Date'
        }
    ]
})

module.exports = mongoose.model('Dog', Dog)