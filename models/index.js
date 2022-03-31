// required models for associations
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Channel = require('./Channel');
const Category =require('./Category');

// associatyions for comment model
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// associatyions for user model
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// associatyions for post model
User.hasMany(Post, {
    foreignkey:'user_id'
});
User.hasOne(Channel, {
    foreignKey: 'user_id'
});

// associatyions for post model
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

// category associations
Category.hasMany(Post,{
    foreignKey:'category_id'
});

// channel associations
Channel.hasMany(Category, {
    foreignKey: 'channel_id'
});

Channel.belongsTo(User, {
    foreignKey: 'user_id'
});

Channel.hasMany(Post, {
    foreignKey: 'channel_id'
});





module.exports = {User, Post, Comment, Channel, Category}; 