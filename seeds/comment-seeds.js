const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Baby Yoda 4 LYFFEE!!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'This is a comment, deal with it!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'I might have to liquidate my assets :(',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Dont do it!!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'DO IT!!!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'DOGE went to the moon and died',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'how about using multer',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'No body know what that is',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'I do!!!',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'SEND ITTT!!!!!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'DONT TELL ME WHAT TO DO!',
        user_id: 3,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments; 