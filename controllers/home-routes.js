// importing needed packages and models to run file
const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Channel, Comment} = require('../models');

// route to render the homepage view .this is view for all visitors to site loggedIn or NOT
// this will show the channels /can be changed to show something else 
// not sure exactly what we want here 
router.get('/', (req,res) => {
   
    // idk what to put here i was going to put channel but theres no channel_name, 
    // this needs to be determined 
    res.render('homepage');
});

module.exports = router;