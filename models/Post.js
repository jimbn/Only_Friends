// require to use sequelize
const { Model, DataTypes } = require('sequelize');
//required to use sequelize
const sequelize = require('../config/connection');
// creatae our model
class Post extends Model { }

// Initiates models and holds properties
// figure out how to male the model have media in the prop
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // address string length in the future for title
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preview: {
        type: DataTypes.STRING,
        // make it show the first few parts from the post
        allowNull: false
    },
    post_body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // this is our foreign key for our reference 
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }

    },
    // this is our foreign key for our reference 
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    // this is our foreign key
    // channel_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'channel',
    //         key: 'id'
    //     }
    // }
},
    {
        sequelize,
        timeStamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;