require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Dog = require('../models/Dog')
const Date = require('../models/Date')

const date1 = new Date({
    date: 'November 3, 2020',
    location: 'Old Fourth Ward',
    duration: '45mins'
})
const date2 = new Date({
    date: 'November 5, 2020',
    location: 'Decatur',
    duration: '45mins'
})
const date3 = new Date({
    date: 'November 5, 2020',
    location: 'East Atlanta',
    duration: '45mins'
})
const fido = new Dog({
    name: 'Fido',
    age: '3',
    breed: "Bulldog",
    height: '20in',
    temperment: 'friendly',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/CH_Buck_and_Sons_Evita_Peron.jpg/220px-CH_Buck_and_Sons_Evita_Peron.jpg",
    dates: [date2]
})
const chichi = new Dog({
    name: 'Chichi',
    age: '3',
    breed: "Chihuahua",
    height: '20in',
    temperment: 'friendly',
    image: "https://animalso.com/wp-content/uploads/2017/01/Chihuahua_8.jpg",
    dates: [date1]
})
const poochie = new Dog({
    name: 'Poochie',
    age: '3',
    breed: "Pomeranian",
    height: '10in',
    temperment: 'friendly',  
    image: "https://www.listland.com/wp-content/uploads/2016/04/Pomeranians-love-to-be-dressed-by-their-owners.-No-it-doesnt-mean-youre-weird.-Im-sure-you-could-have-a-boyfriend-and-a-steady-job-if-you-really-wanted-one..jpg",
    dates: [date3]
})
const loochie = new Dog({
    name: 'Loochie',
    age: '3',
    breed: "Pomeranian",
    height: '10in',
    temperment: 'friendly',  
    image: "https://media1.popsugar-assets.com/files/thumbor/Vj0QWI2J_x9LDaAanngVZInwYCc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2011/02/05/2/192/1922243/9635b65b632d20ba_Screen_shot_2011-02-01_at_7.13.39_PM/i/Yum-I-Love-Bacon.png",
    dates: [date2]
})
const rocky = new Dog({
    name: 'Rocky',
    age: '3',
    breed: "Pomeranian",
    height: '10in',
    temperment: 'friendly',
    image: "https://ermigal.files.wordpress.com/2017/03/mean-pomeranian.jpg",
    dates: [date1]
})
Dog.deleteMany({})
    .then(() => Date.deleteMany({}))
    .then(() => Date.insertMany([date1, date2, date3]))
    .then(() => rocky.save())
    .then(() => loochie.save())
    .then(() => poochie.save())
    .then(() => chichi.save())
    .then(() => fido.save())
    .then(() => console.log('Database seeded success'))
    .then(() => mongoose.connection.close())