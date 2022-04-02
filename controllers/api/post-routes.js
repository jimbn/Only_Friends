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
                attributes: [
                    'id',
                    'comment_text',
                    'user_id',
                    'post_id',
                    'created_at'
                ],
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


// GET one post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'post_body',
            'category_name',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: [['username', 'post_owner']]
            }
        ]
    })
    .then(postData => {
        if(!postData){
            res.status(404).json({ message: 'No post found by this id' });
            return;
        }
        res.json(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST a new post
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_body: req.body.post_body,
        category_name: req.body.category_name,
        user_id: /*req.session.user_id*/ req.body.user_id
    })
});

module.exports = router; 