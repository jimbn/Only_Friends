// importing post table/model from models folder 
const { Post } = require('../models');
// creating variable, an array ,  to store user seeds 
const postData = [
// {
//     title: 's',
//     post_body: 's',
//     category_name: 'Fitness',
//     user_id: 1,

// },
{
    title: 'Hello World 1',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_name: 'Gaming', 
    user_id: 1,
    // channel_id: 1
},
{
    title: 'Hello World 2',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_name: 'Gaming', 
    user_id: 1,
    // channel_id: 1
},
{
    title: 'Hello World 3',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_name: 'Gaming', 
    user_id: 0,
    // channel_id: 0
},
{
    title: 'Hello World 4',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_name: 'Gaming', 
    user_id: 0,
    // channel_id: 0
},
{
    title: 'Hello World 5',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_name: 'Gaming', 
    user_id: 1,
    // channel_id: 1
},
{
    title: 'Hello World 6',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_name: 'Gaming', 
    user_id: 3,
    // channel_id: 3
},
{
    title: 'Hello World 7',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_name: 'Crypto', 
    user_id: 1,
    // channel_id: 1
},
{
    title: 'Hello World 8',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_name: 'Crypto', 
    user_id: 2,
    // channel_id: 2
},
{
    title: 'Hello World 8',
    post_body: ' a;sldkfjalser ja;lsdfja;woeirjff;laks ;aslldkfjl;asjdfoin ;alskdfjp;kasd jl;akjsdf sj ;lkasjdf;laksjdfopewa ;lkjasdfl kjaweoi ;laskdjfi ;lkajsfpoujeag ;lkajsdf asr',
    category_name: 'Business', 
    user_id: 2,
    // channel_id: 2
},
];
// function to import seeds into the db upon command 'npm run seed'
const seedPosts = () => Post.bulkCreate(postData);
// exporting the function that creates and inserts the seeds into db 
module.exports = seedPosts;
