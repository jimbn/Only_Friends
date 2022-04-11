// importing post table/model from models folder 
const { Post } = require('../models');
// creating variable, an array ,  to store user seeds 
const postData = [
    {
        title: '',
        post_body: '',
        category_name: 'Business',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Cars',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Coding',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Crypto',
    },
    {
        title: '',
        post_body: '',
        category_name: 'DIY',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Fashion',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Finance',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Fitness',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Food',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Gaming',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Lifestyle',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Movie',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Music',
    },
    {
        title: '',
        post_body: '',
        category_name: 'News',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Parenting',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Pets',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Politics',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Sports',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Tech',
    },
    {
        title: '',
        post_body: '',
        category_name: 'Travel',
    }
];
// function to import seeds into the db upon command 'npm run seed'
const seedPosts = () => Post.bulkCreate(postData);
// exporting the function that creates and inserts the seeds into db 
module.exports = seedPosts;