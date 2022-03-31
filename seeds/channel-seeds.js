const { Channel } = require('../models');

const channelData = [
    {
        user_id: 1,
        post_id: 1,
        catagory_id: 1,
    },
    {
        user_id: 2,
        post_id: 2,
        catagory_id: 2,
    },
    {
        user_id: 3,
        post_id: 3,
        catagory_id: 3,
    },
    {
        user_id: 4,
        post_id: 4,
        catagory_id: 4,
    }
];

const seedChannels = () => Channel.bulkCreate(channelData);

module.exports = seedChannels;