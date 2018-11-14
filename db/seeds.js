require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Dog = require('../models/Dog')
const Date = require('../models/Date')

const mars = new Date({
  title: 'Fly to Mars',
  description: "Earth isn't Red enough. Let's move to a new planet"
})

const tesla = new Date({
  title: 'Build a Car',
  description: "Gas is too expensive. I'm gonna build a car that doesn't need gas"
})

const fido = new Dog({
  name: 'Fido',
  age: '3',
  breed: "Bulldog",
  height:'20in',
  temperment:'friendly',
  hypoalergenic:'no',
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/CH_Buck_and_Sons_Evita_Peron.jpg/220px-CH_Buck_and_Sons_Evita_Peron.jpg"
})

const chichi = new Dog({
    name: 'Chichi',
    age: '3',
    breed: "Chihuahua",
    height:'20in',
    temperment:'friendly',
    hypoalergenic:'no',
    image:"https://animalso.com/wp-content/uploads/2017/01/Chihuahua_8.jpg"
  })

  const poochie = new Dog({
    name: 'Poochie',
    age: '3',
    breed: "Pomeranian",
    height:'10in',
    temperment:'friendly',
    hypoalergenic:'yes',
    image:"https://www.listland.com/wp-content/uploads/2016/04/Pomeranians-love-to-be-dressed-by-their-owners.-No-it-doesnt-mean-youre-weird.-Im-sure-you-could-have-a-boyfriend-and-a-steady-job-if-you-really-wanted-one..jpg"
  })
  const loochie  = new Dog({
    name: 'Loochie',
    age: '3',
    breed: "Pomeranian",
    height:'10in',
    temperment:'friendly',
    hypoalergenic:'yes',
    image:"https://media1.popsugar-assets.com/files/thumbor/Vj0QWI2J_x9LDaAanngVZInwYCc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2011/02/05/2/192/1922243/9635b65b632d20ba_Screen_shot_2011-02-01_at_7.13.39_PM/i/Yum-I-Love-Bacon.png"
  })


// User.remove({})
// .then(() => date.remove())

// .then(() => elon.save())

//   .then(() => console.log('Successful Save'))
//   .then(() => mongoose.connection.close())