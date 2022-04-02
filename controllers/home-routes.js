// importing needed packages and models to run file
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Channel, Comment } = require('../models');

// route to render the homepage view .this is view for all visitors to site loggedIn or NOT
// this will show the channels /can be changed to show something else 
// not sure exactly what we want here 
router.get('/', (req, res) => {

    // idk what to put here i was going to put channel but theres no channel_name, 
    // this needs to be determined 
    res.render('homepage');
});

// find one post , when user clicks on a single post ** as of 10 am april 1 not working
router.get('/post/:id', (req,res) => {
    Post.findOne({
        where:{
            id:req.params.id
        },
        attributes:[
            'id',
            'title',
            'post_body',
            'created_at'

        ],
        include: [
            {
            model:Comment,
            attributes:[
                'id',
                'comment_text',
                'user_id',
                'post_id'
           ],
             include: {
                 model:User,
                 attributes:['username']
             }
            },
            {
                model:User,
                attributes:['username']
       
        }]
    })
    .then(postData =>{
        if(!postData) {
            res.status(404).json({message:"no post found with this id"});
            return;
        }
        // serialzie the post data 
        const post = postData.get({plain:true});

        // pass data to template 
        res.render('single-post',{
            post
        // loggedIn:req.session.loggedIn
        } );
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// login route to renderlogin.handlebars
router.get('/login', (req,res) => {
    // check for login and return to homepage if logged in
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
})

module.exports = router;