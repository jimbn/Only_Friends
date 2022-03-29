// require to use sequelize
const {Model, DataTypes} = require('sequelize');
//required to use sequelize
const sequlize = require('../config/connection'); 
// creatae our model
class Post extends Model{}

// Initiates models and holds properties
Post.init({

});

module.exports = Post;