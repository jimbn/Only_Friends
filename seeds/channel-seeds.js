const { Channel } = require('../models');

const channelData = [
    {
        channel_name: "Gaming Channel",
        user_id: 1,
        // post_id: 1
    },
    {
        channel_name: "Coding Channel",
        user_id: 2,
        // post_id: 2
    },
    {
        channel_name: "Music Channel",
        user_id: 3,
        // post_id: 3
    },
    {
        channel_name: "Crypto Channel",
        user_id: 4,
        // post_id: 4
    }
];

const seedChannels = () => Channel.bulkCreate(channelData);

module.exports = seedChannels;