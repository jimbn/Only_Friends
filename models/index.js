// required models for associations
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Channel = require('./Channel');
const Category =require('./Category');

// asociations for user model 
User.hasMany(Comment, {
    foreignKey: 'user_id',
    constraints:false
});

// associatyions for post model
User.hasMany(Post, {
    foreignkey:'user_id',
    constraints:false

});

User.hasOne(Channel, {
    foreignKey: 'user_id',
    constraints:false
});

// channel associations
Channel.hasMany(Category, {
    foreignKey: 'channel_id',
    constraints:false
});

Channel.belongsTo(User, {
    foreignKey: 'user_id',
    constraints:false
});

Channel.hasMany(Post, {
    foreignKey: 'channel_id',
    constraints:false
});

// associations for comment model
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    constraints:false
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    constraints:false
});




// // associations for post model
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    constraints:false
});
Post.belongsTo(Category, {
    foreignKey: 'category_id',
    constraints:false
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
    constraints:false
});
Post.belongsTo(Channel, {
    foreignKey: 'channel_id',
    constraints:false
});

// // category associations
Category.hasMany(Post,{
    foreignKey:'category_id',
    constraints:false
});





module.exports = {User, Post, Comment, Channel,Category};
//  module.exports = {User, Post, Comment, Channel, Category}; 