const router = require("express").Router();
const { User, Post, Comment } = require('../../models');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_body',
            'category_name',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment, 
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: {
                    // username of commenter
                    model: User, 
                    attributes: ['username']
                }
            },
            {
                // owner of post
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router; 