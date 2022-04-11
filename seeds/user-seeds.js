// importing user table/model from models folder 
const { User } = require('../models');
// creating variable, an array ,  to store user seeds 
const userData = [
{
    username:'Samm',
    email:'samm@email.com',
    password:'password1!',
    user_image_path: '/images/meetsam.jpg'
},
{
    username:'Michael',
    email:'michael@email.com',
    password:'password2!',
    user_image_path: '/images/meetmichael.png'
},
{
    username:'Ulises',
    email:'ulises@email.com',
    password:'password3!',
    user_image_path: '/images/meetulises.jpg'
},
{
    username:'Jim',
    email:'jim@email.com',
    password:'password4!',
    user_image_path: '/images/meetjim.jpg'
}
];

// function to import seeds into the db upon command 'npm run seed'
const seedUsers = () => User.bulkCreate(userData);
// exporting the function that creates and inserts the seeds into db 
module.exports = seedUsers;