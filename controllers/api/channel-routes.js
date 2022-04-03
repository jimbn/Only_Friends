const router = require("express").Router();
const { User, Post, Comment, Channel } = require('../../models');

// GET all channels 
router.get('/', (req, res) => {
    Channel.findAll({
        attributes: [
            'id',
            'channel_name',
            'user_id',
        ],
        include: [
            {
                model: User,
                attributes: [
                    'id',
                    'username',
                ],
                include: [
                    {
                        model: Post,
                        attributes: [
                            'id',
                            'title',
                            'post_body',
                            'category_name'
                        ],
                        include: {
                            model: Comment, 
                            attributes: [
                                'id',
                                'comment_text',
                                'user_id',
                            ],
                            include: [
                                {
                                    model: User,
                                    attributes: [['username', 'comment_owner']]
                                }
                            ]
                        }
                    },
                ]
            }
        ]
    })
    .then(channelData => res.json(channelData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// GET one channel by user_id
router.get('/:user_id', (req, res) => {
    Channel.findOne({
        where: {
            user_id: req.params.user_id
        },
        attributes: [
            'id',
            'channel_name',
            'user_id',
        ],
        include: [
            {
                model: User,
                attributes: [
                    'id',
                    'username',
                ],
                include: [
                    {
                        model: Post,
                        attributes: [
                            'id',
                            'title',
                            'post_body',
                            'category_name'
                        ],
                        include: {
                            model: Comment, 
                            attributes: [
                                'id',
                                'comment_text',
                                'user_id',
                            ],
                            include: [
                                {
                                    model: User,
                                    attributes: [['username', 'comment_owner']]
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    })
    .then(channelData => {
        if(!channelData) {
            res.status(404).json({ message: 'No user channel found with this id'});
            return;
        }
        res.json(channelData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create a channel 
router.post('/', (req, res) => {
    Channel.create({
        channel_name: req.body.channel_name,
        user_id: req.body.user_id /*req.session.user_id*/
    })
    .then(channelData => res.json(channelData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


//delete a channel 
router.delete('/:user_id', (req, res) => {
    Channel.destroy({
        where: {
            user_id: req.params.user_id
        }
    })
    .then(channelData => {
        if(!channelData) {
            res.status(404).json({ message: 'No channel found with this user id'});
            return;
        }
        res.json(channelData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;