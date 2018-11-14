const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Date = new Schema({
    date: String,
    location: String,
    duration:String,
    
})

module.exports = mongoose.model('Date', Date)