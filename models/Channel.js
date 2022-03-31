const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Channel extends Model {};

Channel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: 'post',
                key: 'id'
            }
        },
        // category_id:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references:{
        //         model: 'category',
        //         key:'id'
        //     }
        // }
    },
    {
        sequelize,
        freezeTableName: true, 
        underscored: true, 
        modelName: 'channel'
    }
);

module.exports = Channel;