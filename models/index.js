// required models for associations
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Channel = require('./Channel');


// 1-to-1 relations 

User.hasOne(Channel, {
    foreignKey: 'user_id',
    constraints:false
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    constraints:false
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    constraints:false
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    constraints:false
});

Channel.belongsTo(User, {
    foreignKey: 'user_id',
    constraints: false
});

// 1-to-Many relations 
User.hasMany(Comment, {
    foreignKey: 'user_id',
    constraints:false
});

User.hasMany(Post, {
    foreignkey:'user_id',
    constraints:false
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    constraints:false
});

// Channel.hasMany(Post, {
//     foreignKey: 'channel_id',
//     constraints:false
// }); 

module.exports = {
    User, 
    Post, 
    Comment, 
    Channel
};