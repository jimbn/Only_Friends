// required models for associations
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Channel = require('./Channel');
const Category =require('./Category');

// associatyions for user model
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// associatyions for user model
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// associatyions for user model
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// associatyions for user model
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
Post.belongsTo(Category, {
    foreignKey: 'category_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
Post.belongsTo(Channel, {
    foreignKey: 'channel_id'
});

// TO DO: associatyions for category model





module.exports = {User, Post, Comment, Channel, Category}; 