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
const ralph = new Dog({
    name: 'Ralph',
    age: '5',
    breed: "Terrier",
    height: '10in',
    temperment: '',
    image: "https://www.petguide.com/wp-content/uploads/2018/03/sco-shi.jpg",
    dates: [date2]
})
const coco = new Dog({
    name: 'Coco',
    age: '5',
    breed: "Shitszu",
    height: '10in',
    temperment: '',
    image: "https://cdn2-www.dogtime.com/assets/uploads/gallery/shih-tzu-dog-breed-pictures/shih-tzu-breed-picture-1.jpg",
    dates: [date2]
})
const comet = new Dog({
    name: 'Comet',
    age: '5',
    breed: "Labrador",
    height: '40in',
    temperment: '',
    image: "https://static1.squarespace.com/static/573b62e9746fb941c1458dcd/t/58bf1f27d1758e5d0c580379/1488921550603/who-we-are.jpg",
    dates: [date2]
})
const teddy = new Dog({
    name: 'Teddy',
    age: '5',
    breed: "Husky",
    height: '40in',
    temperment: 'Hunter',
    image: "http://www.dogbehaviors.net/wp-content/uploads/2014/11/husky-dog-behaviors.jpg",
    dates: [date2]
})
const billy = new Dog({
    name: 'Billy',
    age: '3',
    breed: "French Bulldog",
    height: '40in',
    temperment: 'Lazy',
    image: "https://i.ytimg.com/vi/405AYHnSTnU/maxresdefault.jpg",
    dates: [date2]
})
const yoni = new Dog({
    name: 'Yoni',
    age: '1',
    breed: "Rotweilder",
    height: '20in',
    temperment: 'Friendly',
    image: "https://media2.fdncms.com/clevescene/imager/u/original/15064997/rottweiler-head.jpg",
    dates: [date2]
})
const noli = new Dog({
    name: 'Noli',
    age: '1',
    breed: "Corgi",
    height: '20in',
    temperment: 'Friendly',
    image: "https://www.thesprucepets.com/thmb/KEkwV1YeL3obCMo0YSPDXTCxjRA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/19933184_104417643500613_5541725731421159424_n-5ba0548546e0fb0050edecc0.jpg",
    dates: [date2]
})
const fido = new Dog({
    name: 'Fido',
    age: '2',
    breed: "Bulldog",
    height: '20in',
    temperment: 'Friendly',
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/CH_Buck_and_Sons_Evita_Peron.jpg/220px-CH_Buck_and_Sons_Evita_Peron.jpg",
    dates: [date2]
})
const chichi = new Dog({
    name: 'Chichi',
    age: '1',
    breed: "Chihuahua",
    height: '20in',
    temperment: 'Friendly',
    image: "https://animalso.com/wp-content/uploads/2017/01/Chihuahua_8.jpg",
    dates: [date1]
})
const poochie = new Dog({
    name: 'Poochie',
    age: '5',
    breed: "Pomeranian",
    height: '10in',
    temperment: 'Friendly',  
    image: "https://www.listland.com/wp-content/uploads/2016/04/Pomeranians-love-to-be-dressed-by-their-owners.-No-it-doesnt-mean-youre-weird.-Im-sure-you-could-have-a-boyfriend-and-a-steady-job-if-you-really-wanted-one..jpg",
    dates: [date3]
})
const loochie = new Dog({
    name: 'Loochie',
    age: '3',
    breed: "Pomeranian",
    height: '10in',
    temperment: 'Friendly',  
    image: "https://media1.popsugar-assets.com/files/thumbor/Vj0QWI2J_x9LDaAanngVZInwYCc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2011/02/05/2/192/1922243/9635b65b632d20ba_Screen_shot_2011-02-01_at_7.13.39_PM/i/Yum-I-Love-Bacon.png",
    dates: [date2]
})
const rocky = new Dog({
    name: 'Rocky',
    age: '3',
    breed: "Pitbull",
    height: '24in',
    temperment: 'Friendly',
    image: "https://getyourpet.com/wp-content/uploads/2018/09/pitbull-in-la-yard.jpg",
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
    .then(() => noli.save())
    .then(() => yoni.save())
    .then(() => billy.save())
    .then(() => teddy.save())
    .then(() => comet.save())
    .then(() => coco.save())
    .then(() => ralph.save())
    .then(() => console.log('Database seeded success'))
    .then(() => mongoose.connection.close())