// require to use sequelize
const {Model, DataTypes} = require('sequelize');
//required to use sequelize
const sequlize = require('../config/connection'); 
// creatae our model
class Post extends Model{}

// Initiates models and holds properties
Post.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // address string length in the future for title
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false,
        
    }
});

module.exports = Post;