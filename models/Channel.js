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
        channel_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 20]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            unique: true,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // post_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false, 
        //     references: {
        //         model: 'post',
        //         key: 'id'
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